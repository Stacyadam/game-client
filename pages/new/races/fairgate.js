import React, { Component } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Router from 'next/router'

const Backdrop = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  width: 100%;
  height: 100vh;
  background-image: url('https://s-media-cache-ak0.pinimg.com/originals/35/cd/3f/35cd3fd1c5224efd6f8940271eaf7660.jpg');
  background-position: center;
  background-size: cover;
  ul {
    width: 25vw;
    padding: 20px 10px;
    margin: 0;
  }
`

const RaceItem = styled.li`
  background-color: ${props => rgba(props.bg, 0.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  font-size: 28px;
  color: white;
  margin-bottom: 10px;
  &:hover {
    background-color: ${props => rgba(props.bg, 0.8)};
    cursor: pointer;
  }
`
const RaceArea = styled.div`
  box-sizing: border-box;
  margin: 20px;
  width: 100%;
  padding: 60px;
  color: white;
  background-color: ${rgba('#2d3436', 0.5)};
`

export default class Albion extends Component {
  state = {
    races: [
      { name: 'Human', color: '#0984e3' },
      { name: 'Dwarf', color: '#d63031' },
      { name: 'Elf', color: '#00b894' }
    ]
  }
  render() {
    const { races } = this.state
    return (
      <Backdrop>
        <ul>
          {races.map(({ name, color }, i) => (
            <RaceItem key={i} bg={color}>
              {name}
            </RaceItem>
          ))}
        </ul>
        <RaceArea>
          <button onClick={() => Router.push('/game')}>Play</button>
        </RaceArea>
      </Backdrop>
    )
  }
}
