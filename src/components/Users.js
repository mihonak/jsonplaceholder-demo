import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { UserInfo } from "./UserInfo";
import { Counter } from "./Counter";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };
    getData();
  }, []);

  const handleClickOpen = (id) => {
    setOpen(true);
    setUser(users.filter((user) => user.id === id)[0]);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Users
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">UserID</TableCell>
              <TableCell>Usename</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Posts</TableCell>
              <TableCell align="right">Todos</TableCell>
              <TableCell align="right">Albums</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                hover
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => handleClickOpen(row.id)}
              >
                <TableCell component="th" scope="row" align="right">
                  {row.id}
                </TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">
                  <Link to={`/users/${row.id}/posts`}>
                    <Counter
                      url="https://jsonplaceholder.typicode.com/posts"
                      idName="userId"
                      idNumber={row.id}
                    />
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Link to={`/users/${row.id}/todos`}>
                    <Counter
                      url="https://jsonplaceholder.typicode.com/todos"
                      idName="userId"
                      idNumber={row.id}
                    />
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <Link to={`/users/${row.id}/albums`}>
                    <Counter
                      url="https://jsonplaceholder.typicode.com/albums"
                      idName="userId"
                      idNumber={row.id}
                    />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {user && (
        <Dialog open={open}>
          <DialogTitle>User Infomation</DialogTitle>
          <DialogContent>
            <UserInfo id={user.id} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
