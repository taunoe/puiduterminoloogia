/*
  Tauno Erik
  26.10.2025
*/
document.addEventListener('DOMContentLoaded', () => {
  const homeButton = document.querySelector('#home');
  const ava = document.querySelector('#ava');

  homeButton.addEventListener('click', (e) => {
    document.querySelectorAll('.avaleht, #keeled').forEach(el => el.style.display = 'block');
    document.querySelectorAll('#otsingutulemused, .item').forEach(el => el.style.display = 'none');
    window.location.hash = homeButton.getAttribute('href');
  });

  const languages = ['inglise', 'eesti', 'saksa', 'soome', 'vene'];

  languages.forEach(lang => {
    document.querySelector(`#${lang}-link`)?.addEventListener('click', () => {
      fetch(`html/index-${lang}.html`)
        .then(res => res.text())
        .then(html => ava.innerHTML = html)
        .catch(console.error);
    });
  });


  const btn_menu = document.querySelector('.menu-icon');
  const keele_panel = document.querySelector('.keele-panel');
  const menu_links = document.querySelectorAll('.btn');
  // Näita menüüd
  btn_menu.addEventListener('click', () => {
    keele_panel.classList.toggle('active');
  });
  // Väljaspool menüüd klikkides
  document.addEventListener('click', (event) => {
    if (!keele_panel.contains(event.target) && !btn_menu.contains(event.target)) {
        keele_panel.classList.remove('active');
    }
  });
  // Menüü lingile klikides
  menu_links.forEach((link) => {
    link.addEventListener('click', () => {
        keele_panel.classList.remove('active');
    });
  });

  // Keri lehekülje ülesse
  ava.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return; // Clicked something else (not a link)
    //console.log(document.scrollingElement);
    document.scrollingElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  ava.innerHTML = data;
    requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  });
  /////

});
