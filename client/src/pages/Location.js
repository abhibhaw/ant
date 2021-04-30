import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel, a11yProps } from '../components/shared/TabPanel';
import AddHub from '../components/location/AddHub';
import DisplayHub from '../components/location/DisplayHub';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const Location = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // eslint-disable-next-line react/jsx-indent
  return (
    <>
      <Helmet>
        <title>Location | Milkton</title>
      </Helmet>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Hubs" {...a11yProps(0)} />
          <Tab label="Regions" {...a11yProps(1)} />
          <Tab label="Locations" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <AddHub />
        <Box p={3} />
        <DisplayHub />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button variant="contained" edge="start">
            Add Region
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button variant="contained" edge="start">
            Add Location
          </Button>
        </Box>
      </TabPanel>
    </>
  );
};

export default Location;
