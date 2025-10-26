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

});


/*
$(document).ready(function() {
      $("#home").click(function() {
        $( '.avaleht' ).show();
        $( '#keeled' ).show();
        $( '#pealkiri' ).show();
        $( '#otsingutulemused' ).hide();
        $( '.item' ).hide();
        window.location.hash = $(this).attr('href');//Puhastame urli 

      });
      $("#inglise-link").click(function() {
        $.get('html/index-inglise.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
      $("#eesti-link").click(function() {
        $.get('html/index-eesti.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
      $("#saksa-link").click(function() {
        $.get('html/index-saksa.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
      $("#soome-link").click(function() {
        $.get('html/index-soome.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
      $("#vene-link").click(function() {
        $.get('html/index-vene.html', function(data) {
          $("#ava").html(data);
          // $("#ava").append(data);
        });
      });
  });
  */