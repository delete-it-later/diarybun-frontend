import React from 'react'
import Items from '../components/Items'

const IndexPage = ({ query }) => {
  const { page } = query

  return (
    <div>
      <Items page={parseFloat(page) || 1} />
    </div>
  )
}

export default IndexPage
