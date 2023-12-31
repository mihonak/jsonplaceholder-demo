import { useContext, useEffect, useState } from "react";

import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { EndPoint } from "./GlobalValues";

export const PhotoList = ({ albumId, title }) => {
  const [photos, setPhotos] = useState([]);
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState();
  const origin = useContext(EndPoint);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${origin}/photos?albumId=${albumId}`);
        setPhotos(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [albumId, title, origin]);

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
          <ListSubheader component="h4">Album Title: {title}</ListSubheader>
        </ImageListItem>
        {photos.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.url}?w=600&h=600&fit=crop&auto=format`}
              srcSet={`${item.thumbnailUrl}?w=150&h=150&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`zoom up this photo`}
                  onClick={() => handleClickOpen(item)}
                >
                  <ZoomInIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      {photo && (
        <Dialog open={open} onClose={handleClose}>
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
