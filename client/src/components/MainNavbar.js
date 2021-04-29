import { Link as RouterLink } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar elevation={0} {...props}>
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton color="inherit" href="https://gepton.com">
        <HelpIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
