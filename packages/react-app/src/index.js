import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Using an error boundary */

// import { withErrorBoundary } from './initSentryHub'
// ReactDOM.render(
//   <React.StrictMode>
//     {withErrorBoundary(App)()}
//   </React.StrictMode>,
//   document.getElementById('root')
// );
  
/* Using Sentry.init */
/** Note: if Sentry.init was used, it looks like they should get a copy of
 * that error in their Sentry project too (though this behaviour might only
 * be applicable in development, to be confirmed.)
 */

import "./initSentry"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
