import React, { Component } from 'react'
import Image from './pic-2.jpg'

 class Card3 extends Component {
    render() {
        return (
            <div class="card " style={{width: 18 + "rem"}}>
            <img src={Image} className="card-img-top" alt="..."/>
            <div className="card-body"/>
              <h5 className="card-title ml-4">React and the WP-API</h5>
              <p className="card-text ml-4">The first ever decoupled starter theme for React & the WP-API</p>
              <a href="#" className="btn "><i class="fas fa-arrow-right"></i> Find out more</a>
            </div>
        )
    }
}
export default Card3;
