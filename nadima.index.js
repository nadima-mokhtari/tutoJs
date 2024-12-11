document.addEventListener('DOMContentLoaded', (even)=> {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click',()=>{
        document.body.classList.toggle('dark-mode');
    })
})

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting immediately

    // Get the form values
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const date = document.getElementById('date').value.trim();

    // Validate the "Nom" field (at least 3 characters)
    if (nom.length < 3) {
        alert("Le champ nom doit contenir au moins 3 caractères.");
        return; // Stop form submission
    }

    // Validate the "Nombre de personnes" field (must be a positive integer)
    if (isNaN(numero) || parseInt(numero) <= 0) {
        alert("Le nombre de personnes doit être obligatoirement un entier positif.");
        return; // Stop form submission
    }

    // Validate the email (basic check)
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return; // Stop form submission
    }

    // If all validations pass, submit the form (can be replaced with actual form submission)
    alert("Formulaire soumis avec succès !")
});