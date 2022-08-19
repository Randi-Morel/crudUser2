import React from 'react';
import {Box, Tab, Typography} from '@mui/material';
import Client from './router/client'


export default function App() {

    return (
        <Box sx={{width: '100%', typography: 'body1'}}>
            <Typography variant="h3" color="initial">
                Tarea 2
            </Typography>
            <Client/>
        </Box>
    );
}
