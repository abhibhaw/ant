import { gql } from '@apollo/client';

const GET_HUBS = gql`
  {
    hubs {
      id
      hubName
      mobileNo
      email
      address
    }
  }
`;

export default GET_HUBS;
