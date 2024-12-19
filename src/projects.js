export default function Projects() {
    const projectCont = document.querySelector('.projects');

    const projectHeader = document.createElement('h1');
    projectHeader.textContent = 'Projects';
    projectCont.appendChild(projectHeader);

    const carousel = document.createElement('div');
    carousel.className = 'carousel';
    projectCont.appendChild(carousel);

    const projectList = [
        { title: 'Dragon of Dojima AI', description: '', imgSrc: 'https://via.placeholder.com/150', alt: 'Kiryu', demoLink: '', codeLink: '' },
        { title: 'Weather Forecast', description: '', imgSrc: 'https://via.placeholder.com/150', alt: 'WeatherApp', demoLink: '', codeLink: '' },
        { title: 'Shogi', description: '', imgSrc: 'https://via.placeholder.com/150', alt: 'ShogiApp', demoLink: '', codeLink: '' },
        { title: 'EtchASketch', description: '', imgSrc: 'https://via.placeholder.com/150', alt: 'EtchASketch', demoLink: '', codeLink: '' },
    ];

    projectList.forEach((project, index) => {
        createProjectCard(carousel, project.title, project.description, project.imgSrc, project.alt, project.demoLink, project.codeLink, index, projectList.length);
    });
}

function createProjectCard(carousel, title, description, imgSrc, alt, demoLink, codeLink, index, total) {
    const angle = (360 / total) * index;
    const projectCard = document.createElement('div');
    projectCard.className = 'projectCard';
    projectCard.style.backgroundImage = `url(${imgSrc})`;
    projectCard.style.transform = `rotateY(${angle}deg) translateZ(500px)`; // Adjust translateZ for spacing

    const projectOverlay = document.createElement('div');
    projectOverlay.className = 'projectOverlay';

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = title;
    projectOverlay.appendChild(projectTitle);

    const projectDesc = document.createElement('p');
    projectDesc.textContent = description;
    projectOverlay.appendChild(projectDesc);

    projectCard.appendChild(projectOverlay);
    carousel.appendChild(projectCard);
}