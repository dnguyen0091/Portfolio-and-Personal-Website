export default function intro()
{
    const root = document.querySelector('#root');
    const introCont = document.createElement('div');

    // Basic intro placeholder
    const introText1 = document.createElement('p');
    introText1.textContent = "Hello, I'm ";
    introText1.id = 'introText1';

    const highlightedText = document.createElement('span');
    highlightedText.style.fontWeight = 'bold';
    highlightedText.textContent = 'David Nguyen';
    highlightedText.style.color = '#19C37D';

    const period= document.createElement('span');
    period.textContent = '.';
    period.style.color = '#EAEAEA';
    highlightedText.appendChild(period);

    introText1.appendChild(highlightedText);

    const introText2 = document.createElement('p');
    introText2.id = 'introText2';
    introText2.textContent = "I'm a Full Stack Developer.";
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

    button.addEventListener('mouseover', () => {
        icon.src='./assets/downArrowHover.svg';
    });

    button.addEventListener('mouseout', () => {
        icon.src='./assets/downArrow.svg';
    });


    button.appendChild(icon);
    root.appendChild(introCont);
    root.appendChild(button);
}