import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import MessageIcon from "@mui/icons-material/Message";
import { CardActions } from "@mui/joy";

export const Home = () => {
  return (
    <>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        mt={10}
      >
        <Grid item xs={12} sm={8} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Users</Typography>
              <Typography color="text.secondary">
                10 users data which contains userid, username, phone, email,
                website, address, and company information.
              </Typography>
              <Typography color="text.secondary">
                Each user has related posts, todos, and albums list, and each
                albums has 50 pictures.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/users" startIcon={<PeopleIcon />}>
                Users
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Comments</Typography>
              <Typography color="text.secondary">
                500 data which contains id, postid, name, email, and comment
                body.
              </Typography>
              <Typography color="text.secondary">
                Postid is up to 100, and each postid has 5 comment data.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/comments" startIcon={<MessageIcon />}>
                Comments
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
