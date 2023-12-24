import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  return (
    <>
      {isMobile && (
        // Toggle Button for Mobile
        <IconButton
          onClick={toggleDrawer}
          edge="start"
          color="inherit"
          aria-label="menu">
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={toggleDrawer}
        onClick={closeDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: isMobile ? "80%" : 240,
            paddingLeft: "30px",
          },
        }}>
        <List>
          <ListItem component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem component={Link} to="profile">
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem component={Link} to="settings">
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem component={Link} to="products">
            <ListItemText primary="Product" />
          </ListItem>
          <ListItem component={Link} to="logoutpage">
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
