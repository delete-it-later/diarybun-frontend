import styled from 'styled-components'

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid ${(props) => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  /* .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightgrey};
    text-align: center;
    color: #999;
  } */
  h1 {
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    a {
      padding: 0.5rem 1rem;
      background: ${(props) => props.theme.red};
      color: white;
      text-transform: uppercase;
      text-decoration: none;
    }
    @media (max-width: 1300px) {
      margin: 0;
      text-align: center;
    }
  }
`

export default HeaderStyles
