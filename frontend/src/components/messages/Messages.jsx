import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMessages } from '../../slices/messagesSlice';
import routes from '../../utils/routes';

import { 
    // useNavigate,
  } from 'react-router-dom';

  const Messages = () => {

    const auth = useAuth();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // let messages = []; 
    const [messages, setmessagesss] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('token');
            const headers = {
                Authorization: `Bearer ${token}`
              };

            const messagesResponse = await axios.get(routes.messages(), { headers }); // Получение данных о сообщениях 
            const fetchedMessages = messagesResponse.data;
            console.log(fetchedMessages);
            setmessagesss(fetchedMessages);
            dispatch(setMessages(fetchedMessages));
          } catch (error) {
            console.error('Ошибка при получении данных:', error);
          }
        };
    
        fetchData();
      }, [auth.loggedIn, dispatch]);

return (
    <div className='col p-0 h-100'>
        <div className='d-flex flex-column h-100'>
            <div className="bg-light mb-4 p-3 shadow-sm small">название канала и кол-во сообещний</div>
            <div id="message-box" className="chat-messages overflow-auto px-5 ">
                {messages.map((m) => (m.name))}
            </div>
            <div className="mt-auto px-5 py-3">
                <form className='py-1 border rounded-2'>
                    <div className="input-group has-validation">
                        <input name="body" aria-label="Новое сообщение" placeholder="Введите сообщение..." className="border-0 p-0 ps-2 form-control" />
                        <button type="submit" className="btn btn-group-vertical" disabled>
                            <svg><path></path></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
};

export default Messages;

// {/* <div className='col p-0 h-100'>
// <div className="d-flex flex-column h-100">
//     <div className='bg-light mb-4 p-3 shadow-sm small'>
//       <p className='m-0'><b>#название канала</b></p>
//       <span> 0 сообщений</span>
//     </div>
//     <div id="message-box" className="chat-messages overflow-auto px-5 ">
//         {messages.map(message => {
//             message.name
//         })}
//     </div>
//     <div className='mt-auto px-5 py-3'><form></form></div>
// </div> */}