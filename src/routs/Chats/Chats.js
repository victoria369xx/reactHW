import React from 'react';
import {ChatList} from '..//..//components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'




export default function Chats ({children}) {
    return (
        <Container maxWidth="md" >
      <h1>React App</h1> 
        <Grid container xs={12} spacing={2}>
            <Grid item xs={4}>
              <ChatList/>
            </Grid>
            <Grid item xs={6}>
            {children}
            </Grid>
        </Grid>
      </Container>
    )
}

