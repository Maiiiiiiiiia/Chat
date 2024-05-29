import ReactDOM from 'react-dom/client';
import init from './init';
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(await init());
};

app();
