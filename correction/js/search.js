// L'utilisateur envoie le formulaire
// On sélectionne le formulaire
const searchForm = document.querySelector("#filters");

// On écoute l'évènement "submit"
searchForm.addEventListener("submit", function(event){
    event.preventDefault();

    // On récupère les données du formulaire
    const formElements = this.elements;

    // On initialise la liste des cases cochées par filtre
    const filters = {
        category: [],
        duration: [],
        difficulty: []
    };

    // On garde les checkbox cochées
    // On boucle sur tous les éléments
    for(let element of formElements){
        // Si l'élément est une checkbox cochée, on la stocke dans un tableau
        if(element.type === "checkbox" && element.checked){
            // on la stocke dans un tableau
            filters[element.name].push(element.value);
        }
    }
    
    // On masque les recettes dont aucun filtre ne correspond
    // D'usage, on masque tout et on réaffiche les recettes dont au moins 1 filtre correspond
    // On le fait uniquement si au moins 1 case est cochée
    if(filters.category.length > 0 || filters.duration.length > 0 || filters.difficulty.length > 0){
        // on masque tout
        // On sélectionne toutes les recettes
        const recipes = document.querySelectorAll("#recipes article");
        
        // On boucle sur chaque recette
        for(const recipe of recipes){
            // On masque la recette
            recipe.style.display = "none";

            // Si la recette a une des catégories cochées
            if(filters.category.includes(recipe.dataset.category)){
                recipe.style.display = "block";
            }

            // Si la recette a une des durées cochées
            if(filters.duration.includes(recipe.dataset.duration)){
                recipe.style.display = "block";
            }

            // Si la recette a une des difficultés cochées
            if(filters.difficulty.includes(recipe.dataset.difficulty)){
                recipe.style.display = "block";
            }

            // for(let key of Object.keys(filters)){
            //     if(filters[key].includes(recipe.dataset[key])){
            //         recipe.style.display = "block";
            //     }
            // }
        }
    }
});


