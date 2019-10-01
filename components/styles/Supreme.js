import styled from 'styled-components'

const Supreme = styled.h3`
  display: inline-block;
  margin: 0;
  padding: 4px 5px;
  font-size: 4rem;
  color: white;
  background: ${(props) => props.theme.red};
  transform: skew(-3deg);
`

export default Supreme
