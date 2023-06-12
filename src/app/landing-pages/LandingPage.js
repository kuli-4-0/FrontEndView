import React, { Component } from 'react'
import NavbarLanding from './NavbarLanding'

export class LandingPage extends Component {
  render() {
    return (
        <div>
            <NavbarLanding/>
            <div className="row">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <img src={require("../../assets/images/auth/header.jpg")} alt="Image" className="rounded mx-auto mt-5 d-block" width="980px" height="720px" />
                            <div class="carousel-caption d-none d-md-block">
                                <h4>Fighting for the future of street musicians</h4>
                                <p> For a brighter future for the nation's children </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default LandingPage
