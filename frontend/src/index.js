import ReactDOM from 'react-dom/client';
import Init from './Init';
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(await Init());
};

app();
