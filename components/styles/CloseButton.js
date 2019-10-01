import styled from 'styled-components'

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  z-index: 2;
  border: 0;
  font-size: 5rem;
  color: ${(props) => props.theme.pureWhite};
  background: ${(props) => props.theme.pureBlack};
  cursor: pointer;
`

export default CloseButton
