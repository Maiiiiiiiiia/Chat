import React, { 
  useEffect, 
  // useState
  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import useAuth from '../hooks/index.jsx';
// import useAuth from '../../hooks';
// import axios from 'axios';
// import { setChannels } from '../channelsSlice';
import { useGetChannelsQuery } from '../../slices/channelsSlice';
// import routes from '../utils/routes';
// import routes from '../../utils/routes';
import { changeChannel } from '../../slices/appSlice';
import NewChannel from './NewChannel'
// import { 
//     // useNavigate,
//   } from 'react-router-dom';
  
  const Channels = () => {
    const { data: channels = [], refetch } = useGetChannelsQuery();
    // refetch;
    const dispatch = useDispatch();
    // const channels = useSelector((state) => {
    //   console.log(state.channel);
    // });
    // // const channelsNames = channels.map((channel) => channel.name);
    // console.log(channels, 'allChannels');
    const currentChannelId = useSelector((state) => state.app.currentChannelId);
    const switchChannel = ({ id, name }) => {
      // console.log(currentChannelId);
      if (id !== currentChannelId) {
        dispatch(changeChannel({ id, name }));
        // console.log('Current Channel ID before dispatch:', currentChannelId);
      }
      // console.log('Current Channel ID after dispatch:', currentChannelId);
    };

    useEffect(() => {
      console.log('Current Channel ID changed, refetching messages:', currentChannelId);
      refetch();
    }, [currentChannelId, refetch]);

return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>Каналы</b>
        <NewChannel />
      </div>
      <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
                {channels.map((channel) => (
                  <li className="nav-item w-100" key={channel.id}>
                    <button 
                    type="button" 
                    className="w-100 rounded-0 text-start btn btn-secondary"
                    onClick={() => switchChannel(channel)}
                    >
                      <span className='me-1'>#</span>
                      {' '}
                      {channel.name}
                    </button>
                  </li>
                ))}
      </ul>
    </div>
)
};

export default Channels;
