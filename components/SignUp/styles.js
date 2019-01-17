import styled from 'styled-components'

export const LoginCard = styled.form`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  width: 450px;
  background: white;
  input {
    box-sizing: border-box;
    height: 35px;
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
    border: ${props =>
      props.error ? '2px solid #e74c3c' : '2px solid transpareent'};
  }
  button {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35px;
    padding: 5px;
    background-color: #1abc9c;
    border: none;
    font-size: 14px;
    text-align: center;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: #16a085;
    }
  }
`
