import { Component } from 'react'
import { Mutation } from 'react-apollo'
import { LoginCard } from './styles'
import { Background } from '../../shared/Background'
import { Loading } from '../../shared/Spinner'
import Router from 'next/router'
import { signUp } from '../../graphql/mutations/signUp'

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
      <Background src="https://66.media.tumblr.com/69f4a64c7f07582f0fb42e46e6802ab3/tumblr_no12mldqQO1u3jedmo1_1280.jpg">
        <Mutation
          mutation={signUp}
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
