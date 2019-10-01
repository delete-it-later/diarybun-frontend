import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from './graphql/queries'
import { ADD_TO_CART_MUTATION } from './graphql/mutations'

const AddToCart = (props) => {
  const { id } = props

  const [
    addToCart,
    { loading },
  ] = useMutation(
    ADD_TO_CART_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  )

  const addToCartHandler = () => {
    addToCart({
      variables: { id },
    })
  }

  return (
    <button
      type="button"
      disabled={loading}
      onClick={addToCartHandler}
    >
      {`ADD${loading ? 'ING' : ''} TO CART `}
      <span role="img" aria-label="emoji">🛍</span>
    </button>
  )
}

export default AddToCart
