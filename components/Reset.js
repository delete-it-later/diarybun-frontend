import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CURRENT_USER_QUERY } from './graphql/queries'
import { RESET_MUTATION } from './graphql/mutations'
import Error from './ErrorMessage'
import Form from './styles/Form'

const Reset = (props) => {
  const { resetToken } = props

  const [state, setState] = useState({
    password: '',
    confirmPassword: '',
  })

  const [
    resetPassword,
    { loading, error, called },
  ] = useMutation(
    RESET_MUTATION,
    { refetchQueries: [{ query: CURRENT_USER_QUERY }] },
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await resetPassword({
      variables: {
        resetToken,
        password: state.password,
        confirmPassword: state.confirmPassword,
      },
    })
    setState({
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Reset Your Password</h2>
        <Error error={error} />
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
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </label>
        {
          !error
          && !loading
          && called
          && <p>Yayyy! Your password has been reseted! 🥳</p>
        }
        <button type="submit">Reset Your Password!</button>
      </fieldset>
    </Form>
  )
}

export default Reset
