import styled from 'styled-components'

const CartStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  width: 40%;
  height: 100%;
  min-width: 500px;
  padding: 20px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.pureWhite};
  transition: all 0.3s;
  transform: translateX(100%);
  ${(props) => props.open && 'transform: translateX(0);'};

  header {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 5px solid ${(props) => props.theme.black};
  }

  footer {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    margin-top: 2rem;
    padding-top: 2rem;
    font-size: 3rem;
    font-weight: 900;
    border-top: 10px double ${(props) => props.theme.black};
    p {
      margin: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 100%;
  }
`

export default CartStyles
