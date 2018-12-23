import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const OverlayMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`

const Overlay = styled.div`
  width: 33.33%;
  height: 33.33vh;
  &:hover {
    background: white;
    opacity: 0.2;
  }
`

const Hero = styled.img`
  width: 50px;
  height: 50px;
  transform: rotate(${props => props.rotation}deg);
  transition: rotate 0.45s linear;
`

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #ecf0f1;
  overflow: hidden;
  background-image: url('https://i1.wp.com/www.fantasticmaps.com/wp-content/uploads/2012/04/saemyyrfinalunlabelledwebpreview.jpg');
  background-repeat: no-repeat;
  background-position: ${props => `${props.x}% ${props.y}%`};
  transition: background-position 0.34s linear;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    div {
      display: flex;
      justify-content: center;
      flex-direction: row;
    }
  }
`

export default class GameBoard extends Component {
  state = {
    x: 50,
    y: 50,
    grid: [
      { dir: 'northwest' },
      { dir: 'north' },
      { dir: 'northeast' },
      { dir: 'west' },
      { dir: 'center' },
      { dir: 'east' },
      { dir: 'southwest' },
      { dir: 'south' },
      { dir: 'southeast' }
    ],
    rotation: 0
  }
  move(direction) {
    const { x, y } = this.state
    const speed = 2
    switch (direction) {
      case 'northwest':
        this.setState({
          x: x - speed,
          y: y - speed,
          rotation: 135
        })
        break
      case 'north':
        this.setState({
          y: y - speed,
          rotation: 180
        })
        break
      case 'northeast':
        this.setState({
          x: x + speed,
          y: y - speed,
          rotation: 225
        })
        break
      case 'west':
        this.setState({
          x: x - speed,
          rotation: 90
        })
        break
      case 'center':
        break
      case 'east':
        this.setState({
          x: x + speed,
          rotation: 270
        })
        break
      case 'southwest':
        this.setState({
          x: x - speed,
          y: y + speed,
          rotation: 45
        })
        break
      case 'south':
        this.setState({
          y: y + speed,
          rotation: 0
        })
        break
      case 'southeast':
        this.setState({
          x: x + speed,
          y: y + speed,
          rotation: 315
        })
        break
      default:
        return
    }
  }
  render() {
    const { x, y, grid, rotation } = this.state
    return (
      <Fragment>
        <Map x={x} y={y}>
          <Hero
            rotation={rotation}
            src="https://www.syncrpg.com/sam/data/tokenImages/Devin_Night/commissioned/M_Human_Conjurer_02_hi.png"
          />
        </Map>
        <OverlayMap>
          {grid.map((quad, i) => (
            <Overlay key={i} onClick={() => this.move(quad.dir)} />
          ))}
        </OverlayMap>
      </Fragment>
    )
  }
}
