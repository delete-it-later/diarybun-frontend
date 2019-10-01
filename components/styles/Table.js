import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border: 1px solid ${(props) => props.theme.offWhite};
  border-spacing: 0;
  thead {
    font-size: 1.2rem;
  }
  td,
  th {
    position: relative;
    padding: 5px;
    border-right: 1px solid ${(props) => props.theme.offWhite};
    border-bottom: 1px solid ${(props) => props.theme.offWhite};
    &:last-child {
      width: 150px;
      border-right: none;
      button {
        width: 100%;
      }
    }
    label {
      display: block;
      padding: 10px 5px;
    }
  }
  tr {
    text-align: center;
    &:hover {
      background: ${(props) => props.theme.offWhite};
    }
  }
`

export default Table
