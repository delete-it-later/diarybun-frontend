import React from 'react'
import Link from 'next/link'
import { useMutation } from '@apollo/react-hooks'
import { TOGGLE_CART_MUTATION } from './graphql/mutations'
import User from './User'
import Signout from './Signout'
import CartCount from './CartCount'
import NavStyles from './styles/NavStyles'

const Nav = () => {
  const [toggleCart] = useMutation(TOGGLE_CART_MUTATION)

  return (
    <User>
      {
        ({ loading, data }) => {
          if (loading) return null
          const me = data ? data.me : null

          return (
            <NavStyles>
              <Link href="/items">
                <a>Shop</a>
              </Link>
              {
                me && (
                <>
                  <Link href="/sell">
                    <a>Sell</a>
                  </Link>
                  <Link href="/orders">
                    <a>Orders</a>
                  </Link>
                  {/* <Link href="/me">
                    <a>Account</a>
                  </Link> */}
                  <Signout />
                  <button
                    type="button"
                    onClick={toggleCart}
                  >
                    {'My Cart'}
                    <CartCount
                      count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
                    />
                  </button>
                </>
                )
              }
              {
                !me && (
                  <Link href="/signin">
                    <a>Signin</a>
                  </Link>
                )
              }
            </NavStyles>
          )
        }
      }
    </User>
  )
}

export default Nav
