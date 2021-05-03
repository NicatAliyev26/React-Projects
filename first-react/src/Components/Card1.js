import React, { Component } from 'react'
import Image from './pic.jpg'


 class Card1 extends Component {
    render() {
        return (
            <div class="card " style={{width: 18 + "rem"}}>
            <img src={Image} className="card-img-top" alt="..."/>
            <div className="card-body "/>
              <h5 className="card-title ml-4">CNN Acquire BEME</h5>
              <p className="card-text ml-4 ">CNN purchased Casey Neistat's Beme app for $25million.</p>
              <a href="#" className="btn "><i class="fas fa-arrow-right"></i> Find out more</a>
            </div>
        )
    }
}
export default Card1;