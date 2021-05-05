import axios from 'axios';

const fetchUser = (
  setIsLoggedIn,
  setLoading,
  setUsername,
  setFirstName,
  setLastName
) => {
  axios({
    method: 'get',
    withCredentials: true,
    url: process.env.REACT_APP_USER_URL
  })
    .then((response) => {
      if (response.data) {
        setIsLoggedIn(true);
        setUsername(response.data.username);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
      }
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default fetchUser;
