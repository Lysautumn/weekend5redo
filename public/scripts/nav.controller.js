app.controller('NavController', NavController);

function NavController(favorite, $location) {
  var self = this;
  self.mirror = favorite;

  console.log('NavController loaded');
  if(favorite.favoritedGifs().length === 0) {
    favorite.getFavoritedGifs();
  }
}
