import { gql } from 'apollo-boost'
import { perPage } from '../../config'

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($first: Int = ${perPage}, $skip: Int = 0) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      description
      image
      largeImage
      price
    }
  }
`

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
      price
    }
  }
`

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      name
      email
      permissions
      cart {
        id
        quantity
        item {
          id
          title
          description
          image
          price
        }
      }
    }
  }
`

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`

const LOCAL_STATE_QUERY = gql`
  query LOCAL_STATE_QUERY {
    cartOpen @client
  }
`

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      createdAt
      user {
        id
      }
      items {
        id
        title
        description
        price
        image
        quantity
      }
    }
  }
`

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`

export {
  ALL_ITEMS_QUERY,
  SINGLE_ITEM_QUERY,
  ALL_USERS_QUERY,
  CURRENT_USER_QUERY,
  PAGINATION_QUERY,
  LOCAL_STATE_QUERY,
  SINGLE_ORDER_QUERY,
  USER_ORDERS_QUERY,
}
