import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const ADD_HUB = gql`
  mutation AddHub(
    $hubName: String!
    $address: String!
    $email: String!
    $mobileNo: String!
  ) {
    addHub(
      hubName: $hubName
      address: $address
      email: $email
      mobileNo: $mobileNo
    ) {
      id
      hubName
      address
      email
      mobileNo
    }
  }
`;
const AddHub = (props) => {
  const [addHub, { data, loading, error }] = useMutation(ADD_HUB);
  const [values, setValues] = useState({
    hubName: '',
    address: '',
    email: '',
    mobileNo: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addHub({
      variables: {
        hubName: values.hubName,
        address: values.address,
        email: values.email,
        mobileNo: values.mobileNo
      }
    }).then(console.log(data));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <form autoComplete="off" noValidate {...props} onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="All fields are Required." title="Add New Hub" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Hub Name will be Displayed on App Side."
                label="Hub name"
                name="hubName"
                onChange={handleChange}
                required
                value={values.hubName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                required
                value={values.address}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNo"
                onChange={handleChange}
                type="number"
                required
                value={values.mobileNo}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Add New Hub
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AddHub;