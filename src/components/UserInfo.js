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
            <ListItemAvatar sx={{ display: { xs: "none", md: "flex" } }}>
              <Avatar>
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 24 },
                  borderBottom: { xs: 1, md: "none" },
                }}
              >
                Fullname
              </Typography>
              <Typography>{user.name}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ display: { xs: "none", md: "flex" } }}>
              <Avatar>
                <Phone />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 24 },
                  borderBottom: { xs: 1, md: "none" },
                }}
              >
                Phone
              </Typography>
              <Typography>{user.phone}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ display: { xs: "none", md: "flex" } }}>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 24 },
                  borderBottom: { xs: 1, md: "none" },
                }}
              >
                Email
              </Typography>
              <Typography>{user.email}</Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ display: { xs: "none", md: "flex" } }}>
              <Avatar>
                <Web />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 24 },
                  borderBottom: { xs: 1, md: "none" },
                }}
              >
                Website
              </Typography>
              <Typography>
                <Link>
                  {user.website}
                  <OpenInNew fontSize="inherit" />
                </Link>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ display: { xs: "none", md: "flex" } }}>
              <Avatar>
                <Home />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 24 },
                  borderBottom: { xs: 1, md: "none" },
                }}
              >
                Address
              </Typography>
              <Typography>{user.address.zipcode}</Typography>
              <Typography>
                {user.address.suite}, {user.address.street}, {user.address.city}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar sx={{ display: { xs: "none", md: "flex" } }}>
              <Avatar>
                <BusinessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemContent>
              <Typography
                sx={{
                  fontSize: { xs: 12, md: 24 },
                  borderBottom: { xs: 1, md: "none" },
                }}
              >
                Company
              </Typography>
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
