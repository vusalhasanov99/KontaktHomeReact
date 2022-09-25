import React from 'react'
import TopProps from '../Props/TopProps'
import axios from 'axios'
class Smartphones extends React.Component {
  state={
    cards:[]
 }
 async componentDidMount(){
  const response=await axios.get("http://localhost:3002/cards")
  this.setState({cards:response.data})
}
  render(){
     return (

    <div className='d-flex '>
 
    <TopProps cards={this.state.cards} />
  </div>
  )
  }

 
}

export default Smartphones
