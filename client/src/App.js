import 'react-perfect-scrollbar/dist/css/styles.css';
import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import axios from 'axios';
import './mixins/chartjs';
import theme from './theme';
import routes from './routes';
import GlobalStyles from './components/GlobalStyles';

import Login from './pages/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const routing = useRoutes(routes);

  useEffect(() => {
    const fetchUser = () => {
      axios({
        method: 'get',
        withCredentials: true,
        url: 'http://localhost:4000/user'
      }).then((response) => {
        if (response.data) {
          setIsLoggedIn(true);
        }
      });
    };

    fetchUser();
  }, []);

  if (isLoggedIn) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    );
  }
  return <Login />;
};

export default App;
