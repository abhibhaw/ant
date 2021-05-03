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
    url: 'http://localhost:4000/user'
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
