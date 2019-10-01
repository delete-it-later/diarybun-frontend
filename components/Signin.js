import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from './graphql/queries'
import { SIGNIN_MUTATION } from './graphql/mutations'
import Error from './ErrorMessage'
import Form from './styles/Form'

const Signin = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const [signin, { loading, error }] = useMutation(
    SIGNIN_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  )

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signin({ variables: { ...state } })
    setState({
      email: '',
      password: '',
    })
    Router.push({ pathname: '/' })
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Sign in to your account</h2>
        <Error error={error} />
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.emil}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.emil}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Signin</button>
        <Link href="/signup">
          <a>Create Account</a>
        </Link>
      </fieldset>
    </Form>
  )
}

export default Signin
