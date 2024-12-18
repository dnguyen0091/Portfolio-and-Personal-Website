export default function Footer()
{
    const footerCont= document.querySelector('footer');
    
    // Email
    const email = document.createElement('button');
    const emailIcon = document.createElement('img');
    emailIcon.src = './assets/email.svg';
    emailIcon.alt = 'Email';
    email.appendChild(emailIcon);
    contactInfoCont.appendChild(email);

    // GitHub
    const github = document.createElement('button');
    const githubIcon = document.createElement('img');
    githubIcon.src = './assets/github.png';
    githubIcon.alt = 'Github Icon';
    github.appendChild(githubIcon);

    contactInfoCont.appendChild(github);

    // LinkedIn
    const linkedin = document.createElement('button');
    const linkedinIcon = document.createElement('img');
    linkedinIcon.src = './assets/linkedIn.svg';
    linkedinIcon.alt = 'LinkedIn';
    linkedin.appendChild(linkedinIcon);
    contactInfoCont.appendChild(linkedin);



    //Phone
    const phone= document.createElement('button');
    const phoneIcon= document.createElement('img');
    phoneIcon.src= './assets/phone.svg';
    phoneIcon.alt= 'Phone';
    phone.appendChild(phoneIcon);
    contactInfoCont.appendChild(phone);

    footerCont.appendChild(contactInfoCont);

    const text= document.createElement('p');
    text.textContent= 'DAVID NGUYEN ©2024';
    footerCont.appendChild(text);
}
