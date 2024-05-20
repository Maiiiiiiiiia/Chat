import React, { 
    // useEffect, 
    // useRef
 } from 'react';
// import _ from 'lodash';
// import { useFormik } from 'formik';
import { 
    // FormGroup,
    Modal, 
    FormLabel, 
    FormControl
 } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Button } from 'react-bootstrap';
import { closeModal } from '../../slices/modalSlice';
import { useAddChannelMutation, useGetChannelsQuery} from '../../slices/channelsSlice';
import * as yup from 'yup';
import { changeChannel } from '../../slices/appSlice';

// BEGIN (write your solution here)
// const generateOnSubmit = ({ setItems, onHide }) => (values) => {
//   const item = { id: _.uniqueId(), body: values.body };
//   setItems((items) => {
//     items.push(item);
//   });
//   onHide();
// };

const Add = () => {
    const dispatch = useDispatch();
    const onHide = () => dispatch(closeModal());
    const { isOpened } = useSelector((state) => state.modal); // Подключаем состояние модального окна
    const { data: channels = [], refetch } = useGetChannelsQuery(); // allChannels
    const [addChannel] = useAddChannelMutation();

    // const formik = useFormik({
    //     // onSubmit: generateOnSubmit(),
    //     const newChannel = { name: values.name, removable: true, author: user.username };

    //   });
    const validationSchema = yup.object().shape({
        channelName: yup.string().trim()
        .min(3, 'Имя канала должно содержать от 3 до 20 символов')
        .max(20, 'Имя канала должно содержать от 3 до 20 символов')
        .required('Имя канала обязательно')
        .notOneOf(channels.map((channel) => channel.name), 'Канал с таким именем уже существует')
    })

    // const inputRef = useRef();
    const handleFormSubmit = async (values, {setSubmitting, resetForm}) => {
        try {
            const newChannel = await addChannel({ name: values.channelName }).unwrap();
            refetch();  // Обновляем список каналов после добавления
            resetForm();
            onHide();
            dispatch(changeChannel({ id: newChannel.id, name: newChannel.name })); 
        } catch (error) {
            console.error("Ошибка при добавлении канала: ", error);
        } finally {
            setSubmitting(false);
        }
    }

  return (
        <Modal show={isOpened} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить канал</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <Formik 
                    initialValues={{channelName: ''}}
                    onSubmit={handleFormSubmit}
                    validationSchema={validationSchema}
                    >
                     {({ handleSubmit, handleChange, values, isSubmitting, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormLabel htmlFor="channelName">Имя канала</FormLabel>
                        <FormControl 
                            id="channelName"
                            name="channelName"
                            type="text"
                            value={values.channelName}
                            onChange={handleChange}
                            isInvalid={touched.channelName && !!errors.channelName}
                            required
                            />
                    <FormControl.Feedback type="invalid">{errors.channelName}</FormControl.Feedback>
                    <div className="d-flex justify-content-end mt-2">
                    <Button variant="secondary" onClick={onHide} disabled={isSubmitting}>Отменить</Button>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>Отправить</Button>
                    </div>
                    </Form>
                     )}
                </Formik>
            </Modal.Body>   
        </Modal>

  );
};

export default Add;
