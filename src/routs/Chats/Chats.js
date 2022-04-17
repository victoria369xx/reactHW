import React from 'react';
import {ChatList} from '..//..//components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';




export default function Chats ({children}) {
    return (
        <Container maxWidth="md" >
        <Grid item container xs={12} spacing={2}>
            <Grid item xs={4}>
              <ChatList/>
            </Grid>
            <Grid item xs={6}>
            {children}
            </Grid>
        </Grid>
        <Link to="/profile" style={{marginBottom: '2rem'}}>Profile</Link>
      </Container>
    )
}

