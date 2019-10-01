import { gql } from 'apollo-boost'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!,
    $email: String!,
    $password: String!,
  ) {
    signup(name: $name, email: $email, password: $password) {
      id
      name
      email
    }
  }
`

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION(
    $email: String!,
    $password: String!,
  ) {
    signin(
      email: $email,
      password: $password,
    ) {
      id
    }
  }
`

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!,
    $password: String!,
    $confirmPassword: String!,
  ) {
    resetPassword(
      resetToken: $resetToken,
      password: $password,
      confirmPassword: $confirmPassword,
    ) {
      id
      name
      email
    }
  }
`

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!,
    $description: String!,
    $image: String,
    $largeImage: String,
    $price: Int!,
  ) {
    createItem(
      title: $title,
      description: $description,
      image: $image,
      largeImage: $largeImage,
      price: $price,
    ) {
      id
    }
  }
`

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!,
    $title: String,
    $description: String,
    $price: Int,
  ) {
    updateItem(
      id: $id,
      title: $title,
      description: $description,
      price: $price,
    ) {
      id
      title
      description
      price
    }
  }
`

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation UPDATE_PERMISSIONS_MUTATION(
    $permissions: [Permission],
    $userId: ID!
  ) {
    updatePermissions(
      permissions: $permissions,
      userId: $userId
    ) {
      id
      name
      email
      permissions
    }
  }
`

const TOGGLE_CART_MUTATION = gql`
  mutation TOGGLE_CART_MUTATION {
    toggleCart @client
  }
`

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`

const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`

export {
  SIGNUP_MUTATION,
  SIGNIN_MUTATION,
  SIGNOUT_MUTATION,
  REQUEST_RESET_MUTATION,
  RESET_MUTATION,
  CREATE_ITEM_MUTATION,
  UPDATE_ITEM_MUTATION,
  DELETE_ITEM_MUTATION,
  UPDATE_PERMISSIONS_MUTATION,
  TOGGLE_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION,
  CREATE_ORDER_MUTATION,
}
