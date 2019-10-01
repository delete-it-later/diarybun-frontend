import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from './graphql/queries'

const User = (props) => {
  const { children } = props

  const payload = useQuery(
    CURRENT_USER_QUERY,
    { ...props },
  )

  return (
    <div>
      {children(payload)}
    </div>
  )
}

export default User
