// script.js
document.addEventListener("DOMContentLoaded", () => {
    const ratings = document.querySelectorAll('h2, h3, h4, .image');

    // Crée un observateur
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Ajoute la classe pour déclencher l'animation
            }
        });
    }, {
        threshold: 0.5 // Déclenche lorsque 50% de l'élément est visible
    });

    // Applique l'observateur à chaque élément avec la classe .rating
    ratings.forEach(rating => observer.observe(rating));
});


// Sélection des titres H2, H3 et H4
const titles = document.querySelectorAll('h2, h3, h4');

// Fonction pour ajouter l'animation
const animateOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      console.log('rrrrr');
      observer.unobserve(entry.target); // Arrête d'observer après la première apparition
    }
  });
};

// Options pour l'observer
const options = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.1 // 10% visible
};

// Création de l'observer
const observer = new IntersectionObserver(animateOnScroll, options);

// Ajout de l'observer à chaque titre
titles.forEach(title => {
  observer.observe(title);
});















document.addEventListener("DOMContentLoaded", function () {


    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');


    const menu2 = document.querySelector('.menu');
    let menuT = menu2.offsetTop;

    // Récupérer la hauteur du header
    const header = document.getElementById('main-header');
    const windowHeight = window.innerHeight;

    let lastScrollPosition = window.scrollY;

    function updateActiveSection() {
        const scrollPosition =window.scrollY;
        
        if (scrollPosition > windowHeight/2) {
            if (lastScrollPosition - scrollPosition > 10) {
                header.style.top = `0px`;
                //menu.classList.remove('show');
            }
            else if (lastScrollPosition - scrollPosition < -1){
                header.style.top = `${-header.offsetHeight - menu2.offsetHeight}px`;
                //menu.classList.remove('show');
            }
        }
        else {
            header.style.top = `0px`;
        }
        lastScrollPosition = scrollPosition;
    }
    window.addEventListener('scroll', updateActiveSection);





    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        event.stopPropagation(); // Empêcher la propagation du clic à partir du menu

        // Fermer le menu lorsque l'utilisateur clique sur un lien du menu
        const clickedElement = event.target;
        if (clickedElement.tagName === 'A') {
            menu.classList.remove('show');
            //console.log(`Lien du menu cliqué : ${clickedElement.textContent}`); // Afficher un message dans la console lorsqu'un lien du menu est cliqué
        }


        // Ferme le menu lorsque l'utilisateur clique sur l'icone du menu ou ailleurs sur la page
        const isMenuClicked = menu.contains(event.target);
        const isMenuIconClicked = menuIcon.contains(event.target);

        if (!isMenuClicked && !isMenuIconClicked) {
            menu.classList.remove('show');
        }
    });
});