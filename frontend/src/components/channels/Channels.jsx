import React, { 
  // useEffect, 
  // useState
  } from 'react';

// import { useSelector } from 'react-redux';
// import useAuth from '../hooks/index.jsx';
// import useAuth from '../../hooks';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setChannels } from '../channelsSlice';
// import { setChannels } from '../../slices/channelsSlice';
// import routes from '../utils/routes';
// import routes from '../../utils/routes';
import NewChannel from './NewChannel'
import { 
    // useNavigate,
  } from 'react-router-dom';
  
  const Channels = () => {
    // const channels = useSelector((state) => state.channelsReducer) || [];


return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>Каналы</b>
        <NewChannel />
      </div>
        <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
          <span className="bold-text">
                {/* {' '}
                {channels.channels.map((channel) => (
                  <div key={channel.id}>
                    #
                    {' '}
                    {channel.name}
                  </div>
                ))} */}

                <div>Каналы</div>
              </span>
        </ul>
    </div>
)
};

export default Channels;
