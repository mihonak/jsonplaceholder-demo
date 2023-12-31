import { useContext, useEffect, useState } from "react";

import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { EndPoint } from "./GlobalValues";

export const CommentList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const origin = useContext(EndPoint);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${origin}/comments?postId=${page}`);
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [page, origin]);
  return (
    <>
      <Stack spacing={2} alignItems="center" mt={2} mb={2}>
        <Pagination count={100} page={page} onChange={handleChange} />
      </Stack>
      <Typography variant="body1" component="h2" gutterBottom>
        PostID {page}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>E-mail</TableCell>
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
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} alignItems="center" mt={2}>
        <Pagination count={100} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
};
