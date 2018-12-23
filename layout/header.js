import styled from 'styled-components'

const Header = styled.div`
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
  }
`

export default () => (
  <Header>
    <h1>Game</h1>
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" />
      <p>CarrionDude</p>
    </div>
  </Header>
)
