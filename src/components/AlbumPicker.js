import { useContext, useEffect, useState } from "react";

import { Avatar, AvatarGroup } from "@mui/material";
import axios from "axios";

import { EndPoint } from "./GlobalValues";

export const AlbumPicker = ({ albumId }) => {
  const [photos, setPhotos] = useState([]);
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
  }, [albumId, origin]);

  return (
    <>
      <AvatarGroup total={photos.length}>
        {photos.map((d) => (
          <Avatar key={d.id} alt={d.title} src={d.thumbnailUrl} />
        ))}
      </AvatarGroup>
    </>
  );
};
