import React from 'react';
import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Users } from './views/Users';
// import AddUser from './components/AddUser';

export default function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Typography variant="h3" color="initial">
        Tarea 2
      </Typography>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab label="Users" value="1" />
            <Tab label="Professions" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">{
          <Users />
        }</TabPanel>
        <TabPanel value="2">Professions</TabPanel>
      </TabContext>
    </Box>
  );
}