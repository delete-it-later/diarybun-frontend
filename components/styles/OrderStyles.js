import styled from 'styled-components'

const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme.pureWhite};
  border-top: 10px solid ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.bs};

  & > p {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 0;
    border-bottom: 1px solid ${(props) => props.theme.offWhite};
    span {
      padding: 1rem;
      word-break: break-word;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }

  .order-item {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin: 2rem 0;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.offWhite};
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 480px) {
      grid-template-columns: none;
      grid-template-rows: 1fr 1fr;
    }
  }
`

export default OrderStyles
