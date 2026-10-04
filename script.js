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

const enquiry = document.querySelector('#enquiry-form');
if (enquiry) enquiry.addEventListener('submit', event => {
  event.preventDefault();
  if (!enquiry.reportValidity()) return;
  const value = id => document.getElementById(id).value.trim();
  const body = ['Name / organization: ' + value('client-name'), 'Service: ' + value('service-choice'), '', 'Requirements:', value('project-brief'), '', 'Timing / meeting overlap: ' + (value('meeting-window') || 'To be discussed')].join('\n');
  const draft = document.createElement('a');
  draft.href = 'mailto:muhammadmoizuddinrafay@gmail.com?subject=' + encodeURIComponent('Wazuh enquiry: ' + value('service-choice')) + '&body=' + encodeURIComponent(body);
  draft.textContent = 'Open your email draft';
  draft.className = 'link';
  const status = document.getElementById('enquiry-status');
  status.replaceChildren('Your brief is ready. ', draft, ' and review it before sending.');
});
