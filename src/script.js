const anchor = document.querySelector('.ancora');
const sobre = document.querySelector('#sobre');

anchor.addEventListener('click', (e) => {
  e.preventDefault();
  sobre.scrollIntoView({ behavior: 'smooth' });
});

const anchorContato = document.querySelector('.ancora-contato');

anchorContato.addEventListener('click', (e) => {
  e.preventDefault();
  contato.scrollIntoView({ behavior: 'smooth' });
});

