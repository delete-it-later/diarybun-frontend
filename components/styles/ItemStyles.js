import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${(props) => props.theme.offWhite};
  background: white;
  box-shadow: ${(props) => props.theme.bs};
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    cursor: pointer;
  }
  p {
    flex-grow: 1;
    padding: 0 3rem;
    line-height: 2;
    font-size: 12px;
    font-size: 1.5rem;
    font-weight: 300;
  }
  .buttonList {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.lightgrey};
    background: ${(props) => props.theme.lightgrey};
    & > * {
      padding: 1rem;
      border: 0;
      font-size: 1.5rem;
      font-weight: 500;
      background: white;
      cursor: pointer;
    }
  }
`

export default Item
