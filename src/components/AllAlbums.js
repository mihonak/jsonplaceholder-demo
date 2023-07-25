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
import { Link } from "react-router-dom";

export const AllAlbums = (props) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      setAlbums(res.data.filter((d) => d.userId === Number(props.id)));
    };
    getData();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>id</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userId}
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <Link to={`/users/${row.userId}/albums/${row.id}/photos`}>
                    {row.title}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
