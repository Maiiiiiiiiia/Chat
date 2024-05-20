import React from 'react';
import { Modal, 
    // FormGroup,
    Button,
 } from 'react-bootstrap';
import { 
    useSelector, 
    useDispatch
 } from 'react-redux';
import { closeModal } from '../../slices/modalSlice';
import { useRemoveChannelMutation } from '../../slices/channelsSlice';
import { ToastContainer, toast } from 'react-toastify';

// BEGIN (write your solution here)
// const generateOnSubmit = ({ modalInfo, setItems, onHide }) => (e) => {
//   e.preventDefault();
//   setItems((items) => items.filter((i) => i.id !== modalInfo.item.id));
//   onHide();
// };

const Remove = () => {
    // const currentChannelId = useSelector((state) => state.app.currentChannelId);
    // const modalChannelId = useSelector((state) => state.modal.setChannelModal);
    const dispatch = useDispatch();
    const { isOpened, item: channelId } = useSelector((state) => state.modal);

    const [removeChannel] = useRemoveChannelMutation();

    const handleCloseModal = () => {
        dispatch(closeModal());
    };
// useRemoveChannelMutation;
// const { data: channels = [], refetch } = useGetChannelsQuery();
    const deleteChannel = async () => {
        try {
            await removeChannel(channelId).unwrap();
    //         dispatch(changeChannel({ id: '1', name: 'general' }));  // Перемещаем пользователей в дефолтный канал
            toast.success('Канал успешно удален!', {
                position: toast.POSITION.TOP_RIGHT
              });
            dispatch(closeModal());
        } catch (error) {
            console.error('Ошибка при удалении канала:', error);
            toast.error('Ошибка при удалении канала!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        
        // if (id === currentChannelId) {
        //     dispatch(changeChannel({ id: '1', name: 'general' }))
        // }

    };

  return (
    <Modal show={isOpened}>
      <Modal.Header closeButton>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>Уверены?</p>
        <div className="d-flex justify-content-end mt-2">
          <Button type="button" variant="secondary" onClick={handleCloseModal} >Отменить</Button>
          <Button type="button" variant="primary" onClick={deleteChannel}>Удалить</Button>
        </div>
      </Modal.Body>
      <ToastContainer />
    </Modal>
  );
};

export default Remove;