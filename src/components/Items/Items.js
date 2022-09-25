
import React from 'react'
import { Link } from 'react-router-dom'
function Items() {
    return (
        <div >
            <h1>Satış Liderləri</h1>

            <div className='tabs'>
                <Link to="/top">
            <button > <span>Top 20</span></button>
            </Link>

            <Link to="/Smartphones">
                 <button> <span>Telefonlar</span></button>
            </Link>
           <Link to="/Computers">
             <button> <span>Kompyuterlər</span></button>
           </Link>
           <Link to="/Texnics">
             <button> <span>Məişət Texnikası</span></button>
           </Link>
           
            </div>
          
        </div>
    )
}

export default Items
