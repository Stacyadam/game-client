import { Component } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Router from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import jwtDecode from 'jwt-decode'

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  width: 100%;
`

class MainBody extends Component {
  state = {
    user: {},
    characters: []
  }
  componentDidMount() {
    this.getId()
  }
  getId() {
    this.setState({
      user: jwtDecode(localStorage.getItem('token'))
    })
  }
  render() {
    const { user, characters } = this.state
    console.log(user)
    return (
      <Main>
        <Query
          query={gql`
            {
              user(id: ${user.id}) {
                characters {
                  name
                  race
                }
              }
            }
          `}
        >
          {(data, loading, error) => {
            console.log(data)
            return data.characters
              ? data.characters.map(item => <Card>test</Card>)
              : null
          }}
        </Query>
        {characters.map((hero, i) => (
          <Card
            key={i}
            url={hero.src}
            name={hero.name}
            level={hero.level}
            onClick={() => Router.push('/play')}
          />
        ))}
        <Card
          url="https://img.bhs4.com/b7/b/b7b76402439268b532e3429b3f1d1db0b28651d5_large.jpg"
          onClick={() => Router.push('/new/realm')}
        />
      </Main>
    )
  }
}

export default MainBody
