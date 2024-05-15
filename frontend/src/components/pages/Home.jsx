import React, { 
  // useEffect
 } from 'react';
// import axios from 'axios';
// import routes from '../../utils/routes.js';
// import useAuth from '../../hooks/index.jsx';
// import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import Channels from '../channels/Channels'
import Messages from '../messages/Messages';

const Home = () => {

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

    // const { token } = useSelector((state) => state.app);
  // console.log(token);
  // const navigate = useNavigate();
    // const auth = useAuth();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   if(!token) {
    //     return navigate('/login');
    //   }
    //   return () => {};
    //     const fetchData = async () => {
    //       try {
    //         const channelsData = await axios.get(routes.channelsPath(), {
    //           headers: getAuthHeader(),
    //         });
    //         const messagesData = await axios.get(routes.messagesPath(), {
    //           headers: getAuthHeader(),
    //         });

    //         dispatch(setChannels(channelsData.data));
    //         dispatch(setMessages(messagesData.data));
    //       } 
          
    //       catch (error) {
    //         console.error('Ошибка при получении данных:', error);
    //     }
    //     }
    //     fetchData();
      // }, [token, navigate]);