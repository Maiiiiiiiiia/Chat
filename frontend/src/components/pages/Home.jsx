import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import Channels from '../channels/Channels';
import Messages from '../messages/Messages';

const Home = () => (
  <div className="h-100 d-flex flex-column justify-content-between">
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="bg-white flex-md-row h-100">
        <Channels />
        <Messages />
      </Row>
    </Container>
  </div>
);

export default Home;
