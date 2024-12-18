


export default function Header() 
{
    const headerCont= document.querySelector('header');

    // // create a logo for the header
    // const logo = document.createElement('img');
    // logo.src = 'https://via.placeholder.com/150';
    // logo.alt = 'Logo';
    // headerCont.appendChild(logo);

    // create a navigation container
    const navCont = document.createElement('nav');
    createNav(navCont);

    headerCont.appendChild(navCont);

}


//creates tabs for the navigation bar
function createNav(navCont)
{

    // create a list that stores navigation links
    const nav = document.createElement('ul');
    nav.classList.add('nav-links');
    //list item for the home page
    const home = document.createElement('a');
    
    home.textContent = 'Home';
    home.href = '#'; // Add href to make it look like a link

    home.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.getElementById('root'); // Use ID instead of class
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth'
            });
        }
    });
    nav.appendChild(home);

    //list item for the about page
    const about = document.createElement('a');
    about.href= '#';
    about.textContent = 'About';
    
    about.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.getElementsByClassName('body')[0]; // Get first element with class 'body'
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth'
            });
        }
    });
    nav.appendChild(about);


    //list item for the portfolio page
    const portfolio = document.createElement('a');
    portfolio.href= 'https://www.linkedin.com/in/dnguyen0091/';
    portfolio.textContent = 'Portfolio';
    nav.appendChild(portfolio);

    //list item for the contact page
    const contact = document.createElement('a');
    contact.href= 'https://www.linkedin.com/in/dnguyen0091/';
    contact.textContent = 'Contact';
    nav.appendChild(contact);



    navCont.appendChild(nav);
}
