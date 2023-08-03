import { Avatar, AvatarGroup } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export const AlbumPicker = ({ albumId }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );
      setPhotos(res.data);
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
