import React, { Component } from 'react'
import Router from 'next/router'
import { Mutation, ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'
import { Background } from '../shared/Background'
import { Loading } from '../shared/Spinner'
import { LoginCard } from '../components/SignUp/styles'

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
      <Background src="https://i.pinimg.com/originals/96/f7/33/96f733006534aa2da5b48aeaa24aa5a4.jpg">
        <ApolloConsumer>
          {client => (
            <Mutation
              mutation={gql`
                mutation signIn($login: String!, $password: String!) {
                  signIn(login: $login, password: $password) {
                    token
                  }
                }
              `}
              onCompleted={({ signIn }) => {
                localStorage.setItem('token', signIn.token)
                Router.push('/dashboard')
                client.writeData({ data: { isLoggedIn: true } })
              }}
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
          )}
        </ApolloConsumer>
      </Background>
    )
  }
}

// import { Mutation, withApollo } from 'react-apollo'
// import gql from 'graphql-tag'
// import cookie from 'cookie'
// import redirect from '../lib/redirect'
// import { Loading } from '../shared/Spinner';

// const SIGN_IN = gql`
//   mutation Signin($email: String!, $password: String!) {
//     signinUser(email: { email: $email, password: $password }) {
//       token
//     }
//   }
// `

// // TODO: Find a better name for component.
// const SigninBox = ({ client }) => {
//   let email, password

//   return (
//     <Mutation
//       mutation={SIGN_IN}
//       onCompleted={data => {
//         // Store the token in cookie
//         document.cookie = cookie.serialize('token', data.signinUser.token, {
//           maxAge: 30 * 24 * 60 * 60 // 30 days
//         })
//         // Force a reload of all the current queries now that the user is
//         // logged in
//         client.cache.reset().then(() => {
//           redirect({}, '/')
//         })
//       }}
//       onError={error => {
//         // If you want to send error to external service?
//         console.log(error)
//       }}
//     >
//       {(signinUser, { data, error }) => (
//         <form
//           onSubmit={e => {
//             e.preventDefault()
//             e.stopPropagation()

//             signinUser({
//               variables: {
//                 email: email.value,
//                 password: password.value
//               }
//             })

//             email.value = password.value = ''
//           }}
//         >
//           {error && <p>No user found with that information.</p>}
//           <input
//             name='email'
//             placeholder='Email'
//             ref={node => {
//               email = node
//             }}
//           />
//           <br />
//           <input
//             name='password'
//             placeholder='Password'
//             ref={node => {
//               password = node
//             }}
//             type='password'
//           />
//           <br />
//           <button>Sign in</button>
//         </form>
//       )}
//     </Mutation>
//   )
// }

// export default withApollo(SigninBox)
