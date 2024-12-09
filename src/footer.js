export default function Footer()
{
    const footerCont= document.querySelector('footer');
    
    const image= document.createElement('img');
    image.src= 'assets/github.png';
    image.alt= 'Github';
    footerCont.appendChild(image);

    const text= document.createElement('p');
    text.textContent= 'Made by David Nguyen';
    footerCont.appendChild(text);
}