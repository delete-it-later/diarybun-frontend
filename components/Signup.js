import React, { useState } from 'react'
import Router from 'next/router'
import { useMutation } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from './graphql/queries'
import { SIGNUP_MUTATION } from './graphql/mutations'
import Error from './ErrorMessage'
import Form from './styles/Form'

const Signup = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [signup, { loading, error }] = useMutation(
    SIGNUP_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  )

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup({ variables: { ...state } })
    setState({
      name: '',
      email: '',
      password: '',
    })
    Router.push({ pathname: '/' })
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Create Account</h2>
        <Error error={error} />
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Signup</button>
      </fieldset>
    </Form>
  )
}

export default Signup
