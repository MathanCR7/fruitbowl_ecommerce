import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import './index.css';

const CLIENT_ID = "592661904725-s8jm8up4q0pjqkrnd3sev4g6kt636b8k.apps.googleusercontent.com"; // Replace with your Google OAuth Client ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <Provider store={store}>
      <Router>
        <App />
        <Analytics />  {/* ✅ Placed inside Router */}
      </Router>
    </Provider>
  </GoogleOAuthProvider>
);
