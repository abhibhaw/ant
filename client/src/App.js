import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import './mixins/chartjs';
import theme from './theme';
import routes from './routes';
import GlobalStyles from './components/GlobalStyles';

const isLoggedIn = true;

const App = () => {
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
