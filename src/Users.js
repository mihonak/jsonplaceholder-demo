import { Typography } from "@mui/material";

import { UserList } from "./components/UserList";

export const Users = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Users
      </Typography>
      <UserList />
    </>
  );
};
