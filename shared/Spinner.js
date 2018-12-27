import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ecf0f1;
  border-radius: 50%;
  border-top: 2px solid transparent;
  animation: ${rotate} 2s linear infinite;
`
