import React, { useEffect } from 'react';
import useAuth from '../hooks/index.jsx';
import { useDispatch } from 'react-redux';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import Channels from '../components/channels/Channels'
import Messages from '../components/messages/Messages'
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
                return navigate('/login');
            }
          } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
        }
        fetchData();
      }, [auth.loggedIn, dispatch]);

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

//   <Container className="rounded shadow h-100 mb-2 overflow-hidden">
//   <Row className="bg-white flex-md-row h-100">
//       <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
//           <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
//               <b>Каналы</b>
//               <button type="button" className="p-0 text-primary btn btn-group-vertical">
//                   <svg>
//                       <path></path>
//                       <path></path>
//                   </svg>
//                   <span>+</span>
//               </button>
//           </div>
//              {channels.map(channel => {
//                 <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
//                   <li key={channel.id}><button>channel.name</button></li>
//                 </ul>
//              })}
//       </div>
//       <div className='col p-0 h-100'>
//           <div className="d-flex flex-column h-100">
//               <div className='bg-light mb-4 p-3 shadow-sm small'>
//                 <p className='m-0'><b>#название канала</b></p>
//                 <span> 0 сообщений</span>
//               </div>
//               <div id="message-box" className="chat-messages overflow-auto px-5 ">
//                   {messages.map(message => {
//                       message.name
//                   })}
//               </div>
//               <div className='mt-auto px-5 py-3'><form></form></div>
//           </div>
//       </div>
//   </Row>
//   </Container>