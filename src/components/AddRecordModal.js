import React from 'react'
import './AddRecordModal.scss'

const AddRecordModal = (props) => {
  return (
    <div className="add-record-modal">
      <div className="modal fade" id="addRecordModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.modalTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div class="form-group">
                  <label for="name">Name: </label>
                  <input type="email" class="form-control" id="name" placeholder="Enter name..." />
                </div>
                <div class="form-group">
                  <label for="price">Price: </label>
                  <input type="number" class="form-control" id="price" placeholder="ex: 99.99 or 120" />
                </div>
                <div className="row amenities-container">
                  <div className="col-12">
                    <label for="amenities">Amenities: </label>
                  </div>
                  <div className="col-6">
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="refrigerator" />
                        <label class="form-check-label" for="refrigerator">
                          Refrigerator
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="microwave" />
                        <label class="form-check-label" for="microwave">
                          Microwave
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="ac" />
                        <label class="form-check-label" for="ac">
                          AC/Heating
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="pool" />
                        <label class="form-check-label" for="pool">
                          Pool
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="hot-tub" />
                        <label class="form-check-label" for="hot-tub">
                          Hot Tub
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="fire-place" />
                        <label class="form-check-label" for="fire-place">
                          Fire Place
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRecordModal;
