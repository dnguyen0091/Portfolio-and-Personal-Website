// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import Body from './body';
import Footer from './footer';
import Header from './header';
import './styles.css'; // Import the CSS file

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//         <Header />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


function main()
{
    
    Header();//call creates the header
    Body(); //call creates the body
    Footer(); //call creates the footer


    
}


main();
