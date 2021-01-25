import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId}) => {
    const classes = useStyles();
    const post = useSelector(state => currentId ? state.posts.find(post => post._id === currentId)  : null );
    const [postData, setPostData] = useState({
        title: '', message: '', creator: '', tags: '', selectedFile: ''
    });
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    useEffect(() => {
        // console.log(postData);
    }, [postData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, postData));
            clear();
        }else{
            dispatch(createPost(postData));
            clear();
        }
    }

    const clear = () => {
            setPostData({
                title: '', message: '', creator: '', tags: '', selectedFile: ''
            });
            setCurrentId(null);
    }
    return(
        <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{ currentId ? 'Editing' : 'Creating'} a memory</Typography>
                        <TextField value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} variant="outlined" 
                        name="creator" label="Creator" fullWidth />

                        <TextField value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} variant="outlined" 
                        name="title" label="Title" fullWidth />

                        <TextField value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} variant="outlined" 
                        name="message" label="Message" rows={4} multiline fullWidth />

                        <TextField value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(",")})} variant="outlined" 
                        name="tags" label="tags" fullWidth />

                        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} /></div>
                        <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" color="primary" fullWidth>Submit</Button>
                        <Button variant="contained" size="small" color="secondary" onClick={clear} fullWidth>Clear</Button>
                </form>
        </Paper>
    );
};

export default Form; 