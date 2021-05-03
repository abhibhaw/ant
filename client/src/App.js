import 'react-perfect-scrollbar/dist/css/styles.css';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import './mixins/chartjs';
import UserContext from './context/userContext';
import fetchUser from './services/auth';
import routes from './routes';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(true);
  const routing = useRoutes(routes(isLoggedIn, loading));

  fetchUser(setIsLoggedIn, setLoading, setUsername, setFirstName, setLastName);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          loading,
          setLoading,
          username,
          setUsername,
          firstName,
          setFirstName,
          lastName,
          setLastName
        }}
      >
        {routing}
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
