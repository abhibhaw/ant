import { useEffect, useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  }, [isLoggedIn, setIsLoggedIn]);
};

export default Auth;
