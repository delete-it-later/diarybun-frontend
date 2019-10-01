import styled from 'styled-components'

const PaginationStyles = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  text-align: center;
  border: 1px solid ${(props) => props.theme.lightGrey};
  border-radius: 10px;

  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${(props) => props.theme.lightGrey};
    &:last-child {
      border-right: 0;
    }
  }

  a[aria-disabled='true'] {
    color: ${(props) => props.theme.lightGrey};
    pointer-events: none;
  }
`

export default PaginationStyles
