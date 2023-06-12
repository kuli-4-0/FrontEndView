import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

export class FormEvent extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  componentDidMount() {
    bsCustomFileInput.init()
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Form event </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
              <li className="breadcrumb-item active" aria-current="page">Form event</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create your form</h4>
                <p className="card-description"> Fill this form </p>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputName1">Name Event</label>
                    <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Textarea</label>
                    <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                  </Form.Group>
                  <Form.Group>
                      <label htmlFor="exampleTextarea1">Genre</label>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" id="rock" />
                            <i className="input-helper"></i>
                            Rock
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" id="jazz" />
                            <i className="input-helper"></i>
                            Jazz
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" id="pop" />
                            <i className="input-helper"></i>
                            Pop
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" id="dangdut" />
                            <i className="input-helper"></i>
                            Dangdut
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            <i className="input-helper"></i>
                            Hiphop
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            <i className="input-helper"></i>
                            Reggae
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            <i className="input-helper"></i>
                            Traditional
                          </label>
                        </div>
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="exampleSelectValue">Range Harga</label>
                      <select className="form-control" id="exampleSelectValue">
                        <option value="1">Free</option>
                        <option value="2">Under 500K</option>
                        <option value="3">Under 1Jt</option>
                        <option value="4">Under 1.5Jt</option>
                        <option value="5">Under 2Jt</option>
                        <option value="6">Under 5Jt</option>
                      </select>
                    </Form.Group>
                    <Form.Group>
                        <label>Date</label>
                        <div>
                          <DatePicker className="form-control"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                          />
                        </div>
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="exampleInputCity1">City</label>
                      <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                    </Form.Group>
                    <Form.Group>
                      <label>Banner upload</label>
                      <div className="custom-file">
                        <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                        <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                      </div>
                    </Form.Group>
                  <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormEvent
