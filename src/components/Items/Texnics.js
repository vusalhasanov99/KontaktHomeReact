import React from 'react'
import TopProps from '../Props/TopProps'
import axios from 'axios'
class Texnics extends React.Component {
   state={
      cards:[],

      searchCard:""
   }

   searchCard=(e)=>{
      this.setState({searchCard: e.target.value })
   }




   async componentDidMount(){
    const response=await axios.get("http://localhost:3004/cards")
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

export default Texnics
