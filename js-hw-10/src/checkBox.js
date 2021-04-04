const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const check = document.querySelector('#theme-switch-toggle');

check.addEventListener('change', function(event) {
  console.log('checked ' + this.checked);
  if (this.checked) {
    document.body.classList = Theme.DARK;
    localStorage.setItem('Theme', 'DARK');
  } else {
    document.body.classList = Theme.LIGHT;
    localStorage.setItem('Theme', 'LIGHT');
  }
});

window.addEventListener('load', function(event) {
  const theme = localStorage.getItem('Theme');
  if (theme === 'DARK') {
    document.body.classList = Theme.DARK;
    check.checked = true;
  } else {
    document.body.classList = Theme.LIGHT;
    check.checked = false;
  }
});
