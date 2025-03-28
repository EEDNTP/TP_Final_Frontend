# TP Final : Développement d'une plateforme de recettes culinaires interactive "GourmeTech"

## Introduction et contexte

Dans le cadre de ce TP final, vous allez mettre en pratique l'ensemble des compétences acquises en HTML, CSS et JavaScript pour créer une application web complète et interactive : une plateforme de recettes culinaires nommée "GourmeTech".

GourmeTech est un site web moderne qui permet aux passionnés de cuisine de découvrir, rechercher et partager des recettes. Cette plateforme se veut intuitive, responsive et riche en fonctionnalités interactives, offrant une expérience utilisateur optimale sur tous les appareils.

Ce projet vous permettra d'appliquer les notions fondamentales du développement web front-end dans un contexte réaliste et de créer une application qui pourrait être utilisée dans un environnement professionnel.

## Objectifs pédagogiques

À travers ce TP, vous devrez démontrer votre maîtrise des compétences suivantes :

- Structurer une application web multi-pages avec HTML sémantique
- Créer une interface utilisateur responsive et esthétique avec CSS
- Implémenter des interactions dynamiques avec JavaScript
- Manipuler le DOM pour créer des interfaces réactives
- Gérer les données côté client (localStorage, JSON)
- Valider des formulaires et traiter les entrées utilisateur
- Créer des animations et transitions pour améliorer l'expérience utilisateur
- Appliquer les bonnes pratiques d'accessibilité web

## Consignes générales

Vous devez développer l'application GourmeTech en respectant l'architecture et les fonctionnalités décrites ci-dessous. Le projet doit être réalisé en HTML, CSS et JavaScript vanilla (sans frameworks ni bibliothèques externes).

Les maquettes sont disponibles dans le fichier [maquettes.jpeg](./maquettes/maquettes.jpeg)

Votre code devra être :
- Bien structuré et commenté
- Valide selon les standards W3C
- Responsive (s'adapter à différentes tailles d'écran)
- Accessible (respecter les normes WCAG de base)
- Compatible avec les navigateurs modernes (Chrome, Firefox, Safari, Edge)

## Architecture du projet

Votre projet devra respecter l'architecture de fichiers suivante :

```
gourmeTech/
│
├── index.html              # Page d'accueil avec liste des recettes
├── recette.html            # Template pour l'affichage d'une recette
├── favoris.html            # Page des recettes favorites
├── a-propos.html           # Page à propos du site
│
├── css/
│   └── styles.css          # Styles des pages
│
├── js/
│   ├── scripts.js          # Fonctions principales et initialisation
│   └── autres_fichiers.js  # Autres fichiers si nécessaire
│
└── assets/
    ├── images/             # Images des recettes et éléments d'interface
    └── icons/              # Icônes pour l'interface

```

## Description des pages et fonctionnalités

### 1. Page d'accueil (index.html)

La page d'accueil doit présenter :

- Un en-tête (header) avec :
    - Le logo et le nom du site
    - Une navigation principale
    - Un bouton de changement de thème (clair/sombre)
    - Un lien vers la page des favoris

- Une section de recherche et filtrage avec :
    - Une barre de recherche par mots-clés
    - Des filtres par catégorie (entrée, plat, dessert)
    - Des filtres par temps de préparation
    - Des filtres par niveau de difficulté

- Une grille de recettes affichant pour chaque recette :
    - Une image
    - Le titre de la recette
    - La catégorie
    - Le temps de préparation
    - Le niveau de difficulté
    - Une icône pour ajouter aux favoris

- Un pied de page (footer) avec :
    - Des liens vers les différentes sections du site
    - Un lien vers la page "À propos"
    - Des informations de copyright

**Fonctionnalités JavaScript :**
- Filtrage dynamique des recettes sans rechargement de page
- Ajout/suppression des favoris avec mise à jour visuelle immédiate
- Changement de thème (clair/sombre) avec persistance via localStorage

### 2. Page de recette (recette.html)

Cette page affiche les détails d'une recette spécifique :

