import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<article class="menu-item__detail">
<figure class="card__detail">
  <div class="image-holder__detail">
      <img class="item-thumbnail__detail" src="${restaurant.pictureId ? CONFIG.BASE_URL_IMAGE + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossOrigin="anonymous" style="width:100%;">
      <span>Kota : ${restaurant.city}</span>
  </div>
  <div class="item-content__detail">
    <div class="item-content__header">
      <h3>${restaurant.name}</h3>
    </div>
    <div class="item-meta__detail">
      <p class="item-rating__detail">⭐️ ${restaurant.rating}</p> 
      <p class="item-menus__detail">${restaurant.categories.map(({ name }) => [name])}</p>
    </div>
    <p class="item-address__detail">Alamat : ${restaurant.address}</p>
    <p class="item-description__detail">${restaurant.description}</p>
  </div>
  <div class="item-content__header">
    <h3>OUR MENU</h3>
  </div>
  <div class="item-menus__wrap">
    <ul class="item-menus__foods">
      <h4>FOODS</h4>
      ${restaurant.menus.foods.map((name) => `
          <li>${name.name}</li>
        `).join('')}
    </ul>
    <ul class="item-menus__drinks">
      <h4>DRINKS</h4>
      ${restaurant.menus.drinks.map((name) => `
          <li>${name.name}</li>
      `).join('')}
    </ul>
  </div>
  <div class="item-content__header">
    <h3>People Say About Us!</h3>
  </div>
  <div class="item-content__detail">

    <div class="item-review__detail">

        ${restaurant.customerReviews.map(({ name, review, date }) => `
        <div class="item-review__slides">
          <i class="fa fa-user-circle "></i>
          <p>${review}</p>
          <h3>${name}</h3>
          <span>${date}<span>
        </div>`).join('')}

    </div>

  <a href="" id="loadMore">Load More</a>
  </div>
</figure>
</article>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="menu-item">
  <figure class="card">
    <div class="image-holder">
        <img class="item-thumbnail" src="${restaurant.pictureId ? CONFIG.BASE_URL_IMAGE + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossOrigin="anonymous" style="width:100%;">
        <span>Kota: ${restaurant.city}</span>
    </div>
    <div class="item-content">
        <p class="item-rating">Rating: ⭐️ ${restaurant.rating}</p> 
        <h4><a href="${`/#/detail/${restaurant.id}`}"> ${restaurant.name}</a></h4>
        <p class="item-description">${restaurant.description}</p>
    </div>
  </figure>
  </article>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
