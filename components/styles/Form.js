import styled, { keyframes } from 'styled-components'

const animate = keyframes`
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
  border: 5px solid ${(props) => props.theme.pureWhite};
  background: rgba(0, 0, 0, 0.02);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);

  label {
    display: block;
    margin-bottom: 1.5rem;
  }

  input,
  textarea,
  select {
    padding: 0.5rem;
    width: 100%;
    height: 3.5rem;
    font-size: 1.2rem;
    border: 1px solid ${(props) => props.theme.pureBlack};
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.primary};
    }
  }

  button,
  input[type='submit'] {
    padding: 1rem;
    width: 100%;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.pureWhite};
    background: ${(props) => props.theme.primary};
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
      background-image: linear-gradient(to right, #fff 0%, #1B1D1C 50%, #fff 100%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${animate} 0.5s linear infinite;
    }
  }

  a {
    display: block; 
    margin-top: 3rem;
    padding: 1.2rem;
    border: 1px ${(props) => props.theme.primary} solid;
    text-align: center;
    color: ${(props) => props.theme.pureBlack};
    background: ${(props) => props.theme.pureWhite};
  }
`

export default Form
