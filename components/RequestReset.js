import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { REQUEST_RESET_MUTATION } from './graphql/mutations'
import Error from './ErrorMessage'
import Form from './styles/Form'

const RequestReset = () => {
  const [state, setState] = useState({
    email: '',
  })

  const [
    requestReset,
    { loading, error, called },
  ] = useMutation(REQUEST_RESET_MUTATION)

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await requestReset({ variables: { ...state } })
    setState({
      email: '',
    })
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <h2>Request a password reset</h2>
        <Error error={error} />
        {
          !error
          && !loading
          && called
          && <p>Yayyy! check your email for a reset link! 🥳</p>
        }
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
        <button type="submit">Request Reset!</button>
      </fieldset>
    </Form>
  )
}

export default RequestReset
