import React from 'react'
import OrderList from '../components/OrderList'
import PleaseSignIn from '../components/PleaseSignin'

const OrderPage = () => {
  return (
    <div>
      <PleaseSignIn>
        <OrderList />
      </PleaseSignIn>
    </div>
  )
}

export default OrderPage
