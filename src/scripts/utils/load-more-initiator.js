import $ from 'jquery';

const LoadMore = {
  init({ button }) {
    $('.item-review__slides').slice(0, 3).show();
    $(button).on('click', (e) => {
      e.preventDefault();
      $('.item-review__slides:hidden').slice(0, 3).slideDown();
      if ($('.item-review__slides:hidden').length === 0) {
        $('#load').fadeOut('slow');
      }
    });
  },
};

export default LoadMore;
