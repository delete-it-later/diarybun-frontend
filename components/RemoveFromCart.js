import React from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from './graphql/queries'
import { REMOVE_FROM_CART_MUTATION } from './graphql/mutations'

const BigButton = styled.button`
  font-size: 3.5rem;
  background: none;
  border: 0;
  &:hover {
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
`

const RemoveFromCart = (props) => {
  const { id } = props

  const [
    removeFromCart,
    { loading },
  ] = useMutation(
    REMOVE_FROM_CART_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
    // {
    //   update(cache, payload) {
    //     // 1. first read the cache
    //     const data = cache.readQuery({ query: CURRENT_USER_QUERY })

    //     // 2. remove that item from the cart
    //     // const cartItemId = payload.data.removeFromCart
    //     //   ? removeFromCart.id
    //     //   : null
    //     // data.me.cart = data.me.cart.filter(
    //     //   (cartItem) => cartItem.id !== cartItemId,
    //     // )

    //     data.me.cart = []

    //     // 3. write it back to the cache
    //     cache.writeQuery({ query: CURRENT_USER_QUERY, data })
    //   },
    // },
  )

  return (
    <BigButton
      disabled={loading}
      onClick={() => {
        removeFromCart({
          variables: { id },
          optimisticResponse: {
            __typename: 'Mutation',
            removeFromCart: {
              __typename: 'CartItem',
              id,
            },
          },
        })
          .catch((error) => alert(error.message))
      }}
      title="Delete Item"
    >
      &times;
    </BigButton>
  )
}

export default RemoveFromCart
