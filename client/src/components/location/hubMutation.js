import { gql } from '@apollo/client';

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

const DELETE_HUB = gql`
  mutation DELETE_HUB($id: ID!) {
    deleteHub(id: $id) {
      id
      hubName
      mobileNo
      email
      address
    }
  }
`;

export { DELETE_HUB, ADD_HUB };
