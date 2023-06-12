import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export class ListEvents extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> list Events </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>List</a></li>
              <li className="breadcrumb-item active" aria-current="page">Events</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Filter Events</h4>
                <form className="form-inline">
                  <Form.Control  type="text" className="form-control mb-2 mr-sm-2" id="namaEvent" placeholder="Nama Event" />
                  <Form.Control  type="text" className="form-control mb-2 mr-sm-2" id="genre" placeholder="Genre" />
                  <Form.Control  type="text" className="form-control mb-2 mr-sm-2" id="location" placeholder="Location" />
                  <Form.Control  type="text" className="form-control mb-2 mr-sm-2" id="rating" placeholder="Rating" />
                  <button type="submit" className="btn btn-gradient-primary mb-2">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">List Events</h4>
                <p className="card-description"> Find your events
                </p>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Event</th>
                        <th>Genre</th>
                        <th>musisi</th>
                        <th>Waktu</th>
                        <th>Lokasi</th>
                        <th>Range Harga(Rp)</th>
                        <th>Rating</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>COLDPLAY Music of the SPHERES</td>
                        <td>Rock</td>
                        <td>COLDPLAY</td>
                        <td>15 November 2023</td>
                        <td>Jakarta</td>
                        <td>Under 5jt</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i> 
                            <i className="mdi mdi-star"></i> 
                        </td>
                        <td><label className="badge badge-danger">Pending</label></td>
                      </tr>
                      <tr>
                        <td>COLDPLAY Music of the SPHERES</td>
                        <td>Rock</td>
                        <td>COLDPLAY</td>
                        <td>15 November 2023</td>
                        <td>Jakarta</td>
                        <td>Under 5jt</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                        <td><label className="badge badge-warning">Audition</label></td>
                      </tr>
                      <tr>
                        <td>COLDPLAY Music of the SPHERES</td>
                        <td>Rock</td>
                        <td>COLDPLAY</td>
                        <td>15 November 2023</td>
                        <td>Jakarta</td>
                        <td>Under 5jt</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                        <td><label className="badge badge-info">Fixed</label></td>
                      </tr>
                      <tr>
                        <td>COLDPLAY Music of the SPHERES</td>
                        <td>Rock</td>
                        <td>COLDPLAY</td>
                        <td>15 November 2023</td>
                        <td>Jakarta</td>
                        <td>Under 5jt</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                        <td><label className="badge badge-info">Fixed</label></td>
                      </tr>
                      <tr>
                        <td>COLDPLAY Music of the SPHERES</td>
                        <td>Rock</td>
                        <td>COLDPLAY</td>
                        <td>15 November 2023</td>
                        <td>Jakarta</td>
                        <td>Under 5jt</td>
                        <td>
                             <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                        <td><label className="badge badge-warning">Audition</label></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListEvents
