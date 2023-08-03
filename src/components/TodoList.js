import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

export const TodoList = ({ userId }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      );
      setTodos(res.data);
    };
    getData();
  }, [userId]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Completed</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell padding="checkbox">
                  <Checkbox color="primary" checked={row.completed} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
