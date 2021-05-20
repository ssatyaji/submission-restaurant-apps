import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<article class="menu-item__detail">
<figure class="card__detail">
  <div class="image-holder__detail">
      <img class="item-thumbnail__detail" src="${restaurant.pictureId ? CONFIG.BASE_URL_IMAGE + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" style="width:100%;">
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
  <div class="menu-testimonial__item">
  <div class="container">

  <div class="heading white-heading">
      Testimonial
  </div>
  <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
    
      <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
              <div class="testimonial4_slide">
                  <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <h4>Client 1</h4>
              </div>
          </div>
      </div>
      <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#testimonial4" data-slide="next">
          <span class="carousel-control-next-icon"></span>
      </a>
  </div>
</div>
  </div>
  <p class="item-menus__reviews">Customer Review: ${restaurant.customerReviews.map(({ name, review, date }) => [name, review, date])}</p>
</figure>
</article>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="menu-item">
  <figure class="card">
    <div class="image-holder">
        <img class="item-thumbnail" src="${restaurant.pictureId ? CONFIG.BASE_URL_IMAGE + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" style="width:100%;">
        <span>Kota: ${restaurant.city}</span>
    </div>
    <div class="item-content">
        <p class="item-rating">Rating: ⭐️ ${restaurant.rating}</p> 
        <h4><a href="${`/#/detail/${restaurant.id}`}"> ${restaurant.name}</a></h4>
        <p class="item-description">${restaurant.description}</p>
    </div>
  </figure>
  </article>`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
