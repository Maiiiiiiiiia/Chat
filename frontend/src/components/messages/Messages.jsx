import React, { 
    // useEffect
 } from 'react';
// import useAuth from '../../hooks';
// import axios from 'axios';
import { useSelector } from 'react-redux';
// import { setMessages } from '../../slices/messagesSlice';
// import routes from '../../utils/routes';
import Col from 'react-bootstrap/esm/Col';
// import { Formik } from 'formik';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
// import { Send } from 'react-bootstrap-icons';
// import Button from 'react-bootstrap/esm/Button';


import { 
    // useNavigate,
  } from 'react-router-dom';

  const Messages = () => {
    const messages = useSelector((state) => state.messagesreducer) || { messages: [] };
    // console.log(messages);
//     const auth = useAuth();
//     const dispatch = useDispatch();
//     // const username = useSelector((state) => state.app.username);
// //     const currentChannelId = useSelector((state) => state.app.currentChannelId);
//     // const currentChannelName = useSelector((state) => state.app.currentChannelName);
// // console.log(username);
// // console.log(currentChannelId);
// // console.log(currentChannelName);
//     // const navigate = useNavigate();
//     // let messages = []; 
//     // const [messages, setmessagesss] = useState([]);
//     // const currentChannelName = useSelector((state) => state.app.currentChannelName);

//     const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
//         // const data = {};
//         const { message } = values;
//         // const newMessage = { text: message, sender: 'user' };
//         // setmessagesss([...messages, newMessage]);
//         // console.log(messages);
//         resetForm();
//         setSubmitting(false);
//       };

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const token = localStorage.getItem('token');
    //         const headers = {
    //             Authorization: `Bearer ${token}`
    //           };

    //         // const messagesResponse = await axios.get(routes.messages(), { headers }); // Получение данных о сообщениях 
    //         // const fetchedMessages = messagesResponse.data;
    //         // const channelsResponse = await axios.get(routes.channels(), { headers }); // Получение данных о каналах ?
    //         // const fetchedChannels = channelsResponse.data;
    //         // console.log(fetchedChannels);

    //         // setmessagesss(fetchedMessages);
    //         // dispatch(setMessages(fetchedMessages));
    //       } catch (error) {
    //         console.error('Ошибка при получении данных:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, [auth.loggedIn, dispatch]);

return (
    <Col className='col p-0 h-100'>
        <div className='d-flex flex-column h-100'>
            <div className="bg-light mb-4 p-3 shadow-sm small">
                <p className="mb-0">
                    {/* <b>{`# ${currentChannelName}`}</b> */}
                </p>
                {/* <span className='text-muted'>
                    кол-во сообщeний
                </span> */}
            </div>

            <div id="message-box" className="chat-messages overflow-auto px-5 ">
                {/* {messages.map((msg, index) => {
                    <div key={index}>{msg.text}</div>
                })} */}
                     {messages.messages.length > 0 ? (
                        messages.messages.data.map((message) => (
                        <div key={message.id}>
                            #
                            {message.id}
                            {' '}
                            {message.name}
                        </div>
                        ))
                    ) : (
                        <div>
                        No messages
                        </div>
                    )}
            </div>
            <div className="mt-auto px-5 py-3">
                {/* <Formik initialValues={{ message: '' }} onSubmit={handleFormSubmit}> */}
                {/* <Formik initialValues={{ message: '' }} >

                    {({ handleSubmit, handleChange, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <InputGroup>
                        <Form.Control value={values.message} onChange={handleChange} type="text" name="message" />
                        <Button type="submit">
                            <Send />
                        </Button>
                        </InputGroup>
                    </Form>
                    )}
                </Formik> */}
            </div>
        </div>
    </Col>
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