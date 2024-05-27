import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import Channels from '../channels/Channels'
import Messages from '../messages/Messages';
import AuthButton from '../AuthButton';

const Home = () => {
    return (
      // <div className="h-100" id="chat">
        <div className="h-100 d-flex flex-column justify-content-between">
          <AuthButton />
            <Container className='h-100 my-4 overflow-hidden rounded shadow'>
              <Row className="bg-white flex-md-row h-100">
                <Channels />
                <Messages />
              </Row>
            </Container>
        </div>
      // </div>
    )
  };
  
  export default Home;
