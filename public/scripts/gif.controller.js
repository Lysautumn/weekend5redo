app.controller('GifController', GifContoller);

function GifContoller(giphy, favorite) {
  var self = this;
  self.gifs = [];
  console.log('GifController loaded');
  getRandom();

  // Bound Functions
  self.displayRandomGif = function() {
    getRandom();
  };

  self.searchAndDisplayGifs = function() {
    giphy.searchGifByKeyword(self.keywords).then(function(response) {
      console.log('Response', response);
      self.gifs = response.data.data;
    },
    function(response) {
      console.log('Error retrieving gifs by keyword');
    });
  };

  self.favoriteGif = function(url, comment) {
    var gif = {
      url: url,
      comment: comment,
    };
    favorite.addGifToFavorites(gif).then(function() {
      console.log('That worked!');
    });
  };

  // Private functions
  function getRandom() {
    giphy.getRandomGif().then(function(response) {
      self.gifs = [];
      response.data.data.images = {
        original: {
          url: response.data.data.image_url,
        },
      };
      self.gifs.push(response.data.data);
    });
  }
}
