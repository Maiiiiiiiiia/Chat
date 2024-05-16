import React, {
    //  useEffect, useRef
 } from 'react';
// import { useFormik } from 'formik';
import { 
    Modal, 
    // FormGroup, 
    // FormControl
 } from 'react-bootstrap';

const Rename = () => {
    return (
        <Modal show>
          <Modal.Header closeButton>
            <Modal.Title>Rename</Modal.Title>
          </Modal.Header>
          <p>Rename Modal</p>
           <Modal.Body>
           {/*  <form onSubmit={f.handleSubmit}>
               <FormGroup>
                 <FormControl
                   required
                  ref={inputRef}
                  onChange={f.handleChange}
                  onBlur={f.handleBlur}
                  value={f.values.body}
                  data-testid="input-body"
                  name="body"
                />
              </FormGroup>
              <input type="submit" className="btn btn-primary mt-2" value="submit" />
            </form> */}
            </Modal.Body>

        </Modal>
      );  
};

export default Rename;
