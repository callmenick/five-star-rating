# Five Star Rating

This is a five star rating component built with JavaScript and CSS. It supports hovering over stars and updating the visuals to match, clicking on stars to update the rating, executing a callback after clicking/setting the star rating, and manually setting and getting the star rating. You can use as many of the components on a page as  you want.

## Live Demo

To see it in action, check out the [live demo here.](http://callmenick.com/_development/five-star-rating/)

## Browser Support

This component has been tested in the following browsers:

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/callmenick/browser-logos/master/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/callmenick/browser-logos/master/safari/safari_48x48.png) | ![IE](https://raw.githubusercontent.com/callmenick/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.githubusercontent.com/callmenick/browser-logos/master/opera/opera_48x48.png) |
|:-:|:-:|:-:|:-:|:-:|
| Chrome 46.0+ | Firefox 40.0+ | Safari 9.0+ | IE ? | Opera 33.0+ |

If anyone wants to run any tests on older browser versions, please do so and reach out to me!

## Installation

There are two ways to install the component:

### Bower

Install it as a bower component: 

```bash
bower install five-star-rating --save
```

### Direct Download

Download the necessary files:

* JavaScript from `js/src/rating.js` or `js/dist/rating.min.js`
* CSS from `css/rating.css` or `css/rating.min.css`
* Image sprite from `img/stars.svg`

Place them in your directory and link to them correctly.

## Usage

The following steps will allow you to easily integrate and use this component.

### Link The Correct Files

Add links to the correct files in your html:

```html
<!DOCTYPE html>
<html lang="en">
<head>

  ...
  
  <link rel="stylesheet" href="PATH/TO/rating.min.css">
  
  ...
  
</head>
<body>

...

<div id="#el"></div>

...

<script src="PATH/TO/rating.min.js"></script>
<script>
  // implementation here...
</script>
</body>
</html>
```

Include the CSS in the `head`, and the link to the JavaScript before the closing `body` tag. Include an element that you'd like to add the rating widget to. In this case, we'll use `#el`.

### Make An Instance Of The Rating Widget

To make a rating instance, target an element and set it up like this:

```javascript
// target element
var el = document.querySelector('#el');

// current rating, or initial rating
var currentRating = 0;

// max rating, i.e. number of stars you want
var maxRating= 5;

// callback to run after setting the rating
var callback = function(rating) { alert(rating); };

// rating instance
var myRating = rating(el, currentRating, maxRating, callback);
```

The `rating` instance takes the following 4 arguments:

1. `el` - The element to which we want to append the rating to.
2. `currentRating` - The current rating in question. This is important, because it's likely you'll be pulling your data from a database. In that case, you can set up the rating with a default value by passing in the correct `currentRating` value.
3. `maxRating` - The maximum number of stars to be included in the widget.
4. `callback` - The callback function to run after the rating gets set. It's very likely that you'll want to do some sort of persistent storage update after you set the rating, and the callback allows you to do that. The callback accepts one argument, `rating`, which is the updated rating value.

### Public Methods

After instantiation, there are two public methods available:

1. `setRating` - sets the rating of the instance. Takes two parameters, `value` which is the value you'd like to assign to the rating instance, and `doCallback` which is a boolean to determine whether to run the callback or not. It's extremely likely that if you call `setRating` manually, you will need to run the callback. As a result, if no `doCallback` argument is supplied, it defaults to `true`. 
2. `getRating` - this method gets and returns the current rating of the instance. It takes no arguments.

Example usage:

```javascript
// sets rating and runs callback
myRating.setRating(3);

// sets rating and runs callback
myRating.setRating(3, true);

// sets rating and doesn't run callback
myRating.setRating(3, false);

// gets the rating
myRating.getRating();
```

## Author

Nick Salloum <nick@callmenick.com>

## License

Copyright &copy; 2015, Nick Salloum

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.