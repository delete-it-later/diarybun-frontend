import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 60px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:after {
    content: " ";
    display: block;
    margin: auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 5px solid ${(props) => props.theme.pureBlack};
    border-color: ${(props) => props.theme.pureBlack} transparent ${(props) => props.theme.pureBlack} transparent;
    animation: ${animate} 1.2s linear infinite;
  }
`

export default Loading
