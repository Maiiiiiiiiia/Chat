import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import { closeModal } from '../../slices/modalSlice';
import { useRemoveChannelMutation } from '../../slices/channelsSlice';
import { changeChannel } from '../../slices/appSlice';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Remove = () => {
    const { t } = useTranslation();
    const notify = () => toast.success(t('toast.remove'));
    const dispatch = useDispatch();
    const { isOpened } = useSelector((state) => state.modal);
    const [removeChannel] = useRemoveChannelMutation();
    const modalChannelId = useSelector((state) => state.app.modalChannelId);
    console.log(modalChannelId);

    const handleCloseModal = () => dispatch(closeModal());

    const deleteChannel = async () => {
        try {
            await removeChannel(modalChannelId).unwrap();
            dispatch(changeChannel({ id: '1', name: 'general' }));  // Перемещаем пользователей в дефолтный канал
            handleCloseModal();
            notify();
        } catch (error) {
            console.error(t('modals.error.delete'), error);
            // toast.error('Ошибка при удалении канала!', {
            //     position: toast.POSITION.TOP_RIGHT
            // });
        }
    };

  return (
    <Modal show={isOpened} >
      <Modal.Header closeButton onClick={handleCloseModal}>
        <Modal.Title>{t('modal.deleteChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>{t('modal.sure')}</p>
        <div className="d-flex justify-content-end mt-2">
          <Button type="button" variant="secondary" onClick={handleCloseModal} >{t('modal.cancel')}</Button>
          <Button type="submit" variant="primary" onClick={deleteChannel}>{t('modal.delete')}</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
