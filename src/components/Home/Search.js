import React, { Component } from 'react'

export default class Search extends Component {

  render() {
    return (
      <div>
           <div className="search">
          <i className="fas fa-search"></i>
          <input
           type="text"
            placeholder="Mehsul uzre axtaris"
           onChange={this.props.searchCardProp}
          />
          
        </div>
      </div>
    )
  }
}
