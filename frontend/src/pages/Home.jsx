import React, { useEffect } from 'react';
import useAuth from '../hooks/index.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setChannels } from '../slices/channelsSlice';
import { setMessages } from '../slices/messagesSlice';
import { 
    useNavigate,
  } from 'react-router-dom';

const Home = () => {
    const auth = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('token');
            if (!token) {
                  navigate('/login');
              return;
            }
            
            const headers = {
              Authorization: `Bearer ${token}`
            };
    
            // Получение данных о каналах
            const channelsResponse = await axios.get('/api/channels', { headers });
            const channels = channelsResponse.data;
    
            // Получение данных о сообщениях
            const messagesResponse = await axios.get('/api/messages', { headers });
            const messages = messagesResponse.data;
    
            // Диспатч данных в Redux store
            dispatch(setChannels(channels));
            dispatch(setMessages(messages));
          } catch (error) {
            console.error('Ошибка при получении данных:', error);
          }
        };
    
        fetchData();
      }, [auth.loggedIn, dispatch]);

    return (
        <div className="container h-100 my-4 overflow-hidden rounded shadow">
        <div className="row h-100 bg-white flex-md-row">
            <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
                <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
                    <b>Каналы</b>
                    <button type="button" className="p-0 text-primary btn btn-group-vertical">
                        <svg>
                            <path></path>
                            <path></path>
                        </svg>
                        <span>+</span>
                    </button>
                </div>
                <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
                    <li><button></button></li>
                    <li><button></button></li>
                </ul>
            </div>
            <div className='col p-0 h-100'>
                <div className="d-flex flex-column h-100"></div>
            </div>
        </div>
        </div>
    )
  };
  
  export default Home;


// import { ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/esm/Row';


// const Home = () => {
//     const { token } = useSelector((state) => state.app);
//     const navigate = useNavigate();
//     useEffect(() => {
//       if (!token) {
//         return navigate('/login');
//       }
//       return () => {};
//     }, [token, navigate]);
//     return (
//       <>
//         <Container className="rounded shadow h-100 mb-2">
//           <Row className="bg-white flex-md-row h-100">
// homeeeee
//           </Row>
//         </Container>
//         <ToastContainer />
//       </>
//     );
//   };
  
//   export default Home;