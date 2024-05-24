import { Formik } from 'formik';
import React, {
    //  useEffect, 
    useRef
 } from 'react';
// import { useFormik } from 'formik';
import { Button, Form, FormControl, Modal, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { Form } from 'react-router-dom';
import { closeModal } from '../../slices/modalSlice';
import { useUpdateChannelMutation } from '../../slices/channelsSlice';
import { useGetChannelsQuery } from '../../slices/channelsSlice';
import * as yup from 'yup';
import { changeChannel } from '../../slices/appSlice';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Rename = () => {
    const { t } = useTranslation();
    const notify = () => toast.success(t('toast.rename'));
    const dispatch = useDispatch();
    const input = useRef();
    const [updateChannel] = useUpdateChannelMutation();
    const { data: channels = [] } = useGetChannelsQuery(); // allChannels
    // const channelsNames = channels.map((channel) => channel.name);
    // console.log(channelsNames);
    const { isOpened } = useSelector((state) => state.modal);
    const modalChannelId = useSelector((state) => state.app.modalChannelId);
    console.log(modalChannelId);
    const modalChannelName = useSelector((state) => state.app.modalChannelName);
    // console.log(modalChannelName);

    const handleCloseModal = () => dispatch(closeModal());
    

    const validationSchema = yup.object().shape({
        channelName: yup.string().trim()
        .min(3, t('modals.numberCharacters'))
        .max(20, t('modals.numberCharacters'))
        .required(t('modals.obligatoryField'))
        .notOneOf(channels.map((channel) => channel.name), t('modals.mustUnique'))
    })


    const onSubmit = async (values) => {
        try {
            const { channelName, channelId } = values;
            const data = {
                name: channelName,
                removable: true,
                id: channelId,
            };

            await updateChannel(data).unwrap();
            handleCloseModal();
            dispatch(changeChannel({ id: channelId, name: channelName }));
            notify();
        } catch (error) {
            console.error(t('modal.error.rename'), error);
        }
    }

    return (
        <Modal show={isOpened} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{t('modal.renameChannel')}</Modal.Title>
          </Modal.Header>

           <Modal.Body>
            <Formik
                initialValues={{ channelName: modalChannelName, channelId: modalChannelId }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({
                    values, handleChange, handleSubmit, errors,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormLabel htmlFor="ChannelName" visuallyHidden>{t('modal.channelManagement')}</FormLabel>
                        <FormControl 
                            name="channelName" 
                            id="name" 
                            onChange={handleChange} 
                            value={values.channelName} 
                            ref={input} 
                            autoFocus 
                            isInvalid={!!errors.channelName} />
                        <FormControl.Feedback type="invalid">{errors.channelName}</FormControl.Feedback>
                            <div className="d-flex justify-content-end mt-2">
                                <Button type="button" variant="secondary" onClick={handleCloseModal}>{t('modal.cancel')}</Button>
                                <Button type="submit" variant="primary">{t('modal.send')}</Button>
                            </div>
                    </Form>
                )}
            </Formik>
           </Modal.Body>

        </Modal>
      );  
};

export default Rename;
