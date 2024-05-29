import { Formik } from 'formik';
import React, { useRef, useEffect } from 'react';
import {
  Button, Form, FormControl, Modal, FormLabel,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useUpdateChannelMutation } from '../../slices/channelsSlice';

const Rename = (props) => {
  const { handleCloseModal, validationSchema, t } = props;
  const notify = () => toast.success(t('toast.rename'));
  const notifyErrorRename = () => toast.success(t('toast.errorRename'));
  const [updateChannel] = useUpdateChannelMutation();
  const modalChannelId = useSelector((state) => state.app.modalChannelId);
  const modalChannelName = useSelector((state) => state.app.modalChannelName);
  const nameChannel = useRef();

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
      notify();
    } catch (error) {
      console.error(t('modals.error.rename'), error);
      notifyErrorRename();
    }
  };
  useEffect(() => {
    if (nameChannel.current) {
      nameChannel.current.focus();
      nameChannel.current.select();
    }
  }, []);

  return (
    <Modal show onHide={handleCloseModal}>
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
              <FormControl
                name="channelName"
                id="channelName"
                onChange={handleChange}
                value={values.channelName}
                ref={nameChannel}
                autoFocus
                isInvalid={!!errors.channelName}
              />
              <FormLabel htmlFor="channelName" visuallyHidden>{t('modals.channelName')}</FormLabel>
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
