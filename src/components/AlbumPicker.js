import { useEffect, useState } from "react";

import { Avatar, AvatarGroup } from "@mui/material";
import axios from "axios";

export const AlbumPicker = ({ albumId }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        );
        setPhotos(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [albumId]);

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
