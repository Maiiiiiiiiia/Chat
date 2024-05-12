import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/esm/Col';
import { Send } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { setMessages } from '../../slices/messagesSlice';
import { Button, Form } from 'react-bootstrap';
import io from 'socket.io-client';
// import useAuth from '../../hooks';
// import { setMessages } from '../../slices/messagesSlice';
import routes from '../../utils/routes';
// import { addMessages } from '../../slices/messagesSlice';

  const Messages = () => {
    const [message, setMessage] = useState('');
    // console.log(messages);
//     const auth = useAuth();
    const dispatch = useDispatch();
    const { token } = JSON.parse(localStorage.getItem('userId'));
    // const socket = io();
    const allChannels = useSelector((state) => state.channelsReducer.channels) || [];
    // console.log(allChannels, 'allChannels');
    const channelIdActive = useSelector((state) => state.channelsReducer.channelId);
    // console.log(channelIdActive, 'channelidActive');

    const [socket, setSocket] = useState(null);

    const allMessages = useSelector((state) => state.messagesReducer.messages) || [];
    // console.log(allMessages, 'allmessages');

    const inputRef = useRef();
    useEffect(() => {
      inputRef.current.focus();
      inputRef.value = null;
      const newSocket = io('ws://localhost:3000');

      newSocket.on('connect', () => {
        console.log('WebSocket соединение установлено.');
    });

    newSocket.on('message', (newMessage) => {
      console.log('Новое сообщение получено:', newMessage);
      // Обновление списка сообщений в Redux store
      dispatch(setMessages(newMessage));
  });
  setSocket(newSocket);
  console.log(socket);

  return () => {
    newSocket.disconnect(); // Отключение от сервера WebSocket при размонтировании компонента
};
    }, []);

    const channelMessages = allMessages.filter((mes) => mes.channelid === channelIdActive);
    const messagesBox = allMessages.map(({ username, id, body }) => {
      // console.log(username);
      return (
        <div className="text-break mb-2" key={id}>
          <b>{username}</b>
          :
          {' '}
          {body}
        </div>
      );
    });

    const activeChannelId = (channelItem) => {
      const filter = channelItem.find((channel) => channel.id === channelIdActive);
      return filter ? filter.name : 'channels not found';
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        // console.log(localStorage.getItem('userId'), 'localStorage.getItem(userId)');
        const currentName = JSON.parse(localStorage.getItem('userId')).username;
        // console.log(token, 'token');
        // console.log(currentName, 'currentname');
        const newMessage = { body: message, channelid: '1', username: currentName };
        // console.log(newMessage, 'newMessage');
        try {
          await axios.post(routes.messagesPath(), newMessage, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const response = await axios.get(routes.messagesPath(), {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // console.log(response.data, 'response.data in sendMessage');
          dispatch(setMessages(response.data));
          setMessage('');
        } catch (error) {
          console.error('Error sending or fetching messages:', error);
        }
      };

return (
    <Col className='col p-0 h-100'>
        <div className='d-flex flex-column h-100'>
            <div className="bg-light mb-4 p-3 shadow-sm small">
                <p className="mb-0">
                    <b> {activeChannelId(allChannels)} </b>
                </p>
                <span className='text-muted'>
                {channelMessages.length} сообщений 
                </span>
            </div>

            <div id="message-box" className="chat-messages overflow-auto px-5 ">
              {messagesBox}
            </div>
            <div className="mt-auto px-5 py-3">
                <Form noValidate="" className="py-1 border rounded-2" onSubmit={sendMessage}>
                    <div className="input-group has-validation">
                    <Form.Control
                        name="body"
                        className="border-0 p-0 ps-2 form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ref={inputRef}
                    />
                    <Button type="submit" className="btn btn-group-vertical" disabled={!message} >
                        <Send />
                    </Button>
                    </div>
                </Form>


            </div>
        </div>
    </Col>
)
};

export default Messages;
