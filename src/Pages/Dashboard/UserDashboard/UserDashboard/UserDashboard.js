import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import AddReviews from '../AddReviews/AddReviews';
import Pay from '../Pay/Pay';
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../../AdminDashboard/AddProducts/AddProducts';
import MakeAdmin from '../../AdminDashboard/MakeAdmin/MakeAdmin';
import ManageOrders from '../../AdminDashboard/ManageOrders/ManageOrders';
import ManageProducts from '../../AdminDashboard/ManageProducts/ManageProducts';

const drawerWidth = 200;



function UseDashboard(props) {
    const {logOut, admin} = useAuth();
    let { path, url } = useRouteMatch();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
        <Link style={{textDecoration: 'none'}} to="/"> <Button>Home</Button> </Link>
        <Link style={{textDecoration: 'none'}} to="/explorebikes"> <Button>Explores</Button> </Link>
        {
          admin && 
          <Box>
            <Divider />
            <Link style={{textDecoration: 'none'}} to={`${url}`}><Button color="inherit">Make Admin</Button></Link> <br />
            <Divider />
            <Link style={{textDecoration: 'none'}} to={`${url}/addProducts`}><Button color="inherit">Add Products</Button></Link> <br />
            <Divider />
            <Link style={{textDecoration: 'none'}} to={`${url}/manageorders`}><Button color="inherit">Manage Orders</Button></Link> <br />
            <Divider />
            <Link style={{textDecoration: 'none'}} to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link> <br />
            <Divider />
            <Toolbar />
          </Box>
        }
        {
          !admin && 
          <Box>
            <Link style={{textDecoration: 'none'}} to={`${url}`}><Button color="inherit">Dashboard</Button></Link> <br />
            <Divider />
            <Link style={{textDecoration: 'none'}} to={`${url}/addreviews`}><Button color="inherit">Add Reviews</Button></Link> <br />
            <Divider />
            <Link style={{textDecoration: 'none'}} to={`${url}/pay`}><Button color="inherit">Pay</Button></Link> <br/>
            <Divider />
          </Box>
        }
        <Button onClick={logOut}>Logout</Button>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
            { !admin &&
              <Box>
                <Route exact path={path}> <MyOrders></MyOrders> </Route>
                <Route path={`${path}/addreviews`}>
                  <AddReviews></AddReviews>
                </Route>
                <Route path={`${path}/pay`}>
                  <Pay></Pay>
                </Route>
              </Box>
            }

            {
              admin && 
              <Box>
                <Route exact path={path}>
                  <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/addproducts`}>
                  <AddProducts></AddProducts>
                </Route>
                <Route path={`${path}/manageorders`}>
                  <ManageOrders></ManageOrders>
               </Route>
                <Route path={`${path}/manageproducts`}>
                  <ManageProducts></ManageProducts>
                </Route>
              </Box>
            }
        </Switch>

      </Box>
    </Box>
  );
}

UseDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default UseDashboard;
