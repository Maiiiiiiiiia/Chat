import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/esm/Col';
import { Send } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { useGetMessagesQuery, useAddMessageMutation, messagesApi } from '../../slices/messagesSlice';
import { Button, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { Formik } from 'formik';
import socket from '../../socket';
import { useTranslation } from 'react-i18next';
import * as filter from 'leo-profanity'
import { useRef } from 'react';

const Messages = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: messages = [], refetch } = useGetMessagesQuery();
  const username = useSelector((state) => state.app.username);
  const currentChannelId = useSelector((state) => state.app.currentChannelId);
  const currentChannelName = useSelector((state) => state.app.currentChannelName);
  const filterMessages = messages.filter((message) => message.channelId === currentChannelId);
  const [addMessage] = useAddMessageMutation();

  const messageBox = useRef();

  useEffect(() => {
    if (messageBox.current) {
      messageBox.current.scrollTop = messageBox.current.scrollHeight;
    }
  }, [filterMessages]);

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    const data = {};
    const { message } = values;
    data.message = filter.clean(message);
    data.channelId = currentChannelId;
    data.username = username;
    console.log(username);
    await addMessage(data);
    resetForm();
    setSubmitting(false);
  };
  useEffect(() => {
    // refetch();
      socket.on('newMessage', (newMessage) => {
              dispatch(messagesApi.util.updateQueryData('getMessages', undefined, (draft) => {
                draft.push(newMessage);
        }));
      });

    return () => {
      socket.off('newMessage');
    };
  }, [currentChannelId, messages, refetch]);

  return (
    <Col className="p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="mb-0">
            <b>
              {`# ${currentChannelName}`}
            </b>
          </p>
          <span className="text-muted">
            {`${filterMessages.length} ${t('messages.messagesCounter.messages', { count: (filterMessages.length) })}`}
          </span>
        </div>
        <div id="message-box" className="chat-messages overflow-auto px-5" ref={messageBox}>
          {filterMessages.map((message) => (
            <div className="text-break mb-2" key={message.id}>
              <b>{message.username}</b>
              :
              {message.message}
            </div>
          ))}
        </div>
        <div className="mt-auto py-3 px-5">
          <Formik initialValues={{ message: '' }} onSubmit={handleFormSubmit}>
            {({ handleSubmit, handleChange, values }) => (
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Form.Label htmlFor="new-message" hidden>
                    {username}
                  </Form.Label>
                  <Form.Control placeholder={t('messages.putYourMessages')} autoFocus id="new-message" aria-label="f" value={values.message} onChange={handleChange} type="text" name="message" />
                  <Button type="submit">
                    <Send />
                  </Button>
                </InputGroup>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Col>
  );
};

export default Messages;
