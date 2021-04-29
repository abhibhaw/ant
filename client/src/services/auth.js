/* eslint-disable import/no-mutable-exports */
import axios from 'axios';

let isLoggedIn = false;
let username = '';
let firstName = '';
let lastName = '';

const fetchUser = () => {
  axios({
    method: 'get',
    withCredentials: true,
    url: 'http://localhost:4000/user'
  }).then((response) => {
    if (response.data) {
      isLoggedIn = true;
      username = response.data.username;
      firstName = response.data.firstName;
      lastName = response.data.lastName;
    }
  });
};
fetchUser();

// eslint-disable-next-line object-curly-newline
export { isLoggedIn, username, firstName, lastName };
