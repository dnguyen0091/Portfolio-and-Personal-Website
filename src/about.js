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
        { src: 'assets/techStack/js.svg',language:'JAVASCRIPT', alt: 'JavaScript' },
        { src: 'assets/techStack/react.svg',language:'REACT', alt: 'React' },
        { src: 'assets/techStack/python.svg',language:'PYTHON', alt: 'Python' },
        { src: 'assets/techStack/java.svg',language:'JAVA', alt: 'Java' },
        { src: 'assets/techStack/css.svg',language:'CSS', alt: 'CSS' },
        { src: 'assets/techStack/c.png',language:"C", alt: 'C' },
        { src: 'assets/techStack/git.svg',language:'GIT', alt: 'git' },
        { src: 'assets/techStack/vim.svg',language:'VIM', alt: 'vim' },
        { src: 'assets/techStack/vscode.svg',language:'VSCODE', alt: 'vscode' },
    ];

    // Create and append icons
    languageIcons.forEach(({ src, language, alt }) => {
        const container = document.createElement('div');
        container.className = 'languageContainer';
    
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        
        const p = document.createElement('p');
        p.textContent = language;
        
        container.appendChild(img);
        container.appendChild(p);
        languages.appendChild(container);
    });

    bodyCont.appendChild(mainCont);
    bodyCont.appendChild(languages);
}
