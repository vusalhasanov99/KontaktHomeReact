import React from 'react'
import './App.scss';
import Navbar from  './components/Home/Navbar'
import Carusel from './components/Carousels/Carusel';
import Overflow from  './components/Overflows/Overflow'

import Items from './components/Items/Items'
import Top from './components/Items/Top'
import Smartphones from './components/Items/Smartphones'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Computers from './components/Items/Computers';
import Texnics from './components/Items/Texnics';
import Footer from './components/Home/Footer';
import axios from 'axios'
import Shop from './components/Home/Shop';
import { CartProvider } from 'react-use-cart';
import Search from './components/Home/Search';
import { render } from '@testing-library/react';




class App extends React.Component  {
  state = {
    cards: [],
    searchCard: ""

 }
 searchCard=(e)=>{
  this.setState({searchCard: e.target.value })
}
//  async componentDidMount(){
//       const baseURL="http://localhost:3002/cards";
//       const response=await fetch(baseURL);
//       console.log(response);
//       const data=await response.json();
//       console.log(data);
//       this.setState({cards:data})
// }


async componentDidMount(){
 const response=await axios.get("http://localhost:3001/cards")
 this.setState({cards:response.data})
}
render(){
  let filteredCard=this.state.cards.filter(
    (card)=>{
       return card.name.toLowerCase().indexOf(this.state.searchCard.toLowerCase()) !==-1
    }
 )
   return (  
     <CartProvider>
   <Router>
    <div className="App">
    

       <Navbar searchCardProp={this.searchCard} />
      
     <Overflow/>
      <Items/>

      <Routes>
        <Route path="/" element={<Top cards={filteredCard}/>}/>
        <Route path="/Top" element={<Top cards={filteredCard}/>}/>
        <Route path="/Smartphones" element={<Smartphones cards={filteredCard}/>}/>
        <Route path="/Computers" element={<Computers cards={filteredCard} />}/>
        <Route path="/Texnics" element={<Texnics cards={filteredCard} />}/>
       
      </Routes>
       <Carusel/>
     <Footer/>
     
    </div>
    </Router>
    </CartProvider>
   
  );
}
 
}

export default App;
