(function() {

  'use strict';

  /**
   * Rating
   *
   * @constructor
   * @description Creates a new rating widget.
   * @param {HTMLElement} el The HTML element to build the rating widget on
   * @param {Number} rating The rating passed in from the data
   * @param {Object} options  The options hash
   * @param {Function} callback The callback that gets run after a rating is
   *   updated
   */
  var Rating = function(el, rating, options, callback) {
    this.el = el;
    this.rating = rating;
    this.options = _.extend(this.options, options);
    this.callback = callback || null;
    this.starCollection = [];
    this._init();
  };

  /**
   * Rating.prototype.options
   * 
   * @description The options hash.
   * @type {Object}
   */
  Rating.prototype.options = {
    starElement: 'li',
    starClass: 'c-rating__item',
    maxRating: 5
  };

  /**
   * Rating.prototype._init
   *
   * @description Sets up the rating widget. Returns nothing.
   */
  Rating.prototype._init = function() {
    for (var i = 0; i < this.options.maxRating; i++) {
      var star = document.createElement(this.options.starElement);
      
      star.classList.add(this.options.starClass);
      star.setAttribute('data-index', i);
      if (i < this.rating) { star.classList.add('is-active'); }
      
      this.el.appendChild(star);
      this.starCollection.push(star);
      this._initStarEvents(star);
    }
  };

  /**
   * Rating.prototype._initStarEvents
   *
   * @description Initializes events on stars. Returns nothing.
   * @param {HTMLElement} star The star to catch events on
   */
  Rating.prototype._initStarEvents = function(star) {
    this._starMouseOver(star);
    this._starMouseOut(star);
    this._starClick(star);
  };

  /**
   * Rating.prototype._starMouseOver
   *
   * @description [description]
   * @param {HTMLElement} star The star to catch events on
   */
  Rating.prototype._starMouseOver = function(star) {
    var scope  = this;

    star.addEventListener('mouseover', function(e) {
      _.each(scope.starCollection, function(item, index) {
        if (index <= parseInt(star.getAttribute('data-index'))) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });
    });
  };

  /**
   * Rating.prototype._starMouseOut
   *
   * @description [description]
   * @param {HTMLElement} star The star to catch events on
   */
  Rating.prototype._starMouseOut = function(star) {
    var scope  = this;

    star.addEventListener('mouseout', function(e) {
      if (scope.starCollection.indexOf(e.relatedTarget) === -1) {
        scope.setRating();
      }
    });
  };

  /**
   * Rating.prototype._starClick
   *
   * @description [description]
   * @param {HTMLElement} star The star to catch events on
   */
  Rating.prototype._starClick = function(star) {
    var scope  = this;

    star.addEventListener('click', function(e) {
      e.preventDefault();
      scope.rating = parseInt(star.getAttribute('data-index')) + 1;
      scope.setRating();

      if (scope.callback) {
        scope.callback(scope.getRating());
      }
    });
  };

  /**
   * Rating.prototype.setRating
   *
   * @description [description]
   */
  Rating.prototype.setRating = function() {
    var scope = this;

    _.each(scope.starCollection, function(star, index) {
      if (index < scope.rating) {
        star.classList.add('is-active');
      } else {
        star.classList.remove('is-active');
      }
    });
  };

  /**
   * Rating.prototype.getRating
   *
   * @description [description]
   * @return {[type]}
   */
  Rating.prototype.getRating = function() {
    return this.rating;
  };

  /**
   * window.Rating
   *
   * @description [description]
   * @type {[type]}
   */
  window.Rating = Rating;

})();