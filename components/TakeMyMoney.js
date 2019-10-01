import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import StripeCheckout from 'react-stripe-checkout'
import { useMutation } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from './graphql/queries'
import { CREATE_ORDER_MUTATION } from './graphql/mutations'
import User from './User'
import calcTotalPrice from '../lib/calcTotalPrice'
import Error from './ErrorMessage'

function totalItems(cart) {
  return cart.reduce(
    (tally, cartItem) => tally + cartItem.quantity,
    0,
  )
}

const TakeMyMoney = (props) => {
  const { children } = props

  const [
    createOrder,
    // { loading, data },
  ] = useMutation(
    CREATE_ORDER_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  )

  const onToken = async (res) => {
    NProgress.start()

    // manually call the mutation once we have the stripe token
    const order = await createOrder({
      variables: {
        token: res.id,
      },
    })
      .catch((error) => {
        // eslint-disable-next-line
        alert(error.message)
      })

    Router.push({
      pathname: '/order',
      query: { id: order.data.createOrder.id },
    })
  }

  return (
    <User>
      {
        ({ data: { me }, loading }) => {
          if (loading) return null

          return (
            <StripeCheckout
              name="Sick Fits"
              amount={calcTotalPrice(me.cart)}
              description={`Order of ${totalItems(me.cart)} items!`}
              email={me.email}
              currency="USD"
              allowRememberMe={false}
              stripeKey="pk_test_L6eUoWK71kMg0qXa17zih7cb00glctCyWS"
              token={(res) => onToken(res)}
            >
              {children}
            </StripeCheckout>
          )
        }
      }
    </User>
  )
}

export default TakeMyMoney
