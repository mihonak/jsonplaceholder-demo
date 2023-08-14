import { useEffect, useState } from "react";

import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack } from "@mui/material";

import { AlbumPicker } from "./AlbumPicker";
import { PhotoList } from "./PhotoList";

export const AlbumList = ({ userId }) => {
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
        );
        setAlbums(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [userId]);
  return (
    <>
      {album ? (
        <>
          <Stack alignItems="right" justifyContent="flex-end" direction="row">
            <Button
              onClick={() => {
                setAlbum();
              }}
            >
              Go Back To Album List
            </Button>
          </Stack>
          <PhotoList albumId={album.id} title={album.title} />
        </>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {albums.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                  onClick={() => {
                    setAlbum(row);
                  }}
                >
                  <TableCell component="th" scope="row" align="right">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>
                    <AlbumPicker albumId={row.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
