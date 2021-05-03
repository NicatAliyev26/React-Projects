import React from 'react';
import "./Hemisphere.css"
import pic_northern from "./Image/northern.gif";
import pic_southern from "./Image/southern.webp";


const hemisphereConfig ={
    Northern:{
        text : "It is Northhern Hemisphere",
        picture : pic_northern
    },
    Southern:{
        text : "It is Southern Hemisphere",
        picture : pic_southern
    }
}

const HemisphereDisplay = ({latitude}) =>{

const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
const { text , picture} = hemisphereConfig[hemisphere]

  return(
      <div className={hemisphere}>
          <div className="ui raised text container segment">
              <div className="image">
              <img src={picture} alt=""/>
              </div>
          <div className="ui teal bottom attached label">
          <h1>{text}</h1>
          </div>
          
          </div>
          
          
      </div>
  )
}


export default HemisphereDisplay;