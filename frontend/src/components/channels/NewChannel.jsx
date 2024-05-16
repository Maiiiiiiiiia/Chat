import React from 'react';
import { Plus } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Formik } from 'formik';
// import { useGetChannelsQuery } from '../../slices/channelsSlice';
// import getModal from '../../components/modal/index';

// const renderModal = ({ modalInfo, hideModal, setItems }) => {
//     if (!modalInfo.type) {
//       return null;
//     }
  
//     const Component = getModal(modalInfo.type);
//     return <Component modalInfo={modalInfo} setItems={setItems} onHide={hideModal} />;
//   };

const NewChannel = () => {

    const [show, setShow] = useState(false);
    const hideModal = () => setShow(false);
    const handleShow = () => setShow(true);



    // const { data: channels = [], refetch } = useGetChannelsQuery();

    // // const { data: channels = [], refetch } = useGetChannelsQuery();
    // const [modalInfo, setModalInfo] = useState({ type: null, item: null });
    // const hideModal = () => setModalInfo({ type: null, item: null });

    // const showModal = (type, item = null) => setModalInfo({ type, item });

    return (
        <div>
            <Button size="sm" variant="outline-primary" onClick={handleShow}>
            <Plus />
            </Button>
            <Modal show={show} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить канал</Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                {/* Здесь можно добавить форму или любой другой контент для создания нового канала */}
                <p>Введите данные для нового канала...</p>
                <Formik
                initialValues={{ channelName: "" }}
                >
                <Form >
                <Modal.Footer>
                <Button variant="secondary" onClick={hideModal}>
                    Отменить
                </Button>
                <Button variant="primary" onClick={hideModal}>
                    Отправить
                </Button>
                </Modal.Footer>
                </Form>
                </Formik>
                </Modal.Body>
             </Modal>
        </div>
    )
};

export default NewChannel;
