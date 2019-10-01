import styled from 'styled-components'

const PriceTag = styled.span`
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) => props.theme.pureWhite};
  background: ${(props) => props.theme.primary};
  transform: rotate(3deg);
`

export default PriceTag
