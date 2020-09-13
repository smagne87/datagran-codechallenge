import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Grid } from '@material-ui/core';
import { userActions, postActions, commentActions } from '../../actions';

import useStyles from './UsersStyles';
import Loader from '../../components/Loader';

const Users = () => {
  const [userId, setUserId] = useState();
  const [postId, setPostId] = useState();
  const [username, setUsername] = useState();
  const [postTitle, setPostTitle] = useState();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { users, posts, comments } = useSelector(state => ({
    users: state.users,
    posts: state.posts,
    comments: state.comments,
  }));

  const onViewPostsClick = (id, uname) => {
    setUserId(id);
    setUsername(uname);
  };

  const onViewCommentsClick = (id, posttitle) => {
    setPostId(id);
    setPostTitle(posttitle);
  };

  useEffect(() => {
    dispatch(userActions.getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(postActions.getPostsByUser(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    dispatch(commentActions.getCommentsByPost(postId));
  }, [dispatch, postId]);

  return (
    <Container>
      <h2>Users Grid</h2>
      <Grid container className={classes.gridContainer}>
        {!users.loading
          && !users.fail
          && users.users.map(user => (
            <Grid container key={`user-${user.id}`} className={classes.gridItem}>
              <Grid item md={3}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    onViewPostsClick(user.id, user.username);
                  }}
                >
                  View Posts
                </Button>
              </Grid>
              <Grid item md={3}>
                {user.name}
              </Grid>
              <Grid item md={3}>
                {user.username}
              </Grid>
              <Grid item md={3}>
                {user.email}
              </Grid>
            </Grid>
          ))}
      </Grid>
      {posts.loading && (<Loader />)}
      {userId && !posts.loading && !posts.fail && (
        <>
          <h2>{`${username}'s Posts`}</h2>
          <Grid container className={classes.gridContainer}>
            {posts.posts.map(post => (
              <Grid container key={`post-${post.id}`} className={classes.gridItem}>
                <Grid item md={3}>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      onViewCommentsClick(post.id, post.title);
                    }}
                  >
                    View Comments
                  </Button>
                </Grid>
                <Grid item md={3}>
                  {post.title}
                </Grid>
                <Grid item md={6}>
                  {post.body}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      {comments.loading && (<Loader />)}
      {postId && !comments.loading && !comments.fail && (
        <>
          <h2>{`${postTitle}'s Comments`}</h2>
          <Grid container className={classes.gridContainer}>
            {comments.comments.map(comment => (
              <Grid container key={`comment-${comment.id}`} className={classes.gridItem}>
                <Grid item md={3}>
                  {comment.name}
                </Grid>
                <Grid item md={3}>
                  {comment.email}
                </Grid>
                <Grid item md={6}>
                  {comment.body}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Users;
