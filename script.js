'use strict';
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const search = document.querySelector('#article-search');
if (search) {
  const cards = [...document.querySelectorAll('.article-card')];
  const count = document.querySelector('#article-count');
  const empty = document.querySelector('#no-results');
  search.addEventListener('input', () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      card.hidden = !card.textContent.toLowerCase().includes(query);
      if (!card.hidden) visible++;
    });
    count.textContent = `${visible} of ${cards.length} articles`;
    empty.hidden = visible !== 0;
  });
}
