import { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ListItemContent from "@mui/joy/ListItemContent";
import { Home, Mail, OpenInNew, Person, Phone, Web } from "@mui/icons-material";
import { Link } from "react-router-dom";
export const UserInfo = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${props.id}`
      );
      setUser(res.data);
    };
    getData();
  }, []);

  return (
    <>
      {user && (
        <List>
          <ListItem>
            <ListItemText>
              <Typography>UserID {user.id}</Typography>
              <Typography variant="h4">{user.username}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Fullname</Typography>
              <Typography>{user.name}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Phone />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Phone</Typography>
              <Typography>{user.phone}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Email</Typography>
              <Typography>{user.email}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Web />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Website</Typography>
              <Typography>
                <Link>
                  {user.website}
                  <OpenInNew fontSize="inherit" />
                </Link>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Home />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">Address</Typography>
              <Typography>{user.address.zipcode}</Typography>
              <Typography>
                {user.address.suite}, {user.address.street}, {user.address.city}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BusinessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemContent>
              <Typography variant="h5">Company</Typography>
              <Typography>{user.company.name}</Typography>
              <Typography>{user.company.catchPhrase}</Typography>
              <Typography>{user.company.bs}</Typography>
            </ListItemContent>
          </ListItem>
        </List>
      )}
    </>
  );
};
