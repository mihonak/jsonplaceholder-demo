import { Grid } from "@mui/material";
import { AllPhotos } from "./components/AllPhotos";
import { UserInfo } from "./components/UserInfo";
import { useParams } from "react-router-dom";

export const Photos = () => {
  const { id } = useParams();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <UserInfo id={id} />
        </Grid>
        <Grid item xs={12} md={8}>
          <AllPhotos />
        </Grid>
      </Grid>
    </>
  );
};
