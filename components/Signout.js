import React from 'react'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from './graphql/queries'
import { SIGNOUT_MUTATION } from './graphql/mutations'

const Signout = () => {
  const [signout] = useMutation(
    SIGNOUT_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  )

  const handleSignout = () => {
    signout()
    Router.push({ pathname: '/' })
  }

  return (
    <a
      role="button"
      tabIndex="0"
      onClick={handleSignout}
      onKeyPress={handleSignout}
    >
      Signout
    </a>
  )
}

export default Signout
