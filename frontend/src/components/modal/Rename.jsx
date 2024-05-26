import { Formik } from 'formik';
import React, { useRef } from 'react';
import { Button, Form, FormControl, Modal, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
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
    const notifyErrorRename = () => toast.success(t('toast.errorRename'));
    const dispatch = useDispatch();
    const input = useRef();
    const [updateChannel] = useUpdateChannelMutation();
    const { data: channels = [] } = useGetChannelsQuery(); // allChannels
    const { isOpened } = useSelector((state) => state.modal);
    const modalChannelId = useSelector((state) => state.app.modalChannelId);
    const modalChannelName = useSelector((state) => state.app.modalChannelName);
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
            console.error(t('modals.error.rename'), error);
            notifyErrorRename();
        }
    }

    return (
        <Modal show={isOpened} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{t('modals.renameChannel')}</Modal.Title>
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
                        <FormLabel htmlFor="ChannelName" visuallyHidden>{t('modals.channelManagement')}</FormLabel>
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
                                <Button type="button" variant="secondary" onClick={handleCloseModal}>{t('modals.cancel')}</Button>
                                <Button type="submit" variant="primary">{t('modals.send')}</Button>
                            </div>
                    </Form>
                )}
            </Formik>
           </Modal.Body>
        </Modal>
      );  
};

export default Rename;
