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

const Remove = () => {
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
            console.error('Ошибка при удалении канала:', error);
            // toast.error('Ошибка при удалении канала!', {
            //     position: toast.POSITION.TOP_RIGHT
            // });
        }
    };

  return (
    <Modal show={isOpened} >
      <Modal.Header closeButton onClick={handleCloseModal}>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>Уверены?</p>
        <div className="d-flex justify-content-end mt-2">
          <Button type="button" variant="secondary" onClick={handleCloseModal} >Отменить</Button>
          <Button type="submit" variant="primary" onClick={deleteChannel}>Удалить</Button>
        </div>
      </Modal.Body>
      <ToastContainer />
    </Modal>
  );
};

export default Remove;
