// Sélection des éléments du formulaire
const contactForm = document.querySelector('form');
const subjectInput = document.querySelector('#subject');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const rgpdConsent = document.querySelector('#rgpd-consent');

// Fonction pour valider l'email avec une expression régulière
function isValidEmail(email) {
    const emailRegExp = /^\S+@\S+\.\S+$/;
    return emailRegExp.test(email);
}

// Fonction pour afficher un message d'erreur
function showError(input, message) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    const feedbackElement = input.nextElementSibling;
    if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
        feedbackElement.textContent = message;
    }
}

// Fonction pour afficher un succès
function showSuccess(input) {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
}

// Fonction pour valider le sujet
function validateSubject() {
    const subjectValue = subjectInput.value;
    if (subjectValue === '') {
        showError(subjectInput, 'Veuillez sélectionner un sujet');
        return false;
    } else {
        showSuccess(subjectInput);
        return true;
    }
}

// Fonction pour valider l'email
function validateEmail() {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        showError(emailInput, 'L\'email ne peut pas être vide');
        return false;
    } else if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Veuillez entrer une adresse email valide');
        return false;
    } else {
        showSuccess(emailInput);
        return true;
    }
}

// Fonction pour valider le message
function validateMessage() {
    const messageValue = messageInput.value.trim();
    if (messageValue === '') {
        showError(messageInput, 'Le message ne peut pas être vide');
        return false;
    } else if (messageValue.length < 10) {
        showError(messageInput, 'Le message doit contenir au moins 10 caractères');
        return false;
    } else {
        showSuccess(messageInput);
        return true;
    }
}

// Fonction pour valider le consentement RGPD
function validateRgpdConsent() {
    if (!rgpdConsent.checked) {
        showError(rgpdConsent, 'Vous devez accepter la politique de confidentialité pour continuer');
        return false;
    } else {
        showSuccess(rgpdConsent);
        return true;
    }
}

// Écouteurs d'événements pour la validation en temps réel
subjectInput.addEventListener('change', validateSubject);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);
rgpdConsent.addEventListener('change', validateRgpdConsent);

// Écouteur d'événement pour la soumission du formulaire
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Valider tous les champs
    const isSubjectValid = validateSubject();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    const isRgpdConsentValid = validateRgpdConsent();
    
    // Si tous les champs sont valides, soumettre le formulaire
    if (isSubjectValid && isEmailValid && isMessageValid && isRgpdConsentValid) {
        // Ici, vous pouvez ajouter le code pour envoyer les données du formulaire
        alert('Votre message a été envoyé avec succès !');
        contactForm.reset();
    }
});
