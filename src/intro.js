export default function intro()
{
    const root = document.querySelector('#root');
    const introCont = document.createElement('div');

    // Basic intro placeholder
    const introText1 = document.createElement('h2');
    introText1.textContent = 'Hello, my name is David.';
    const introText2 = document.createElement('h1');
    introText2.textContent = 'I am a Full Stack Developer.';
    introCont.appendChild(introText1);
    introCont.appendChild(introText2);

    const button = document.createElement('button');
    button.textContent = 'View my work';
    button.id = 'viewWorkButton';

    button.addEventListener('click', () => {
        const targetElement = document.getElementsByClassName('body')[0]; // Get first element
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth'
            });
        }
    });

    const icon= document.createElement('img');
    icon.src = './assets/downArrow.svg';
    icon.alt = 'Down Arrow';
    button.appendChild(icon);
    root.appendChild(introCont);
    root.appendChild(button);
}