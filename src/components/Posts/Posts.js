import React from 'react';
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(`State of redux`, posts);
    return(
    
            !posts.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>    
                    { posts.map( post => (
                        <Grid item xs={12} sm={6} md={6} key={post._id}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    )) }
                </Grid>
            )
    );
};

export default Posts;