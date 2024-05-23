import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import Channels from '../channels/Channels'
import Messages from '../messages/Messages';
// import AuthProvider from '../AuthProvider';


const Home = () => {

    return (
      <div className="h-100" id="chat">
        <div className='d-flex flex-column h-100'>
          {/* <AuthProvider /> */}
            <Container className='h-100 my-4 overflow-hidden rounded shadow'>
              <Row className="bg-white flex-md-row h-100">
                <Channels />
                <Messages />
              </Row>
            </Container>
        </div>
      </div>
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