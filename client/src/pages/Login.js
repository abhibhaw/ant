/* eslint-disable object-curly-newline */
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import UserContext from '../context/userContext';

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(UserContext);

  return (
    <>
      <Helmet>
        <title>Login | Milkton</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().max(255).required('Username is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(values) => {
              axios({
                method: 'post',
                data: values,
                withCredentials: true,
                url: process.env.REACT_APP_LOGIN_URL
              }).then((res) => {
                if (res.data === 'Successfully Authenticated') {
                  setIsLoggedIn(true);
                  navigate('/app/dashboard', { replace: true });
                }
              });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box alignItems="center" display="flex" flexDirection="column">
                  <img
                    alt="Gepton Logo"
                    src="https://github.com/GEPTON-INFOTECH/GEPTON-INFOTECH/raw/main/branding/gepton%20-128px.png"
                  />
                </Box>
                <Box
                  sx={{ mb: 3, mt: 1 }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Typography color="textPrimary" variant="h2">
                    Milkton
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Platform for Shree Surbhi Jadkhor Godham
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.username && errors.username)}
                  fullWidth
                  helperText={touched.username && errors.username}
                  label="Username"
                  margin="normal"
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.username}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
