import React from 'react'
import PleaseSignIn from '../components/PleaseSignin'
import Order from '../components/Order'

const OrderPage = ({ query }) => {
  const { id } = query

  return (
    <div>
      <PleaseSignIn>
        <Order id={id} />
      </PleaseSignIn>
    </div>
  )
}

export default OrderPage
