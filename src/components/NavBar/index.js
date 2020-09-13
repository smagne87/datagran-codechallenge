import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <AppBar color="secondary">
    <Toolbar>
      <Button variant="contained" component={Link} to="/" color="primary">
        Home
      </Button>
      <Button variant="contained" component={Link} to="/graph" color="primary">
        Graph
      </Button>
      <Button variant="contained" component={Link} to="/users" color="primary">
        Users
      </Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;
