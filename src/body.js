export default function Body()
{
    const bodyCont = document.querySelector('body');

    // Container holding all content for home screen
    const mainCont = document.createElement('main');
    mainCont.id = 'main-content';
    

    // Profile picture
    const profileImg= document.createElement('img');
    profileImg.src = 'https://via.placeholder.com/150';
    profileImg.alt = 'Profile Picture';
    mainCont.appendChild(profileImg);


    // Basic intro placeholder
    const bio = document.createElement('p');
    const bioText = document.createTextNode('Hello, I am David Nguyen.');
    bio.appendChild(bioText);

    mainCont.appendChild(bio);

    bodyCont.appendChild(mainCont);
}