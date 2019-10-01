import styled, { keyframes } from 'styled-components'

const DropDown = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  border: 1px solid ${(props) => props.theme.lightgrey};
`

const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  border-left: 10px solid ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  transition: all 0.2s;
  img {
    margin-right: 10px;
  }
`

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`

export { DropDown, DropDownItem, SearchStyles }
