import RestaurantApi from '../../data/restaurant-api';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <self-hero></self-hero>
    <div class="container">
      <section class="content">
        <h2 class="section-heading" id="explore-restauran">Explore Restaurant</h2>
        <div class="container">
            <div class="daftar-menu" id="menu-item">

            </div>
        </div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.listRestaurant();
    const restaurantsContainer = document.querySelector('#menu-item');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
