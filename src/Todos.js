import { useParams } from "react-router-dom";

import { AllTodos } from "./components/AllTodos";
import { UserInfo } from "./components/UserInfo";
import { Grid, Typography } from "@mui/material";

export const Todos = () => {
  const { id } = useParams();
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Users
      </Typography>
      <Grid container>
        <Grid item xs={12} md={4}>
          <UserInfo id={id} />
        </Grid>
        <Grid item xs={12} md={8}>
          <AllTodos id={id} />
        </Grid>
      </Grid>
    </>
  );
};
