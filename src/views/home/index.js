import React from 'react';
import cls from 'classnames';

import useStyles from './HomeStyles';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeMainContainer}>
      <div className={cls([classes.container, 'home-search-container'])}>
        <h2>Welcome to Datagran Code challenge</h2>
        <p>Click on the post to get some details.</p>
      </div>
    </div>
  );
};

export default Home;
