(() => {
  const button = document.getElementById('cheerButton');
  const count = document.getElementById('cheerCount');
  let cheers = 0;
  button.addEventListener('click', () => {
    cheers += 1;
    count.textContent = String(cheers);
    button.innerHTML = '¡Vamos, Leo! <span>♥</span>';
  });
})();
