const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuButton.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

document.getElementById('year').textContent = new Date().getFullYear();

const quotes = [
  ['“The important thing is to never stop questioning.”', '— Albert Einstein'],
  ['“Somewhere, something incredible is waiting to be known.”', '— Carl Sagan'],
  ['“Great things are done by a series of small things brought together.”', '— Vincent van Gogh'],
  ['“Look deep into nature, and then you will understand everything better.”', '— Albert Einstein'],
  ['“It always seems impossible until it is done.”', '— Nelson Mandela']
];
let quoteIndex = 0;
document.getElementById('newQuote').addEventListener('click', () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  document.getElementById('quoteText').textContent = quotes[quoteIndex][0];
  document.getElementById('quoteAuthor').textContent = quotes[quoteIndex][1];
});
