import styled from 'styled-components'

const NavStyles = styled.ul`
  display: flex;
  justify-self: end;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 2rem;

  a,
  button {
    position: relative;
    display: flex;
    align-items: center;
    padding: 1rem 3rem;
    border: 0;
    font-weight: 900;
    font-size: 1em;
    text-transform: uppercase;
    color: ${(props) => props.theme.black};
    background: none;
    cursor: pointer;
    @media (max-width: 700px) {
      padding: 0 10px;
      font-size: 10px;
    }
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 2px;
      height: 100%;
      transform: skew(-20deg);
      background: ${(props) => props.theme.lightGrey};
    }
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      margin-top: 2rem;
      width: 0;
      height: 2px;
      background: ${(props) => props.theme.primary};
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    @media (max-width: 700px) {
        width: calc(100% - 10px);
    }
    }
  }

  @media (max-width: 1300px) {
    justify-content: center;
    width: 100%;
    font-size: 1.5rem;
    border-top: 1px solid ${(props) => props.theme.lightGrey};
  }
`

export default NavStyles
