import RestaurantApi from '../../data/restaurant-api';
import urlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import LoadMore from '../../utils/load-more-initiator';
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
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    const restauran = await RestaurantApi.detailRestaurant(url.id);
    const restauranContainer = document.querySelector('#menu-item__detail');
    restauranContainer.innerHTML = createRestaurantDetailTemplate(restauran);

    LoadMore.init({
      button: document.querySelector('#loadMore'),
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restauran: {
        id: restauran.id,
        name: restauran.name,
        description: restauran.description,
        pictureId: restauran.pictureId,
        city: restauran.city,
        rating: restauran.rating,
      },
    });
  },
};

export default Detail;
