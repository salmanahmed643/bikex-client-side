import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useAuth from "../../hooks/useAuth";

export default function Navigation() {
  const {user, logOut} = useAuth();
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "#fff",
      textDecoration: "none",
    },
    mobileNavItem: {
      color: "#000",
      textDecoration: "none",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
  });

  const { navItem, mobileNavItem, navIcon, navItemContainer } = useStyle();
  const [state, setState] = React.useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={navItem} to="/">
                <Button color="inherit">BikeX</Button>
            </Link>
            </Typography>
            <Box className={navItemContainer}>
              <Typography sx={{fontSize: 14}} variant="h6">{user.displayName}</Typography>
            </Box>
            <Box className={navItemContainer}>
              <Link className={navItem} to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link className={navItem} to="/explorebikes">
                <Button color="inherit">Explores</Button>
              </Link>
            </Box>
            {
              user?.email ?
              <Box>
              <Link className={navItem} to="/userdashboard">
              <Button color="inherit">Dashboard</Button>
              </Link>
                <Button onClick={logOut} color="inherit">Logout</Button>
              </Box>
              :
              <Box>
                <Link className={navItem} to="/login">
                  <Button color="inherit">Login</Button>
                </Link>
              </Box>
            }
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>

            <Box sx={{ width: 200 }} role="presentation">
              <List>
                <Box className={mobileNavItem}>
                  <Typography variant="p">{user.displayName}</Typography>
                </Box>
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNavItem} to="/">
                      Home
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNavItem} to="/products">
                      Products
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
}
