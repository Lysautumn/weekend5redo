app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'GifController as gifCtrl',
  }).when('/favorites', {
    templateUrl: 'views/favorite.html',
    controller: 'FavoriteController as faveCtrl',
  }).otherwise({
    redirectTo: '/home',
  });

  $locationProvider.html5Mode(true);
});
