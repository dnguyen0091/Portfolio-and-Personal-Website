export default function Footer() {
    const footerCont = document.querySelector('footer');
    
    // Create contact info container
    const contactInfoCont = document.createElement('div');
    contactInfoCont.id = 'contact-info-footer';
    
    // Email
    const email = document.createElement('a');
    const emailIcon = document.createElement('img');
    emailIcon.src = './assets/email.svg';
    emailIcon.alt = 'Email';
    email.href = 'mailto:davidnguyen0091@icloud.com?subject=Portfolio%20Contact'; // Add mailto protocol
    email.appendChild(emailIcon);
    contactInfoCont.appendChild(email);

    // GitHub
    const github = document.createElement('a');
    const githubIcon = document.createElement('img');
    githubIcon.src = './assets/github.png';
    githubIcon.alt = 'Github Icon';
    github.href='https://github.com/dnguyen0091';
    github.appendChild(githubIcon);
    contactInfoCont.appendChild(github);

    // LinkedIn
    const linkedin = document.createElement('a');
    const linkedinIcon = document.createElement('img');
    linkedinIcon.src = './assets/linkedIn.svg';
    linkedinIcon.alt = 'LinkedIn';
    linkedin.href='https://www.linkedin.com/in/dnguyen0091/'
    linkedin.appendChild(linkedinIcon);
    contactInfoCont.appendChild(linkedin);

    footerCont.appendChild(contactInfoCont);

    const text = document.createElement('p');
    text.textContent = 'DAVID NGUYEN ©2024';
    footerCont.appendChild(text);
}