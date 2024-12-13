

export default function contact()
{
    const bodyCont = document.querySelector('.body');

    // Container holding all content for home screen
    const mainCont = document.createElement('div');
    mainCont.id = 'main-content-contact';
    

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

    const formHeader = document.createElement('h2');
    formHeader.textContent = 'Contact Form';
    contactFormCont.appendChild(formHeader);


    //Name
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter your name';
    contactFormCont.appendChild(nameInput);

    //Email
    const emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.placeholder = 'Enter your email';
    contactFormCont.appendChild(emailInput);
    //Message
    const message = document.createElement('textarea');
    message.placeholder = 'Message';
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
    contactInfoCont.id = 'contact-info';
    //Email
    const email= document.createElement('div');
    const emailIcon= document.createElement('img');
    emailIcon.src= 'assets/email.png';
    emailIcon.alt= 'Email';
    const emailText= document.createElement('a');
    emailText.textContent= 'davidnguyen0091@icloud.com';

    email.appendChild(emailIcon);
    email.appendChild(emailText);
    contactInfoCont.appendChild(email);



    //GitHub
    const github= document.createElement('div');
    const githubIcon= document.createElement('img');
    githubIcon.src= 'assets/github.png';
    githubIcon.alt= 'Github Icon';
    const githubText= document.createElement('a');
    githubText.href= 'https://github.com/dnguyen0091';
    githubText.textContent= 'dnguyen0091';

    github.appendChild(githubIcon);
    github.appendChild(githubText);
    contactInfoCont.appendChild(github);



    //LinkedIn
    const linkedin= document.createElement('div');
    const linkedinIcon= document.createElement('img');
    linkedinIcon.src= 'assets/linkedin.png';
    linkedinIcon.alt= 'LinkedIn';
    const linkedinText= document.createElement('a');
    linkedinText.href= 'https://www.linkedin.com/in/dnguyen0091/';
    linkedinText.textContent= 'dnguyen0091';

    linkedin.appendChild(linkedinIcon);
    linkedin.appendChild(linkedinText);
    contactInfoCont.appendChild(linkedin);



    //Phone
    const phone= document.createElement('div');
    const phoneIcon= document.createElement('img');
    phoneIcon.src= 'assets/phone.png';
    phoneIcon.alt= 'Phone';
    const phoneText= document.createElement('a');
    phoneText.textContent= '904-844-1920';


    phone.appendChild(phoneIcon);
    phone.appendChild(phoneText);
    contactInfoCont.appendChild(phone);
    


    contactCont.appendChild(contactFormCont);
    contactCont.appendChild(contactInfoCont);
    mainCont.appendChild(contactCont);
    bodyCont.appendChild(mainCont);

}
