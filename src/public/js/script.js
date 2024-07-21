document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.getElementById('card');
    const flipButton = document.getElementById('flipButton');
  
    flipButton.addEventListener('click', () => {
      card.classList.toggle('rotate-y-180');
    });
  });
  
  
  