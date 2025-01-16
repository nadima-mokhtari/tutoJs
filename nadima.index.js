const toggleButton = document.getElementById('toggleButton');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Toggle dark mode
  });


document.getElementById('formContact').addEventListener('submit', function(event) {
    
    event.preventDefault();
  
    const formName = document.getElementById('nom').value;
    const formNumber = document.getElementById('personne').value;
    let valid = true;

    if (formName.length < 3) {
        alert('Le nom doit contenir au moins 3 caractères.');
        valid = false;
    }

    if (!Number.isInteger(Number(formNumber)) || Number(formNumber) < 1) {
        alert('Le nombre de personnes doit être un entier.');
        valid = false;
    }

    
    if (valid) {
        this.submit();
    }
});
