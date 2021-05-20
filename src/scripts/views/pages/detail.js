import RestaurantApi from '../../data/restaurant-api';
import urlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <section class="content">
    <h2 class="section-heading" id="explore-restauran">Detail Restaurant</h2>
    <div class="container">
        <div class="daftar-menu__detail" id="menu-item__detail">

        </div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restauran = await RestaurantApi.detailRestaurant(url.id);
    const restauranContainer = document.querySelector('#menu-item__detail');
    restauranContainer.innerHTML = createRestaurantDetailTemplate(restauran);
  },
};

export default Detail;
