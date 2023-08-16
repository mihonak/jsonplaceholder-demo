import { useEffect, useState, useContext } from "react";

import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Counter } from "./Counter";
import { EndPoint } from "./GlobalValues";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const origin = useContext(EndPoint);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${origin}/users`);
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
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
                onClick={() => {
                  window.location.href = `/user/${row.id}`;
                }}
              >
                <TableCell component="th" scope="row" align="right">
                  {row.id}
                </TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">
                  <Counter resource="posts" idName="userId" idNumber={row.id} />
                </TableCell>
                <TableCell align="right">
                  <Counter resource="todos" idName="userId" idNumber={row.id} />
                </TableCell>
                <TableCell align="right">
                  <Counter
                    resource="albums"
                    idName="userId"
                    idNumber={row.id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
