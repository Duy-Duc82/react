import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './views/App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/reducers/RootReducer.jsx';

const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </StrictMode>,
)
