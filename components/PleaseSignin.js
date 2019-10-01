import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from './graphql/queries'
import Signin from './Signin'
import Loading from './styles/Loading'

const PleaseSignin = (props) => {
  const { children } = props

  const { loading, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <Loading />

  if (!data.me) {
    return (
      <>
        <p>Please sign in before continuing</p>
        <Signin />
      </>
    )
  }

  return (
    <div>
      { children }
    </div>
  )
}

export default PleaseSignin
