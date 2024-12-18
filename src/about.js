export default function about()
{
    const bodyCont = document.querySelector('.body');

    // Container holding all content for home screen
    const mainCont = document.createElement('div');
    mainCont.id = 'main-content';
    


    
    // Profile picture
    const profileImg= document.createElement('img');
    profileImg.src = 'https://via.placeholder.com/300';
    profileImg.alt = 'Profile Picture';
    mainCont.appendChild(profileImg);
    // Profile description
    const profileDesc = document.createElement('p');
    profileDesc.id = 'profileDesc';
    profileDesc.textContent= 'I am a Computer Science student at the University of Central Florida where I am learning about software development and computer systems. I am also a self-taught web developer with experience in HTML/CSS, JavaScript, and more. The drive to learn more and master my craft is what motivates me to continue to grow as a developer.When I am not developing a project, I am either working out a the gym or enjoying a game.';
    mainCont.appendChild(profileDesc);


    //Append Images of current languages
    const languages = document.createElement('div');
    languages.id = 'languages';

    const html = document.createElement('img');
    html.src='assets/html.svg';
    html.alt='HTML';
    languages.appendChild(html);

    const css = document.createElement('img');
    css.src='assets/css.svg';
    css.alt='CSS';
    languages.appendChild(css);

    const js = document.createElement('img');
    js.src='assets/js.svg';
    js.alt='JavaScript';
    languages.appendChild(js);

    const react = document.createElement('img');
    react.src='assets/react.svg';
    react.alt='React';
    languages.appendChild(react);

    const java = document.createElement('img');
    java.src='assets/java.svg';
    java.alt='Java';
    languages.appendChild(java);

    const python = document.createElement('img');
    python.src='assets/python.svg';
    python.alt='Python';
    languages.appendChild(python);

    const c = document.createElement('img');
    c.src='assets/c.svg';
    c.alt='C';
    languages.appendChild(c);
    
    const pytorch = document.createElement('img');


    
    
    bodyCont.appendChild(mainCont);
    bodyCont.appendChild(languages);
}
