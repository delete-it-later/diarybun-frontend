import styled from 'styled-components'

const HeaderStyles = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: 10px solid ${(props) => props.theme.black};
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightGrey};
    text-align: center;
    color: #999;
  }

  h1 {
    position: relative;
    z-index: 2;
    margin-left: 2rem;
    font-size: 4rem;
    a {
      padding: 0.5rem 1rem;
      text-transform: uppercase;
      text-decoration: none;
      color: ${(props) => props.theme.pureWhite};
      background: ${(props) => props.theme.primary};
    }
    @media (max-width: 1300px) {
      margin: 0;
      text-align: center;
    }
  }
`

export default HeaderStyles
