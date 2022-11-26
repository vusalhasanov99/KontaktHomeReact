import React from 'react'
import TopProps from '../Props/TopProps'
import axios from 'axios'
class Texnics extends React.Component {
   state={
      cards:[
         {
          "id":13,
          "name":"Kondisioner Gree ",
          "link":"https://www.shoopiz.com/images/uploads/products/prod-120865-1.jpg?width=450&height=450&bgcolor=fff&mode=boxpad",
          "price":1329
 
         },
         {
          "id":14,
          "name":"Paltaryuyan ",
          "link":"https://cdn.megamart.az/products/84988-149497-thickbox.jpg",
          "price":1539
        
 
         },
         {
          "id":15,
          "name":"Soyuducu Samsung ",
          "link":"https://almali.store/wp-content/uploads/2022/03/1-813x1000-1.jpg",
          "price":779
     
         },
         {
          "id":16,
          "name":"Ütü Gorenje SIH1800BLT",
          "link":"https://www.mgstore.az/image/cache/catalog/products/Kicik%20Meiset%20Texnikasi/utu/BRAUNSI5188BK-300x300.jpg",
          "price":169
       
 
         }
 
       ],

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
