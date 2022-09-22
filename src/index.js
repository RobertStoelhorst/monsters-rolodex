import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// import Layout from './components/Layout/Layout';
import AppExperience from './components/Experience';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { store } from './services/store';
import { Provider as StateProvider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode will cause the double up of console logs... StrictMode calls render methods twice so that if you code would break, it breaks more obviously during development.
  // <React.StrictMode>
  <StateProvider store={store}>
    <ErrorBoundary>
      <AppExperience />
    </ErrorBoundary>
  </StateProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
