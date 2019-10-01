import React from 'react'
import styled from 'styled-components'
import Signup from '../components/Signup'

const Columns = styled.div`
  margin: auto;
  max-width: 600px;
`

const SignupPage = () => (
  <Columns>
    <Signup />
  </Columns>
)

export default SignupPage
