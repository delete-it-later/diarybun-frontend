import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY } from './graphql/queries'
import { TOGGLE_CART_MUTATION } from './graphql/mutations'
// import User from './User'
import TakeMyMoney from './TakeMyMoney'
import CartItem from './CartItem'
import formatMoney from '../lib/formatMoney'
import calcTotalPrice from '../lib/calcTotalPrice'
import CartStyles from './styles/CartStyles'
import Supreme from './styles/Supreme'
import SickButton from './styles/SickButton'
import CloseButton from './styles/CloseButton'

const Cart = () => {
  const { data: userData, loading } = useQuery(CURRENT_USER_QUERY)
  const { data: localStateData } = useQuery(LOCAL_STATE_QUERY)
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION)

  if (loading) return null
  if (!userData.me) return null

  return (
    <CartStyles open={localStateData.cartOpen}>
      <header>
        <CloseButton
          title="close"
          onClick={toggleCart}
        >
          &times;
        </CloseButton>
        <Supreme>{`${userData.me.name}'s Cart`}</Supreme>
        <p>
          {
            `You have ${userData.me.cart.length} ${userData.me.cart.length === 1 ? 'item' : 'items'} in your cart.`
          }
        </p>
      </header>
      <ul>
        {
          userData.me.cart.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))
        }
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(userData.me.cart))}</p>
        <TakeMyMoney>
          <SickButton>Order</SickButton>
        </TakeMyMoney>
      </footer>
    </CartStyles>
  )
}

export default Cart
