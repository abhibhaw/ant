import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import './mixins/chartjs';
import theme from './theme';
import routes from './routes';
import GlobalStyles from './components/GlobalStyles';
import User from './context/userContext';
// eslint-disable-next-line object-curly-newline
import { username, firstName, lastName } from './services/auth';

const isLoggedIn = true;

const App = () => {
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <User.Provider value={{ username, firstName, lastName }}>
        {routing}
      </User.Provider>
    </ThemeProvider>
  );
};

export default App;
