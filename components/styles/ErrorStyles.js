import styled from 'styled-components'

const ErrorStyles = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme.pureWhite};
  border-left: 5px solid ${(props) => props.theme.red};
  background: ${(props) => props.theme.pureWhite};

  p {
    margin: 0;
    font-weight: 100;
  }

  strong {
    margin-right: 1rem;
  }
`

export default ErrorStyles
