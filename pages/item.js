import React from 'react'
import SingleItem from '../components/SingleItem'

const ItemPage = ({ query }) => {
  const { id } = query

  return (
    <div>
      <SingleItem id={id} />
    </div>
  )
}

export default ItemPage
