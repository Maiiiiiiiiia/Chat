import React, { useRef, useEffect } from 'react';
import {
  Modal, FormLabel, FormControl, Button,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as filter from 'leo-profanity';
import { changeChannel } from '../../slices/appSlice';
import { useAddChannelMutation } from '../../slices/channelsSlice';

const Add = (props) => {
  const {
    handleCloseModal, validationSchema, dispatch, t
  } = props;
  const notify = () => toast.success(t('toast.success'));
  const notifyErrorAdd = () => toast.success(t('modals.error.add'));
  const { isOpened } = useSelector((state) => state.modal);
  const [addChannel] = useAddChannelMutation();
  const inputRef = useRef(null);

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const cleanName = filter.clean(values.channelName);
      const newChannel = await addChannel({ name: cleanName }).unwrap();
      resetForm();
      handleCloseModal();
      dispatch(changeChannel({ id: newChannel.id, name: newChannel.name }));
      notify();
    } catch (error) {
      notifyErrorAdd();
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (isOpened) {
      inputRef.current.focus();
    }
  }, [isOpened]);

  return (
    <Modal show onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.addChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ channelName: '' }}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleSubmit, handleChange, values, isSubmitting, errors, touched,
          }) => (
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
                ref={inputRef}
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
