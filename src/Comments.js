import { Typography } from "@mui/material";

import { CommentList } from "./components/CommentList";

export const Comments = () => {
  return (
    <>
      <Typography
        variant="h5"
        component="h1"
        align="center"
        gutterBottom
        color="gray"
      >
        Comments
      </Typography>
      <CommentList />
    </>
  );
};
