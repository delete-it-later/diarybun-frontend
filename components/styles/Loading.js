import styled from 'styled-components'

const Loading = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:after {
    content: " ";
    display: block;
    width: 60px;
    height: 60px;
    margin: auto;
    border-radius: 50%;
    border: 5px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: animate 1.2s linear infinite;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Loading
