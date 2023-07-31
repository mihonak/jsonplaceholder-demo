import { useParams } from "react-router-dom";

import { Grid, Typography } from "@mui/material";

import { UserInfo } from "./components/UserInfo";
import { BasicTabs } from "./components/BasicTabs";

export const User = () => {
  const { id } = useParams();

  return (
    <>
      <Typography variant="h3" gutterBottom>
        User
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <UserInfo id={id} />
        </Grid>
        <Grid item xs={12} md={8}>
          <BasicTabs id={id} />
        </Grid>
      </Grid>
    </>
  );
};
