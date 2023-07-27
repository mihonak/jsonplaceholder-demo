import { useParams } from "react-router-dom";

import { UserInfo } from "./components/UserInfo";
import { AllAlbums } from "./components/AllAlbums";
import { Grid } from "@mui/material";

export const Albums = () => {
  const { id } = useParams();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <UserInfo id={id} />
        </Grid>
        <Grid item xs={12} md={8}>
          <AllAlbums userId={id} />
        </Grid>
      </Grid>
    </>
  );
};
