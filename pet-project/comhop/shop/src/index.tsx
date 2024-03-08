import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Header } from './components/layout/Header';
import { Alert } from './components/layout/Alert';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const backgroundImage =  {
  backgroundImage: `url(${window.location.origin}/image/wallpaper/1661213941_60-kartinkin-net-p-fon-dlya-saita-minimalizm-krasivo-62.jpg)`,
  backgroundRepeat: 'repeat-y', 
  width: '100%',
  height: '100%',
}


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div style={backgroundImage} className='wallpaper'>
          <Header />
          <Routes />
          <Alert />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
