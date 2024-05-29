import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRemoveChannelMutation } from '../../slices/channelsSlice';
import { changeChannel } from '../../slices/appSlice';
import 'react-toastify/dist/ReactToastify.css';

const Remove = (props) => {
  const { handleCloseModal, dispatch, t } = props;
  const notify = () => toast.success(t('toast.remove'));
  const notifyErrorDelete = () => toast.success(t('toast.errorDelete'));
  const [removeChannel] = useRemoveChannelMutation();
  const modalChannelId = useSelector((state) => state.app.modalChannelId);
  const currentChannelId = useSelector((state) => state.app.currentChannelId);

  const deleteChannel = async () => {
    try {
      await removeChannel(modalChannelId).unwrap();
      if (currentChannelId === modalChannelId) {
        dispatch(changeChannel({ id: '1', name: 'general' }));
      }
      handleCloseModal();
      notify();
    } catch (error) {
      console.error(t('modals.error.delete'), error);
      notifyErrorDelete();
    }
  };

  return (
    <Modal show>
      <Modal.Header closeButton onClick={handleCloseModal}>
        <Modal.Title>{t('modals.deleteChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('modals.sure')}</p>
        <div className="d-flex justify-content-end">
          <Button type="button" variant="secondary" onClick={handleCloseModal}>{t('modals.cancel')}</Button>
          <Button type="submit" variant="danger" onClick={deleteChannel}>{t('modals.delete')}</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
