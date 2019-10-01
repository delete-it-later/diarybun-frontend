import styled from 'styled-components'

const SickButton = styled.button`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border: 0;
  border-radius: 0;
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.theme.pureWhite};
  background: ${(props) => props.theme.primary};
  transform: skew(-2deg);
  transition: all 0.5s;
  cursor: pointer;

  &[disabled] {
    opacity: 0.5;
  }
`

export default SickButton
