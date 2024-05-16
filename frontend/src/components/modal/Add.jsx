import React, { 
    // useEffect, 
    // useRef
 } from 'react';
// import _ from 'lodash';
// import { useFormik } from 'formik';
import { 
    Modal, 
    // FormGroup, 
    // FormControl
 } from 'react-bootstrap';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Button } from 'bootstrap';
// BEGIN (write your solution here)
// const generateOnSubmit = ({ setItems, onHide }) => (values) => {
//   const item = { id: _.uniqueId(), body: values.body };
//   setItems((items) => {
//     items.push(item);
//   });
//   onHide();
// };

const Add = () => {
//   const { onHide } = props;
//   const f = useFormik({ onSubmit: generateOnSubmit(props), initialValues: { body: '' } });

//   const inputRef = useRef();
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);


  return (



      <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить канал</Modal.Title>
                </Modal.Header>


      <Modal.Body>
        <p>Add Modal</p>
            <Formik 
                initialValues={{ channelName: "" }}
                >
                <Form >
                <Modal.Footer>
                <Button variant="secondary">
                    Отменить
                </Button>
                <Button variant="primary">
                    Отправить
                </Button>
                </Modal.Footer>
                </Form>
            </Formik>
        {/* <form onSubmit={f.handleSubmit}>
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

export default Add;