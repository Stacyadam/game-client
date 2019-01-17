import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../../layout/header'
import Router from 'next/router'

const LineUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const RealmCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  flex: 1;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  color: white;
  border: none;
  padding: 0;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const RealmPage = props => (
  <RealmCard
    background={props.background}
    value={props.value}
    onClick={props.onClick}
  >
    <h1>{props.name}</h1>
  </RealmCard>
)

export default class Realm extends Component {
  state = {
    realm: ''
  }
  selectRealm = e => {
    const realm = e.target.value
    this.setState({
      realm
    })
    Router.push(`/new/races/${realm}`)
  }
  render() {
    return (
      <>
        <Header />
        <LineUp>
          <RealmPage
            background="https://magazine.artstation.com/wp-content/uploads/2017/12/raphael-lacoste-castle-mood-1.jpg"
            name="Fairgate"
            onClick={this.selectRealm}
            value="fairgate"
          />
          <RealmPage
            background="https://profoundvisuals.com/wp-content/uploads/2017/12/Castle-Hill_3-1-1024x519.jpg?x98748"
            name="Oaktown"
            onClick={this.selectRealm}
            value="oaktown"
          />
          <RealmPage
            background="https://cdn.artstation.com/p/assets/images/images/001/120/671/large/atec-concept-artist-0625.jpg?1440510943"
            name="Stonehaven"
            onClick={this.selectRealm}
            value="stonehaven"
          />
        </LineUp>
      </>
    )
  }
}
