import React from 'react';
import { Modal, FormLabel, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Button } from 'react-bootstrap';
import { closeModal } from '../../slices/modalSlice';
import { useAddChannelMutation, useGetChannelsQuery} from '../../slices/channelsSlice';
import * as yup from 'yup';
import { changeChannel } from '../../slices/appSlice';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as filter from 'leo-profanity'

 const Add = () => {
    const { t } = useTranslation();
    const notify = () => toast.success(t('toast.success'));
    const dispatch = useDispatch();
    const handleCloseModal = () => dispatch(closeModal());
    const { isOpened } = useSelector((state) => state.modal); // Подключаем состояние модального окна
    const { data: channels = [], refetch } = useGetChannelsQuery(); // allChannels
    const [addChannel] = useAddChannelMutation();

    const validationSchema = yup.object().shape({
        channelName: yup.string().trim()
        .min(3, t('modals.numberCharacters'))
        .max(20, t('modals.numberCharacters'))
        .required(t('modals.obligatoryField'))
        .notOneOf(channels.map((channel) => channel.name), t('modals.mustUnique'))
    })

    // const inputRef = useRef();
    const handleFormSubmit = async (values, {setSubmitting, resetForm}) => {
        try {
            const cleanName = filter.clean(values.channelName);
            const newChannel = await addChannel({ name: cleanName }).unwrap();
            refetch();  // Обновляем список каналов после добавления
            resetForm();
            handleCloseModal();
            dispatch(changeChannel({ id: newChannel.id, name: newChannel.name })); 
            notify();
        } catch (error) {
            console.error(t('modals.error.add'), error);
        } finally {
            setSubmitting(false);
        }
    };

  return (
        <Modal show={isOpened} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>{t('modals.addChannel')}</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <Formik 
                    initialValues={{channelName: ''}}
                    onSubmit={handleFormSubmit}
                    validationSchema={validationSchema}
                    >
                     {({ handleSubmit, handleChange, values, isSubmitting, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormLabel htmlFor="channelName">{t('modals.channelName')}</FormLabel>
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
                    <Button variant="secondary" onClick={handleCloseModal} disabled={isSubmitting}>{t('modals.cancel')}</Button>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>{t('modals.send')}</Button>
                    </div>
                    </Form>
                     )}
                </Formik>
            </Modal.Body>  
        </Modal>
  );
};

export default Add;
