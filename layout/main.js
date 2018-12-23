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

const mockArr = [
  {
    src:
      'http://media-cache-ec0.pinimg.com/736x/7f/ab/58/7fab5802abab73e5a4e131e4ddf6907b.jpg',
    name: 'John Smith',
    level: 1
  },
  {
    src:
      'http://media-cache-ec0.pinimg.com/736x/7f/ab/58/7fab5802abab73e5a4e131e4ddf6907b.jpg',
    name: 'Todd Smith',
    level: 2
  },
  {
    src:
      'http://media-cache-ec0.pinimg.com/736x/7f/ab/58/7fab5802abab73e5a4e131e4ddf6907b.jpg',
    name: 'Bryan Smith',
    level: 3
  }
]

export default () => (
  <Main>
    {mockArr.map((hero, i) => (
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
