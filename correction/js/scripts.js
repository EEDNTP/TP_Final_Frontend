/**
 * Applique le thème à la page
 */
function applyTheme() {
    // Changer l'icône
    // Chemin vers l'icône
    const icon = `assets/icons/sprite.svg#${currentTheme}`;

    // On injecte le chemin dans la balise <use>
    themeSwitch.querySelector("use").href.baseVal = icon;

    // On sélectionne le bon fichier CSS
    const CSSFile = (currentTheme === "light") ? "styles.css" : "styles-dark.css";

    // On affiche le bon fichier CSS
    // On sélectionne le link
    const link = document.querySelector("#theme");

    link.href = `css/${CSSFile}`;
}

// On récupère le thème dans le localStorage
let currentTheme = localStorage.theme ?? "light";

// On sélectionne le "theme-switch"
const themeSwitch = document.querySelector("#theme-switch");

// On applique le thème (chargement de la page)
applyTheme();

// on écoute le clic
themeSwitch.addEventListener("click", function () {
    // On change l'icône, on change le fichier CSS et on stocke le nom du nouveau thème actuel

    // Si theme light alors on met dark sinon on met light
    currentTheme = (currentTheme === "light") ? "dark" : "light";

    // on sauvegarde
    localStorage.theme = currentTheme;

    // On applique le thème
    applyTheme();
});


// Menu burger
// Sélection des éléments
const burgerIcon = document.querySelector('#burger');
const navMenu = document.querySelector('nav ul');

// Ajout d'un écouteur d'événement sur le burger
burgerIcon.addEventListener('click', function () {
    // Toggle de la classe 'open' sur le menu de navigation
    navMenu.classList.toggle('open');
});