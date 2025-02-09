// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import about from './about';
import contact from './contact';
import Footer from './footer';
import Header from './header';
import intro from './intro';
import Projects from './projects';

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
    intro(); //call creates the intro
    Header();//call creates the header
    about(); //call creates the body
    Projects(); //call creates the projects
    contact(); //call creates the contact
    Footer(); //call creates the footer


    
}


main();