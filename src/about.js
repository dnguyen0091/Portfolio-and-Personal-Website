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

    // Array of language objects
    const languageIcons = [
        { src: 'assets/js.svg', alt: 'JavaScript' },
        { src: 'assets/react.svg', alt: 'React' },
        { src: 'assets/python.svg', alt: 'Python' },
        { src: 'assets/java.svg', alt: 'Java' },
        { src: 'assets/css.svg', alt: 'CSS' },
        { src: 'assets/c.svg', alt: 'C' },
        { src: 'assets/pytorch.svg', alt: 'PyTorch' }
    ];

    // Create and append icons
    languageIcons.forEach(({ src, alt }) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        languages.appendChild(img);
    });

    bodyCont.appendChild(mainCont);
    bodyCont.appendChild(languages);
}
