import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/rent-car-test">
          <App />
        </BrowserRouter>
      </PersistGate>
      <GlobalStyle/>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);


