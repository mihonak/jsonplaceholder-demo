import { Typography } from "@mui/material";

import { CommentList } from "./components/CommentList";

export const Comments = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Comments
      </Typography>
      <CommentList />
    </>
  );
};
