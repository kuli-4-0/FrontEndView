import React, { Component } from 'react'
import { Form } from 'react-bootstrap';

export class ListMusisi extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> List Musicians </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>List</a></li>
              <li className="breadcrumb-item active" aria-current="page">Musicians</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Filter Musician</h4>
                <form className="form-inline">
                  <Form.Control  type="text" className="form-control mb-2 mr-sm-2" id="namaEvent" placeholder="Nama Musisi" />
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
                <h4 className="card-title">List Musicians</h4>
                <p className="card-description"> Find Musicians
                </p>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Musisi</th>
                        <th>Genre</th>
                        <th>Jumlah Lagu</th>
                        <th>Type</th>
                        <th>Lokasi</th>
                        <th>Harga(Rp)</th>
                        <th>Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>COLDPLAY</td>
                        <td>Rock</td>
                        <td>41</td>
                        <td>Group Band</td>
                        <td>British</td>
                        <td>40M</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>COLDPLAY</td>
                        <td>Rock</td>
                        <td>41</td>
                        <td>Group Band</td>
                        <td>British</td>
                        <td>40M</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>COLDPLAY</td>
                        <td>Rock</td>
                        <td>41</td>
                        <td>Group Band</td>
                        <td>British</td>
                        <td>40M</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>COLDPLAY</td>
                        <td>Rock</td>
                        <td>41</td>
                        <td>Group Band</td>
                        <td>British</td>
                        <td>40M</td>
                        <td>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star"></i>
                            <i className="mdi mdi-star-half"></i>
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

export default ListMusisi
