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

export const PostList = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      setPosts(res.data);
    };
    getData();
  }, [userId]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
