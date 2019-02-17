var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append(`${item}`);
})('Creative Minds in Art!');

fill;