- Image principale de la recette
- Informations générales (titre, catégorie, temps, difficulté, nombre de personnes)
- Bouton pour ajouter aux favoris
- Liste des ingrédients avec quantités
- Étapes de préparation numérotées
- Suggestions de recettes similaires

**Fonctionnalités JavaScript :**
- Gestion des favoris

### 3. Page des favoris (favoris.html)

Cette page affiche les recettes sauvegardées par l'utilisateur :

- Liste des recettes favorites
- Possibilité de supprimer des favoris
- Message si aucun favori n'est enregistré

**Fonctionnalités JavaScript :**
- Récupération et affichage des favoris depuis localStorage
- Suppression de favoris avec mise à jour immédiate
- Persistance des données entre les sessions

### 4. Page à propos (a-propos.html)

Une page simple présentant :

- Informations sur le site
- Formulaire de contact avec validation
- FAQ avec sections dépliables

**Fonctionnalités JavaScript :**
- Validation du formulaire de contact
- Animation des sections FAQ (accordéon)

## Exigences techniques spécifiques

### HTML
- Utilisation des balises sémantiques appropriées (header, nav, main, section, article, footer, etc.)
- Structure correcte des formulaires avec labels associés aux inputs
- Utilisation d'attributs data-* pour stocker des informations supplémentaires
- Implémentation d'attributs d'accessibilité (aria-*, role)
- Métadonnées complètes dans le head

### CSS
- Utilisation de Flexbox et/ou Grid pour les layouts
- Implémentation d'un design responsive avec au moins 2 breakpoints
- Création de variables CSS pour les couleurs, polices et dimensions principales
- Implémentation d'un thème clair et sombre

### JavaScript
- Manipulation du DOM pour l'affichage dynamique des contenus
- Gestion des événements pour toutes les interactions
- Utilisation de localStorage pour la persistance des données

## Étapes de réalisation suggérées

1. **Préparation**
    - Créer l'architecture des fichiers
    - Établir la structure HTML de base pour chaque page

2. **Développement HTML**
    - Créer la structure complète de toutes les pages
    - Implémenter les formulaires
    - Assurer la sémantique et l'accessibilité

3. **Stylisation CSS**
    - Développer les styles principaux
    - Implémenter le responsive design
    - Mettre en place le système de thème clair/sombre

4. **Programmation JavaScript**
    - Développer les fonctionnalités de recherche et filtrage
    - Créer le système de favoris
    - Implémenter le changement de thème

5. **Tests et optimisation**
    - Tester sur différents navigateurs
    - Vérifier la responsivité
    - Optimiser les performances
    - Corriger les bugs éventuels

## Livrables attendus

- Le code source complet du projet suivant l'architecture définie
- Un dépôt GitHub public contenant l'intégralité du code source
- Un fichier README.md expliquant comment installer et lancer le projet

## Contraintes techniques

- Utilisation exclusive de HTML5, CSS3 et JavaScript vanilla (ES6+)
- **Aucun framework ou bibliothèque externe** n'est autorisé
- Compatibilité avec les navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Respect des principes de base d'accessibilité

## Bonus (optionnels)

Si vous terminez les fonctionnalités principales avant la fin du temps imparti, vous pouvez implémenter ces fonctionnalités bonus :

1. Système de notation des recettes (étoiles)
2. Galerie d'images pour chaque recette
3. Impression de la recette en format optimisé
4. Animation de chargement des pages
5. Mode de lecture (simplification de l'interface pour la lecture des recettes)

## Conseils

- Commencez par structurer correctement vos fichiers HTML et CSS avant de vous lancer dans le JavaScript
- Utilisez les outils de développement de votre navigateur pour déboguer
- Testez régulièrement sur différentes tailles d'écran
- Commentez votre code pour expliquer les parties complexes
- Utilisez Git pour versionner votre projet
- N'hésitez pas à consulter la documentation MDN pour les fonctionnalités que vous ne maîtrisez pas

Bon courage pour ce TP final ! Ce projet vous permettra de mettre en pratique l'ensemble des compétences acquises durant ce module et de créer une application web complète et fonctionnelle.
