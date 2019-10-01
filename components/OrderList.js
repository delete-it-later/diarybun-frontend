import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { formatDistance } from 'date-fns'
import { useQuery } from '@apollo/react-hooks'
import { USER_ORDERS_QUERY } from './graphql/queries'
import formatMoney from '../lib/formatMoney'
import Error from './ErrorMessage'
import OrderItemStyles from './styles/OrderItemStyles'
import Loading from './styles/Loading'

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-left: 0;
`

const OrderList = () => {
  const {
    loading,
    error,
    data,
  } = useQuery(USER_ORDERS_QUERY)

  if (loading) return <Loading />
  if (error) return <Error erorr={error} />

  return (
    <div>
      <h2>
        You have
        {' '}
        {data.orders.length}
        {' '}
        orders
      </h2>
      <OrderUl>
        {
          data.orders.map((order) => (
            <OrderItemStyles key={order.id}>
              <Link
                href={{
                  pathname: '/order',
                  query: { id: order.id },
                }}
              >
                <a>
                  <div className="order-meta">
                    <p>
                      {order.items.reduce((a, b) => a + b.quantity, 0)}
                      {' '}
                      Items
                    </p>
                    <p>
                      {order.items.length}
                      {' '}
                      Products
                    </p>
                    {/* <p>{formatDistance(order.createdAt, new Date())}</p> */}
                    <p>{formatMoney(order.total)}</p>
                  </div>
                  <div className="images">
                    {
                      order.items.map((item) => (
                        <img
                          key={item.id}
                          src={item.image}
                          alt={item.title}
                        />
                      ))
                    }
                  </div>
                </a>
              </Link>
            </OrderItemStyles>
          ))
        }
      </OrderUl>
    </div>
  )
}

export default OrderList
