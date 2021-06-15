import FavoriteRestaurantIdb from '../../data/favorit-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="content">
      <h2 class="section-heading" id="explore-restauran">Favorit Restaurant</h2>
      <div class="container">
          <div class="daftar-menu" id="menu-item">

          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restauranContainer = document.querySelector('#menu-item');
    restaurant.forEach((restauran) => {
      restauranContainer.innerHTML += createRestaurantItemTemplate(restauran);
    });
  },
};

export default Like;
