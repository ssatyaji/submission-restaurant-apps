import $ from "jquery";

const burger = document.querySelector('nav a');
const nav = document.querySelector('.nav');
const button = document.querySelector('.burger span');

function toggleNav() {
  button.classList.toggle('fa-times');
  nav.classList.toggle('nav-active');
}

burger.addEventListener('click', function() {
  toggleNav();
});

function listAllMenu(){
$.getJSON("data/DATA.json", function (data) {
  let menu = data.restaurants;
  $.each(menu, function(i, data) {
    $('#menu-item').append(`
      <article class="menu-item">
        <figure class="card">
          <div class="image-holder">
              <img class="item-thumbnail" src="${data.pictureId}" alt="${data.name}" style="width:100%;">
              <span>Kota: ${data.city}</span>
          </div>
          <div class="item-content">
              <p class="item-rating">Rating: ${data.rating}</p> 
              <h4>${data.name}</h4>
              <p class="item-description">${data.description}</p>
          </div>
        </figure>
      </article>
      `);
    });
  });
}

listAllMenu();
