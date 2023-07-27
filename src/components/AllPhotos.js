import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import { useParams } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export const AllPhotos = (props) => {
  const { albumid } = useParams();
  const [photos, setPhotos] = useState([]);
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState();
  const [albumTitle, setAlbumTitle] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhotos(res.data.filter((d) => d.albumId === Number(albumid)));

      const getAlbum = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${albumid}`
      );
      setAlbumTitle(getAlbum.data.title);
    };
    getData();
  }, [albumid]);

  const handleClickOpen = (item) => {
    setPhoto(photos.filter((photo) => photo.id === item.id)[0]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ImageList>
        <ImageListItem key="Subheader" cols={4}>
          <ListSubheader component="h4">
            Album Title: {albumTitle}
          </ListSubheader>
        </ImageListItem>
        {photos.map((item) => (
          <ImageListItem key={item.id} onClick={() => handleClickOpen(item)}>
            <img
              src={`${item.url}?w=600&h=600&fit=crop&auto=format`}
              srcSet={`${item.thumbnailUrl}?w=150&h=150&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      {photo && (
        <Dialog open={open}>
          <DialogTitle>{photo.title}</DialogTitle>
          <DialogContent>
            <img
              src={photo.url}
              alt={photo.title}
              style={{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }}
            />
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
