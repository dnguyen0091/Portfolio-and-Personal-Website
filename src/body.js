export default function Body()
{
    const bodyCont = document.querySelector('.body');

    // Container holding all content for home screen
    const mainCont = document.createElement('div');
    mainCont.id = 'main-content';
    

    // Bio section
    const introCont = document.createElement('div');


    // Basic intro placeholder
    const introText1 = document.createElement('h2');
    introText1.textContent = 'Hello, my name is David.';
    const introText2 = document.createElement('h1');
    introText2.textContent = 'I am a Full Stack Developer.';
    introCont.appendChild(introText1);
    introCont.appendChild(introText2);
    mainCont.appendChild(introCont);




    
    // Profile picture
    const profileImg= document.createElement('img');
    profileImg.src = 'https://via.placeholder.com/400';
    profileImg.alt = 'Profile Picture';

    mainCont.appendChild(introCont);
    mainCont.appendChild(profileImg);
    bodyCont.appendChild(mainCont);
}
