import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import { closeModal } from '../../slices/modalSlice';
import { useRemoveChannelMutation } from '../../slices/channelsSlice';
import { 
    ToastContainer, 
    // toast
 } from 'react-toastify';
import { changeChannel } from '../../slices/appSlice';
import { useTranslation } from 'react-i18next';

const Remove = () => {
    const { t } = useTranslation();
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
            // toast.success('Канал успешно удален!', {
            //     position: toast.POSITION.TOP_RIGHT
            //   });
            handleCloseModal();
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
      <ToastContainer />
    </Modal>
  );
};

export default Remove;
