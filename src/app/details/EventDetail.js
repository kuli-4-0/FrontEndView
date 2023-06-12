import React, { Component } from 'react'

export class EventDetail extends Component {
  render() {
    return (
        <div>
            <div className="page-header">
                <h3 className="page-title"> Details</h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Details</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Details Event</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <img src={require("../../assets/images/auth/coldplay.jpg")} className="rounded img-fluid" alt="Responsive image"/>
                            <h4 className="card-title pt-4">COLDPLAY Music of the SPHERES</h4>
                            <p>
                                
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default EventDetail
