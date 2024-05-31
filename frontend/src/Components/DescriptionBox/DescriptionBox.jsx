import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerse website is an online platform that....</p>
        <p> E-commerse website tipically display products....</p>
      </div>
    </div>
  )
}

export default DescriptionBox
