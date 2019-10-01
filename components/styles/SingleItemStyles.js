import styled from 'styled-components'

const SingleItemStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  margin: 2rem auto;
  max-width: 1200px;
  min-height: 800px;
  box-shadow: ${(props) => props.theme.bs};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .details {
    margin: 3rem;
    font-size: 2rem;
    text-align: center;
  }
`

export default SingleItemStyles
