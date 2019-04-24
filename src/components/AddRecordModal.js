import React from 'react'
import './AddRecordModal.scss'

class AddRecordModal extends React.Component {
  render(){
    return (
      <div className="add-record-modal">
        <div className="modal fade" id="addRecordModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">{this.props.modalTitle}</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.props.handleAddRoom}>
                  <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="email" className="form-control" id="name" placeholder="Enter name..." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="number" className="form-control" id="price" placeholder="ex: 99.99 or 120" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Max Occupancy: </label>
                    <input type="number" className="form-control" id="occupancy" placeholder="ex: 1 or 10" />
                  </div>
                  <div className="row amenities-container">
                    <div className="col-12">
                      <label htmlFor="amenities">Amenities: </label>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="refrigerator" />
                          <label className="form-check-label" htmlFor="refrigerator">
                            Refrigerator
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="microwave" />
                          <label className="form-check-label" htmlFor="microwave">
                            Microwave
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="ac" />
                          <label className="form-check-label" htmlFor="ac">
                            AC/Heating
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="pool" />
                          <label className="form-check-label" htmlFor="pool">
                            Pool
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="hot-tub" />
                          <label className="form-check-label" htmlFor="hot-tub">
                            Hot Tub
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="fire-place" />
                          <label className="form-check-label" htmlFor="fire-place">
                            Fire Place
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddRecordModal;
