import React, {
    //  useEffect, useRef
 } from 'react';
// import { useFormik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../slices/modalSlice';


const Rename = () => {
    const dispatch = useDispatch();

    const handleCloseModal = () => {
    dispatch(closeModal());
}
    return (
        <Modal show>
          <Modal.Header closeButton>
            <Modal.Title>Rename</Modal.Title>
          </Modal.Header>
          <p>Rename Modal</p>
           <Modal.Body>
              <p>Уверены?</p>
                <div className="d-flex justify-content-end mt-2">
                <Button type="button" variant="secondary" onClick={handleCloseModal} >Отменить</Button>
                <Button type="button" variant="primary">Удалить</Button>
                </div>
            </Modal.Body>

        </Modal>
      );  
};

export default Rename;
