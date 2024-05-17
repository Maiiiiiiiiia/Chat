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
import { useSelector, useDispatch } from 'react-redux';
 import { closeModal } from '../../slices/modalSlice';

// import { Formik } from 'formik';
// import { Form } from 'formik';
import { Button } from 'react-bootstrap';

// BEGIN (write your solution here)
// const generateOnSubmit = ({ setItems, onHide }) => (values) => {
//   const item = { id: _.uniqueId(), body: values.body };
//   setItems((items) => {
//     items.push(item);
//   });
//   onHide();
// };

const Add = () => {
    console.log('add modal');
    const dispatch = useDispatch();
    // const onHide = () => dispatch(closeModal());
    const { isOpened } = useSelector((state) => state.modal); // Подключаем состояние модального окна
    const onHide = () => dispatch(closeModal());


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
        <Modal show={isOpened} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить канал</Modal.Title>
            </Modal.Header>
                <Modal.Body> 
                <p>Здесь можно добавить форму или любой другой контент для создания нового канала</p>
                </Modal.Body>

                <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Отменить
                </Button>
                <Button variant="primary">
                    Отправить
                </Button>
                </Modal.Footer>
                
        </Modal>

  );
};

export default Add;

// <Modal>
// <Modal.Header closeButton>
    // <Modal.Title>Добавить канал</Modal.Title>
// </Modal.Header>
// <Modal.Body>
//     <p>Add Modal</p>
//         <Formik 
//             initialValues={{ channelName: "" }}
//             >
//             <Form >
//             <Modal.Footer>
//             <Button variant="secondary">
//                 Отменить
//             </Button>
//             <Button variant="primary">
//                 Отправить
//             </Button>
//             </Modal.Footer>
//             </Form>
//         </Formik>
//     <form onSubmit={f.handleSubmit}>
//       <FormGroup>
//         <FormControl
//           required
//           ref={inputRef}
//           onChange={f.handleChange}
//           onBlur={f.handleBlur}
//           value={f.values.body}
//           data-testid="input-body"
//           name="body"
//         />
//       </FormGroup>
//       <input type="submit" className="btn btn-primary mt-2" value="submit" />
//     </form>
//   </Modal.Body>
// </Modal>

{/* <Modal.Body> 
<p>Здесь можно добавить форму или любой другой контент для создания нового канала</p>
<Formik
initialValues={{ channelName: "" }}
>
<Form >
<Modal.Footer>
<Button variant="secondary" onClick={hideModal}>
    Отменить
</Button>
<Button variant="primary" onClick={hideModal}>
    Отправить
</Button>
</Modal.Footer>
</Form>
</Formik>
</Modal.Body> */}