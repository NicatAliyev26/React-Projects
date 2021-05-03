import React, { Component } from 'react'
import Image from './pic-3.jpg'

 class Card2 extends Component {
    render() {
        return (
            <div class="card " style={{width: 18 + "rem"}}>
            <img src={Image} className="card-img-top" alt="..."/>
            <div className="card-body"/>
              <h5 className="card-title ml-4">Nomad Lifestyle</h5>
              <p className="card-text ml-4">Learn our tips and tricks on living a nomadic lifestyle</p>
              <a href="#" className="btn "><i class="fas fa-arrow-right"></i> Find out more</a>
            </div>
        )
    }
}
export default Card2;