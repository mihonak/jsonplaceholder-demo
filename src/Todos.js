import { useParams } from "react-router-dom";

import { AllTodos } from "./components/AllTodos";
import { UserInfo } from "./components/UserInfo";
import { Grid } from "@mui/material";

export const Todos = () => {
  const { id } = useParams();
  return (
    <>
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
