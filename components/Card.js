import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  width: 350px;
  border: 1px solid #ccc;
  div {
    padding: 10px 20px;
    h3 {
      margin: 0;
    }
    h5 {
      margin: 0;
    }
  }
  &:hover {
    opacity: 0.8;
    background-color: #ecf0f1;
    cursor: pointer;
  }
`

const CardAvatar = styled.div`
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: top;
  border-right: 1px solid #ccc;
`

export default props => (
  <Card onClick={props.onClick}>
    <CardAvatar src={props.url} />
    <div>
      {props.name ? <h3>Name: {props.name}</h3> : <h3>Create New Hero</h3>}
      {props.level ? <h5>Level: {props.level}</h5> : null}
    </div>
  </Card>
)
