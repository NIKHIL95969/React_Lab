import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// navbar 
// const navbar = ReactDOM.createRoot(document.getElementById('root'));
// navbar.render(
 
//     <div className='nav-block'>
//         <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Learn</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><a href="#">Service</a></li>
//             <li><a href="#">About</a></li>
//         </ul>
//     </div>
// )


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// Main body content
// const mainBody = ReactDOM.createRoot(document.getElementById('main-body'));
// mainBody.render(
 
//     <div className='cont1'>
//         <h1>Hi there its me Nikhil</h1>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nostrum deserunt, enim voluptatibus cupiditate inventore quis corporis incidunt, nesciunt, placeat eveniet ipsa.</p>
//     </div>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
