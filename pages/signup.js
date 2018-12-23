import { Component } from 'react'
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
  background-image: url('https://66.media.tumblr.com/69f4a64c7f07582f0fb42e46e6802ab3/tumblr_no12mldqQO1u3jedmo1_1280.jpg');
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

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { username, email, password } = this.state
    return (
      <Background>
        <Mutation
          mutation={gql`
            mutation signUp(
              $username: String!
              $email: String!
              $password: String!
            ) {
              signUp(username: $username, email: $email, password: $password) {
                token
              }
            }
          `}
          onCompleted={() => Router.push('/dashboard')}
        >
          {(signUp, { loading, error, data }) => {
            return (
              <LoginCard
                onSubmit={e => {
                  e.preventDefault()
                  signUp({ variables: { username, email, password } })
                }}
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
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

export default Signup
