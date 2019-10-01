import React from 'react'
import UpdateItem from '../components/UpdateItem'

const UpdatePage = ({ query }) => {
  const { id } = query

  return (
    <div>
      <UpdateItem id={id} />
    </div>
  )
}

export default UpdatePage
