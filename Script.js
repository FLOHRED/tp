function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function expandCard(card) {
    card.classList.toggle('expanded');
    var description = card.querySelector('.description');
    description.style.display = (description.style.display === 'none') ? 'block' : 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.imagenSup');

  image.addEventListener('click', () => {
    image.style.transform = 'translateX(50%)';
  });


});

document.addEventListener('DOMContentLoaded', function() {
  const verMasBtns = document.querySelectorAll('.ver-mas');

  verMasBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const parrafoAdicional = this.nextElementSibling;
      parrafoAdicional.style.display = (parrafoAdicional.style.display === 'none') ? 'block' : 'none';
    });
  });
});
