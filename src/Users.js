import { Typography } from "@mui/material";

import { UserList } from "./components/UserList";

export const Users = () => {
  return (
    <>
      <Typography
        variant="h5"
        component="h1"
        align="center"
        color="gray"
        gutterBottom
      >
        Users
      </Typography>
      <UserList />
    </>
  );
};
