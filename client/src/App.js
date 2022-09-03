import React from 'react';
import {Container , AppBar , Typography ,Grid ,Grow} from '@material-ui/core'; 
import memories from './images/memories.png';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';


const App = () => {
    return(
        <Container maxidth = "lg">
            <AppBar position ="static" color="inherit">
                <Typography varient = "h2" align='center'>memories</Typography>
                <img src={memories} alt='memories' height = "60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems='streach' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
