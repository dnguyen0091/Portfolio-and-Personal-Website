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

    // Profile description
    const profileDesc = document.createElement('p');
    profileDesc.id = 'profileDesc';
    profileDesc.textContent= 'I am a Computer Science student at the University of Central Florida where I am learning about software development and computer systems. I am also a self-taught web developer with experience in HTML/CSS, JavaScript, and more. The drive to learn more and master my craft is what motivates me to continue to grow as a developer.When I am not developing a project, I am either working out a the gym or enjoying a game.';
    
    //Append Images of current languages
    const languages = document.createElement('div');
    languages.id = 'languages';

    const html = document.createElement('img');
    const css = document.createElement('img');
    const js = document.createElement('img');
    const react = document.createElement('img');
    const java = document.createElement('img');
    const python = document.createElement('img');
    const c = document.createElement('img');
    const pytorch = document.createElement('img');


    mainCont.appendChild(profileImg);
    mainCont.appendChild(profileDesc);
    bodyCont.appendChild(mainCont);
}