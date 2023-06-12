import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export class ListEO extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> List Event Organizer </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>List</a></li>
              <li className="breadcrumb-item active" aria-current="page">Event Organizer</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Filter Event Organizer</h4>
                <form className="form-inline">
                  <Form.Control  type="text" className="form-control mb-2 mr-sm-2" id="namaEvent" placeholder="Nama EO" />
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
                <h4 className="card-title">List Event Organizer</h4>
                <p className="card-description"> Find Event Organizer</p>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Event Organizer</th>
                        <th>Genre</th>
                        <th>Range Harga(Rp)</th>
                        <th>Durasi Pelunasan(Minggu)</th>
                        <th>Atribut</th>
                        <th>Lokasi</th>
                        <th>Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PK Entertaitment Group</td>
                        <td>All</td>
                        <td>under 5jt</td>
                        <td>5</td>
                        <td>Panggung, Sound System, Lighting</td>
                        <td>Jakarta</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>PK Entertaitment Group</td>
                        <td>All</td>
                        <td>under 5jt</td>
                        <td>5</td>
                        <td>Panggung, Sound System, Lighting</td>
                        <td>Jakarta</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>PK Entertaitment Group</td>
                        <td>All</td>
                        <td>under 5jt</td>
                        <td>5</td>
                        <td>Panggung, Sound System, Lighting</td>
                        <td>Jakarta</td>
                        <td>
                             <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>PK Entertaitment Group</td>
                        <td>All</td>
                        <td>under 5jt</td>
                        <td>5</td>
                        <td>Panggung, Sound System, Lighting</td>
                        <td>Jakarta</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i> 
                            <i className="mdi mdi-star"></i> 
                        </td>
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

export default ListEO
