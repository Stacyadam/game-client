import React, { Component } from 'react'
import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import jwtDecode from 'jwt-decode'

const Bar = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #34495e;
  padding: 0 20px;
  color: white;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    p {
      text-transform: uppercase;
    }
  }
`

class Header extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    this.getToken()
  }
  getToken() {
    this.setState({
      user: jwtDecode(localStorage.getItem('token'))
    })
  }
  render() {
    const { user } = this.state
    return (
      <Bar>
        <h1>Game</h1>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" />
          <p>{user.username}</p>
        </div>
      </Bar>
    )
  }
}

export default Header
