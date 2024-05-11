import React, { useEffect } from 'react';
import axios from 'axios';
import routes from '../../utils/routes.js';
import useAuth from '../../hooks/index.jsx';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import Channels from '../channels/Channels'
import Messages from '../messages/Messages'
import { setChannels } from '../../slices/channelsSlice';
import { setMessages } from '../../slices/messagesSlice';
import { 
    useNavigate,
  } from 'react-router-dom';

  const getAuthHeader = () => {
    const userId = JSON.parse(localStorage.getItem('userId'));
    // console.log(userId, 'userId');
    if (userId && userId.token) {
      return { Authorization: `Bearer ${userId.token}` };
    }
    return {};
  };

const Home = () => {
    const auth = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const channelsData = await axios.get(routes.channelsPath(), {
              headers: getAuthHeader(),
            });
            const messagesData = await axios.get(routes.messagesPath(), {
              headers: getAuthHeader(),
            });

            dispatch(setChannels(channelsData.data));
            dispatch(setMessages(messagesData.data));
          } 
          
          catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
        }
        fetchData();
      }, [dispatch, auth, navigate]);

    return (
        <Container className="rounded shadow h-100 mb-2 overflow-hidden">
        <Row className="bg-white flex-md-row h-100">
            <Channels />
            <Messages />
        </Row>
        </Container>
    )
  };
  
  export default Home;
