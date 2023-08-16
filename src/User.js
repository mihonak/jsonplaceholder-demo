import { useParams } from "react-router-dom";

import { Grid } from "@mui/material";

import { UserInfo } from "./components/UserInfo";
import { BasicTabs } from "./components/BasicTabs";

export const User = () => {
  const { userId } = useParams();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <UserInfo userId={userId} />
        </Grid>
        <Grid item xs={12} md={8}>
          <BasicTabs />
        </Grid>
      </Grid>
    </>
  );
};
