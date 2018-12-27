import { Component } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import Router from 'next/router'

const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  width: 100%;
`

class MainBody extends Component {
  state = {
    characters: []
  }
  render() {
    const { characters } = this.state
    return (
      <Main>
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
