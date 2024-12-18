
export default function contact()
{
    const bodyCont = document.querySelector('.contact');

    // Container holding all content for home screen
    const mainCont = document.createElement('div');
    mainCont.id = 'main-content-contact';
    

    //Header
    const header = document.createElement('h1');
    header.textContent = 'Contact';
    mainCont.appendChild(header);

    const p= document.createElement('p');
    p.textContent="Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.";
    mainCont.appendChild(p);


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
    const submit = document.createElement('button');
    submit.id= 'submit';
    submit.textContent = 'Submit';
    contactFormCont.appendChild(submit);
    
    
    contactCont.appendChild(contactFormCont);
    
    mainCont.appendChild(contactCont);
    bodyCont.appendChild(mainCont);

}



