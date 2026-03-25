const MOTD_KEY = 'sychonet_motd';
const MOTD_TS_KEY = 'sychonet_motd_ts';
const DAY_MS = 86400000;
const MODEM_DELAY = 350;

const el = document.getElementById('motd')!;
const msgLines = document.querySelectorAll('.modem-line:not(#motd)');

function revealAll() {
  el.classList.add('visible');
  msgLines.forEach((line, i) => {
    setTimeout(() => line.classList.add('visible'), MODEM_DELAY * (i + 1));
  });
}

function display(quote: string) {
  el.textContent = quote;
  revealAll();
}

const cached = localStorage.getItem(MOTD_KEY);
const cachedTs = Number(localStorage.getItem(MOTD_TS_KEY) || 0);
const stale = Date.now() - cachedTs > DAY_MS;

if (cached && !stale) {
  display(cached);
} else {
  fetch('/fortunes.txt')
    .then(r => r.text())
    .then(text => {
      const quotes = text.split('\n%\n').map(q => q.trim()).filter(Boolean);
      const pick = quotes[Math.floor(Math.random() * quotes.length)];
      localStorage.setItem(MOTD_KEY, pick);
      localStorage.setItem(MOTD_TS_KEY, String(Date.now()));
      display(pick);
    })
    .catch(() => {
      el.textContent = 'NO CARRIER';
      revealAll();
    });
}
