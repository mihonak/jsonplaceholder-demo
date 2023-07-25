import { useParams } from "react-router-dom";

import { UserInfo } from "./components/UserInfo";
import { AllPosts } from "./components/AllPosts";
import { Grid } from "@mui/material";

export const Posts = () => {
  const { id } = useParams();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <UserInfo id={id} />
        </Grid>
        <Grid item xs={12} md={8}>
          <AllPosts id={id} />
        </Grid>
      </Grid>
    </>
  );
};
