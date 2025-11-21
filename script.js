window.onload = () => {
  document.querySelector('h1').style.opacity = 1;
  document.querySelectorAll('p').forEach(p => p.style.opacity = 1);
  document.querySelector('.pin').style.opacity = 1;
  document.querySelector('#cal').style.opacity = 1;
};

document.getElementById('cal').addEventListener('click', () => {
  alert('Three dates. Pick one. You’re in.');
});