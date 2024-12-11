

export default function contact()
{
    const bodyCont = document.querySelector('.body');

    // Container holding all content for home screen
    const mainCont = document.createElement('div');
    mainCont.id = 'main-content';
    

    //Header
    const header = document.createElement('h1');
    header.textContent = 'Get in touch with me!';
    mainCont.appendChild(header);


    // Contact Container
    const contactCont = document.createElement('div');
    contactCont.id = 'contact-container';

    //Contact Form
    const contactFormCont = document.createElement('div');
    contactFormCont.id = 'contact-form';
    //Name
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    contactFormCont.appendChild(nameInput);

    //Email
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    contactFormCont.appendChild(emailInput);
    //Message
    const message = document.createElement('textarea');
    message.rows = 10;
    message.cols = 50;
    contactFormCont.appendChild(message);


    //Submit Button
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Submit';
    contactFormCont.appendChild(submit);
    


    // Contact Info
    const contactInfoCont = document.createElement('div');
    //Email
    const email= document.createElement('div');
    const emailIcon= document.createElement('img');
    emailIcon.src= 'assets/email.png';
    emailIcon.alt= 'Email';
    const emailText= document.createElement('p');
    emailText.textContent= 'davidnguyen0091@icloud.com';
    email.appendChild(emailIcon);
    contactInfoCont.appendChild(email);



    //GitHub
    const github= document.createElement('div');
    const githubIcon= document.createElement('img');
    githubIcon.src= 'assets/github.png';
    githubIcon.alt= 'Github';
    const githubText= document.createElement('p');
    githubText.textContent= 'https://github.com/dnguyen0091';
    github.appendChild(githubIcon);
    contactInfoCont.appendChild(github);
    //LinkedIn
    const linkedin= document.createElement('div');
    const linkedinIcon= document.createElement('img');
    linkedinIcon.src= 'assets/linkedin.png';
    linkedinIcon.alt= 'LinkedIn';
    const linkedinText= document.createElement('p');
    linkedinText.textContent= 'https://www.linkedin.com/in/dnguyen0091/';
    linkedin.appendChild(linkedinIcon);
    contactInfoCont.appendChild(linkedin);
    //Phone
    const phone= document.createElement('div');
    const phoneIcon= document.createElement('img');
    phoneIcon.src= 'assets/phone.png';
    phoneIcon.alt= 'Phone';
    const phoneText= document.createElement('p');
    phoneText.textContent= '904-844-1920';
    phone.appendChild(phoneIcon);
    contactInfoCont.appendChild(phone);
    
}