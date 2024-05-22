import React, { 
  useEffect, 
  // useState
  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetChannelsQuery } from '../../slices/channelsSlice';
import { changeChannel, setChannelModal } from '../../slices/appSlice';
import { Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
// import Modal from 'react-bootstrap/Modal';
import { showModal } from '../../slices/modalSlice';
// import getModal from '../../components/modal/index';
// import modalReducer from '../../slices/index';
import RenderModal from '../modal/RenderModal';

  const Channels = () => {
    const { data: channels = [], refetch } = useGetChannelsQuery();
    const dispatch = useDispatch();
    const currentChannelId = useSelector((state) => state.app.currentChannelId);

    const switchChannel = ({ id, name }) => {
      if (id !== currentChannelId) {
        dispatch(changeChannel({ id, name }));
      }
    };

    const setShowModal = (type, item = null) => {
      if(type === 'renaming' || type === 'removing') {
        dispatch(setChannelModal({ id: item.id, name: item.name }))
      }
      dispatch(showModal({ type }));
    };

    useEffect(() => {
      // console.log('Current Channel ID changed, refetching messages:', currentChannelId);
      refetch();
    }, [currentChannelId, refetch]);

return (
  <>
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>Каналы</b>
            <Button size="sm" variant="outline-primary" onClick={() => setShowModal('adding')} >
              <Plus />
            </Button>
      </div>
      <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
        {channels.map((channel, index) => (
          <li className="nav-item w-100" key={channel.id}>
            <div role="group" className="d-flex dropdown btn-group">
              <button 
                  type="button" 
                  className={`w-100 rounded-0 text-start btn ${
                    channel.id === currentChannelId ? 'btn-secondary' : ''
                  }`}
                  onClick={() => switchChannel(channel)}
                >
                  <span className='me-1'>#</span>
                  {' '}
                  {channel.name}
              </button>
              {index >= 2 && (
                  <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle split variant="bg-light" id={channel.id}>
                    <span className="visually-hidden">Управление каналами</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item id={channel.id} onClick={() => setShowModal('removing', { id: channel.id })}>Удалить</Dropdown.Item>
                    <Dropdown.Item id={channel.id} name={channel.name} onClick={() => setShowModal('renaming', { id: channel.id, name: channel.name })}>Переименовать</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>

          </li>
        ))}
      </ul>
    </div>
    <RenderModal />
  </>
)
};

export default Channels;
