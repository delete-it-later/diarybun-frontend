import React from 'react'
import Head from 'next/head'
import { format } from 'date-fns'
import { useQuery } from '@apollo/react-hooks'
import { SINGLE_ORDER_QUERY } from './graphql/queries'
import formatMoney from '../lib/formatMoney'
import Error from './ErrorMessage'
import OrderStyles from './styles/OrderStyles'
import Loading from './styles/Loading'

const Order = (props) => {
  const { id } = props

  const { loading, error, data } = useQuery(
    SINGLE_ORDER_QUERY,
    { variables: { id } },
  )

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  const { order } = data

  return (
    <OrderStyles data-test="order">
      <Head>
        <title>
          Sick Fits - Order
          {' '}
          {order.id}
        </title>
      </Head>
      <p>
        <span>Order ID:</span>
        <span>{id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Date:</span>
        <span>
          {/* {format(order.createdAt, 'MMMM d, YYYY h:mm a', { awareOfUnicodeTokens: true })} */}
        </span>
      </p>
      <p>
        <span>Order Total:</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>Item Count:</span>
        <span>{order.items.length}</span>
      </p>
      <div className="items">
        {
          order.items.map((item) => (
            <div className="order-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h2>{item.title}</h2>
                <p>
                  Quantity:
                  {' '}
                  {item.quantity}
                </p>
                <p>
                  Each:
                  {' '}
                  {formatMoney(item.price)}
                </p>
                <p>
                  SubTotal:
                  {' '}
                  {formatMoney(item.price * item.quantity)}
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </OrderStyles>
  )
}

export default Order
