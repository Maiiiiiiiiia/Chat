import React, { useEffect, useState  } from 'react';
// import useAuth from '../hooks/index.jsx';
import useAuth from '../../hooks';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { setChannels } from '../channelsSlice';
import { setChannels } from '../../slices/channelsSlice';
// import routes from '../utils/routes';
import routes from '../../utils/routes';
import NewChannel from './NewChannel'
import { 
    // useNavigate,
  } from 'react-router-dom';
  
  const Channels = () => {

    const auth = useAuth();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const [channels, setChannelss] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`
              };
            const channelsResponse = await axios.get(routes.channels(), { headers }); // Получение данных о каналах ?
            const fetchedChannels = channelsResponse.data;
            setChannelss(fetchedChannels);
            dispatch(setChannels(fetchedChannels)); // Диспатч данных в Redux store
          } catch (error) {
            console.error('Ошибка при получении данных:', error);
          }
        };
    
        fetchData();
      }, [auth.loggedIn, dispatch]);

return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
      <b>Каналы</b>
      <NewChannel />
    </div>
        <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
            {channels.map((channel) => (
                <li key={channel.id} className="nav-item w-100">
                    <button className="w-100 rounded-0 text-start btn btn-secondary">
                        <span className="me-1">#</span>
                        {channel.name}
                    </button>
                </li>
            ))}
        </ul>
    </div>
)
};

export default Channels;

// {channels.map((channel) => {
//     return (
//         <ul key={channel.id} id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
//           <li><button>{channel.name}</button></li>
//         </ul>
//     )
//    })}