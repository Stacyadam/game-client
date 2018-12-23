import React, { Component } from 'react'
import Router from 'next/router'
import styled, { keyframes } from 'styled-components'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ecf0f1;
  border-radius: 50%;
  border-top: 2px solid transparent;
  animation: ${rotate} 2s linear infinite;
`

const Background = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  background-image: url('https://i.pinimg.com/originals/96/f7/33/96f733006534aa2da5b48aeaa24aa5a4.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
`

const LoginCard = styled.form`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  width: 450px;
  height: 300px;
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

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { username, password } = this.state
    return (
      <Background>
        <Mutation
          mutation={gql`
            mutation signIn($login: String!, $password: String!) {
              signIn(login: $login, password: $password) {
                token
              }
            }
          `}
          onCompleted={() => Router.push('/game')}
        >
          {(signIn, { loading, error, data }) => {
            return (
              <LoginCard
                error={error}
                onSubmit={e => {
                  e.preventDefault()
                  signIn({ variables: { login: username, password } })
                }}
              >
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                {error ? <p>{error.message}</p> : null}
                <button>{loading ? <Loading /> : 'Login'}</button>
              </LoginCard>
            )
          }}
        </Mutation>
      </Background>
    )
  }
}
