import styled from 'styled-components'

const Title = styled.h3`
  margin: 0 1rem;
  margin-top: -3rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

  a {
    display: inline;
    padding: 0 1rem;
    font-size: 4rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme.pureWhite};
    background: ${(props) => props.theme.primary};
  }
`

export default Title
