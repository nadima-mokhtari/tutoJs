const toggleButton = document.getElementById('toggleButton');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Toggle dark mode
  });


<<<<<<< HEAD


document.getElementById('formContact').addEventListener('submit', function(event) {
    
    event.preventDefault();
  
    const formName = document.getElementById('nom').value;
    const formNumber = document.getElementById('personne').value;
    let valid = true;

=======
document.getElementById('formContact').addEventListener('submit', function(event) {
    
    event.preventDefault();
  
    const formName = document.getElementById('nom').value;
    const formNumber = document.getElementById('personne').value;
    let valid = true;

>>>>>>> 63e7aafa700f22681fccbb55eb0bff067501de61
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
