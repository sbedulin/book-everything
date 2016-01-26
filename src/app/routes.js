angular
    .module('BookingApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('flights', {
                url: '/flights',
                templateUrl: 'app/templates/flights.html'
            })
            .state('hotels', {
                url: '/hotels',
                templateUrl: 'app/templates/hotels.html'
            })
            .state('cars', {
                url: '/cars',
                templateUrl: 'app/templates/cars.html'
            });
    });
