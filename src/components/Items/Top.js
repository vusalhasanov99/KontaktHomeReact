import React from 'react'
import TopProps from '../Props/TopProps'
import axios from 'axios'

class Top extends React.Component {
 state={
     cards: [
      {
         "id": 1,
         "name": "iPhone 13 512GB",
         "link": "data:image/jpeg;base64,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",
         "price": 3159

      },
      {
         "id": 2,
         "name": "HUAWEI Y5P  Green",
         "link": "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/phones/new-phones/model-banner/p50-black.png",
         "price": 659

      },
      {
         "id": 3,
         "name": "Samsung Galaxy A52",
         "link": "https://static.nix.ru/images/Samsung-SM-A525F-Lavender-5034206919.jpg?good_id=503420&width=500&height=500&view_id=6919",
         "price": 1399

      },
      {
         "id": 4,
         "name": "Poco X3 Pro",
         "link": "https://openshop.uz/uploads/products/photos/202203/p8VQKrjzPbsAj3K4wsydoU1sm1zQ6zwp4c1fOw5X.jpg",
         "price": 599
      }
   ]
 }
   render() {
      return (
         <div>
            <TopProps cards={this.state.cards} />
         </div>

      )
   }

}

export default Top
