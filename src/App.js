import React, { useEffect, useState } from 'react';
import { Container, Typography, AppBar, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts }  from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return(
        <Container maxidth="lg">
            <AppBar className={classes.AppBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Memories App</Typography>
                    {/* <img className={classes.image} src={memories} alt="icon" height="10"/> */}
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;