import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles'

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
    document.getElementById('root')
)



























// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// "dependencies": {
//   "@testing-library/jest-dom": "^5.14.1",
//   "@testing-library/react": "^13.0.0",
//   "@testing-library/user-event": "^13.2.1",
//   "firebase": "^9.10.0",
//   "react": "16.13.1",
//   "react-dom": "16.13.1",
//   "react-router-dom": "5.2.0",
//   "react-scripts": "5.0.1",
//   "styled-components": "5.1.0",
//   "web-vitals": "^2.1.0"
// },

//"homepage": "https://tarek-k-hallak.github.io/netflix-clone-react-project",