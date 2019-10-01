import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`

const Form = styled.form`
  padding: 20px;
  line-height: 1.5;
  font-weight: 600;
  font-size: 1.5rem;
  border: 5px solid white;
  background: rgba(0, 0, 0, 0.02);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  label {
    display: block;
    margin-bottom: 1.5rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    height: 3.5rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }
  }
  button,
  input[type='submit'] {
    width: 100%;
    padding: 1rem;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    color: white;
    background: red;
    cursor: pointer;
  }
  fieldset {
    padding: 0;
    border: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      content: '';
      display: block;
      height: 10px;
      background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  a {
    display: block; 
    margin-top: 3rem;
    padding: 1.2rem;
    border: 1px red solid;
    text-align: center;
    color: black;
    background: white;
  }
`

export default Form
