// On initialise la page avec les favoris stockés dans localStorage
// On récupère les favoris actuellement dans localStorage, s'il n'y en a pas on crée un tableau vide
const favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];

// On récupère les recettes dans la page
const recipes = document.querySelectorAll("#recipes article");

// Pour chaque recette
for(let recipe of recipes){
    // on vérifie si elle est dans les favoris
    // On récupère l'id de la recette
    const recipeId = Number(recipe.dataset.id);
    
    // On vérifie si l'id est dans les favoris
    const position = favorites.indexOf(recipeId);

    // Si la recette est dans les favoris
    if(position !== -1){
        // on passe le coeur en rouge
        // On sélectionne la div avec la classe "favorite"
        const favorite = recipe.querySelector(".favorite");

        // On ajoute la classe "active"
        favorite.classList.add("active");
    }else{
        // On vérifie si on est sur la page des favoris, si oui, on masque la recette
        const recipesContainer = recipe.parentElement;
        if(recipesContainer.dataset.page === "favorites"){
            recipe.style.display = "none";
        }
    }
}


// Sélectionner les "boutons" favoris
const favoritesButtons = document.querySelectorAll(".favorite");

// On boucle sur les boutons
for(let favoriteButton of favoritesButtons){
    // On met un écouteur d'évènement clic
    favoriteButton.addEventListener("click", function(){
        // On récupère la balise "article" de la recette
        const recipe = this.closest("article");

        // On récupère l'id de la recette
        const recipeId = Number(recipe.dataset.id);

        // On doit stocker l'id s'il n'est pas déjà dans localStorage
        // Donne la position de la recette dans le tableau des favoris, -1 si non trouvé
        const position = favorites.indexOf(recipeId);

        // Si position = -1 on ajoute le favori, sinon, on le supprime
        if(position === -1){
            // On ajoute la recette dans le tableau des favoris
            favorites.push(recipeId);
            this.classList.add("active");

        }else{
            // On retire la recette du tableau des favoris
            favorites.splice(position, 1);
            this.classList.remove("active");

            // On vérifie si on est sur la page des favoris, si oui, on masque la recette
            const recipesContainer = recipe.parentElement;
            if(recipesContainer.dataset.page === "favorites"){
                recipe.style.display = "none";
            }
        }
        localStorage.favorites = JSON.stringify(favorites);
    });
}