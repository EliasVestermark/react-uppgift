import React from 'react'
import Stars from './Stars'

import img_star from '../../assets/images/star.png'

const Review = ({  img, name, description }) => {
  return (
        <div className="review">
            <Stars img={img_star}/>
            <p>
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
            </p>
            <div className="reviewer">
                <img src={img} alt={name}/>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Review