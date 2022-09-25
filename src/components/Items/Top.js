import React from 'react'
import TopProps from '../Props/TopProps'
import axios from 'axios'

class Top extends React.Component {

   async componentDidMount(){
      const response=await axios.get("http:localhost:3001/cards")
      this.setState({cards:response.data})
    }
      





   render() {
    
      return (

         <div>
           
            <TopProps cards={this.props.cards} />
         </div>

      )
   }

}

export default Top
