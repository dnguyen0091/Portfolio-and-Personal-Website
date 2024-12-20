export default function Projects() {
    const projectCont = document.querySelector('.projects');

    const projectHeader = document.createElement('h1');
    projectHeader.textContent = 'Projects';
    projectCont.appendChild(projectHeader);

    const carousel = document.createElement('div');
    carousel.className = 'carousel';
    projectCont.appendChild(carousel);

    const leftButton = document.createElement('button');
    leftButton.className = 'carousel-button left-button';
    leftButton.innerHTML = '&lt;';
    carousel.appendChild(leftButton);

    const carouselContent = document.createElement('div');
    carouselContent.className = 'carousel-content';
    carousel.appendChild(carouselContent);

    const rightButton = document.createElement('button');
    rightButton.className = 'carousel-button right-button';
    rightButton.innerHTML = '&gt;';
    carousel.appendChild(rightButton);

    const projectList = [
        { title: 'Dragon of Dojima AI', description: 'Description for Dragon of Dojima AI', imgSrc: 'https://via.placeholder.com/150', alt: 'Kiryu' },
        { title: 'Weather Forecast', description: 'Description for Weather Forecast', imgSrc: 'https://via.placeholder.com/150', alt: 'WeatherApp' },
        { title: 'Shogi', description: 'Description for Shogi', imgSrc: 'https://via.placeholder.com/150', alt: 'ShogiApp' },
        { title: 'EtchASketch', description: 'Description for EtchASketch', imgSrc: 'https://via.placeholder.com/150', alt: 'EtchASketch' },
    ];

    projectList.forEach((project, index) => {
        createProjectCard(carouselContent, project.title, project.description, project.imgSrc, project.alt);
    });

    let currentIndex = 0;
    const totalProjects = projectList.length;

    function updateCarousel() {
        const cards = carouselContent.querySelectorAll('.projectCard');
        cards.forEach((card, index) => {
            card.classList.remove('left', 'center', 'right', 'hidden');
            
            if (index === currentIndex) {
                card.classList.add('center');
            } else if (index === (currentIndex + 1) % totalProjects) {
                card.classList.add('right');
            } else if (index === (currentIndex - 1 + totalProjects) % totalProjects) {
                card.classList.add('left');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    function autoRotate() {
        currentIndex = (currentIndex + 1) % totalProjects;
        updateCarousel();
    }

    let autoRotateInterval = setInterval(autoRotate, 2000);

    carousel.addEventListener('mouseover', () => {
        clearInterval(autoRotateInterval);
    });

    carousel.addEventListener('mouseout', () => {
        autoRotateInterval = setInterval(autoRotate, 2000);
    });

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
        updateCarousel();
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalProjects;
        updateCarousel();
    });

    updateCarousel();
}

function createProjectCard(carouselContent, title, description, imgSrc, alt) {
    const projectCard = document.createElement('div');
    projectCard.className = 'projectCard';
    projectCard.style.backgroundImage = `url(${imgSrc})`;

    const projectTitle = document.createElement('div');
    projectTitle.className = 'projectTitle';
    projectTitle.textContent = title;
    projectCard.appendChild(projectTitle);

    const projectOverlay = document.createElement('div');
    projectOverlay.className = 'projectOverlay';

    const projectTitleOverlay = document.createElement('h3');
    projectTitleOverlay.textContent = title;
    projectOverlay.appendChild(projectTitleOverlay);

    const projectDesc = document.createElement('p');
    projectDesc.textContent = description;
    projectOverlay.appendChild(projectDesc);

    projectCard.appendChild(projectOverlay);
    carouselContent.appendChild(projectCard);

    projectCard.addEventListener('click', () => {
        if (projectCard.classList.contains('expanded')) {
            projectCard.classList.remove('expanded');
        } else {
            const expandedCard = carouselContent.querySelector('.projectCard.expanded');
            if (expandedCard) {
                expandedCard.classList.remove('expanded');
            }
            if (projectCard.classList.contains('center')) {
                projectCard.classList.add('expanded');
            }
        }
    });
}
