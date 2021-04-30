import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { makeStyles, Box, Button } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel, a11yProps } from '../components/shared/TabPanel';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const Executive = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Helmet>
        <title>Executive | Milkton</title>
      </Helmet>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Executives" {...a11yProps(0)} />
          <Tab label="Routes" {...a11yProps(1)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button variant="contained" edge="start">
            Add Executive
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button variant="contained" edge="start">
            Add Route
          </Button>
        </Box>
      </TabPanel>
    </>
  );
};

export default Executive;
