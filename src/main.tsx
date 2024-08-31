//* --- REDUX
import { Provider } from 'react-redux';

//* --- REACT
import ReactDOM from 'react-dom/client';

//* --- STORE
import store from './Store/store';

//* --- COMPONENTS
import App from './components/App/App';

//* --- SCSS
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
