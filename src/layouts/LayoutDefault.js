import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import NavBar from '../components/NavBar';
import useStyles from './styles/LayoutDefaultStyles';
import Home from '../views/home';
import Users from '../views/users';
import Graph from '../views/graph';

const LayoutDefault = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <Grid container>
        <NavBar />
        <Grid item xs={12} md={12}>
          <div className={classes.mainContainer}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/graph" component={Graph} />
              <Route path="/users" component={Users} />
            </Switch>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default LayoutDefault;
