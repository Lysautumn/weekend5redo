app.service('giphy', GiphyService);

function GiphyService($http) {
  var API = 'http://api.giphy.com/v1/gifs/';
  var API_KEY = 'dc6zaTOxFJmzC';

  return {
    getRandomGif: function() {
      return $http.get(API + 'random?api_key=' + API_KEY);
    },

    searchGifByKeyword: function(keywords) {
      var sepVals = keywords.replace(' ', '+');
      return $http.get(API + 'search?q=' + sepVals + '&limit=10&api_key=' + API_KEY);
    },
  };
}
