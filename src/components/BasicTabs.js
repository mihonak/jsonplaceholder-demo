import { useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

import { PostList } from "./PostList";
import { TodoList } from "./TodoList";
import { AlbumList } from "./AlbumList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = useState(0);

  const { userId } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="Todos" {...a11yProps(1)} />
          <Tab label="Albums" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PostList userId={userId} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TodoList userId={userId} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AlbumList userId={userId} />
      </CustomTabPanel>
    </Box>
  );
}
