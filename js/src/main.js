(function() {

  'use strict';

  /**
   * shop
   * 
   * @description The HTML element to output our data into.
   * @type {HTMLElement}
   */
  var shop = document.querySelector('#shop');

  /**
   * data
   * 
   * @description A dummy sample set of data, likely generated from some
   *   database request.
   * @type {Array}
   */
  var data = [
    {
      title: "Dope Hat",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur similique ullam natus ut debitis praesentium.",
      rating: 3
    },
    {
      title: "Hot Top",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur similique ullam natus ut debitis praesentium.",
      rating: 2
    },
    {
      title: "Fresh Kicks",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur similique ullam natus ut debitis praesentium.",
      rating: null
    }
  ];

  /**
   * init
   *
   * @description Initialize the rendering of the dataset. Returns nothing.
   * @param {Array} data The data set
   */
  var init = function(data) {
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      initRating(buildElement(item), item);
    }
  };

  /**
   * buildElement
   *
   * @description Builds an HTML element and appends it to the shop container.
   * @param {Object} item An entry from the data set
   * @return {HTMLElement} el The built and appended HTML element
   */
  var buildElement = function(item) {
    var el = document.createElement('div');

    var html = '<div class="c-shop-item__img"></div>' +
      '<div class="c-shop-item__details">' +
        '<h3 class="c-shop-item__title">' + item.title + '</h3>' +
        '<p class="c-shop-item__description">' + item.description + '</p>' +
        '<ul class="c-rating"></ul>' +
      '</div>';

    el.classList.add('c-shop-item');
    el.innerHTML = html;
    shop.appendChild(el);

    return el;
  };

  /**
   * initRating
   *
   * @description Initializes the rating widget inside the passed in element.
   *   Returns nothing.
   * @param {HTMLElement} el The HTML element that corresponds to the item
   * @param {Object} item The item whose data was used in el
   */
  var initRating = function(el, item) {
    var ratingElement = el.querySelector('.c-rating');

    var rating = item.rating || 0;
    
    var options = {
      starElement: 'li',
      starClass: 'c-rating__item',
      maxRating: 5
    };
    
    var callback = function(rating) {
      alert('Changed to a ' + rating + ' star rating!');
    };

    var ratingInstance = new Rating(ratingElement, rating, options, callback);
  };

  /**
   * Initializes stuff.
   */
  init(data);

})();