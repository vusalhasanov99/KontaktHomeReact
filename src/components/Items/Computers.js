import React from 'react'
import TopProps from '../Props/TopProps'
import axios from 'axios'
class Computers extends React.Component {
  state={
    cards:[],
    searchCard:""
 }
 async componentDidMount(){
  const response=await axios.get("http://localhost:3003/cards")
  this.setState({cards:response.data})
}
  render(){
     return (
    <div className='d-flex '>
    <TopProps  cards={this.state.cards}/>
  
  </div>

  )
  }
 
}

export default Computers
