angular
    .module('BookingApp', ['ui.bootstrap', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('flights', {
                url: '/flights',
                template: '<h1>Flights</h1>'
            })
            .state('hotels', {
                url: '/hotels',
                template: '<h1>Hotels</h1>'
            })
            .state('cars', {
                url: '/cars',
                template: '<h1>Cars</h1>'
            });
    })
    .controller('BookingCtrl', function ($scope, $state) {
        $scope.tabs = {
            flights: {
                title: 'Flights'
            },
            hotels: {
                title: 'Hotels'
            },
            cars: {
                title: 'Cars'
            }
        };

        $scope.select = function (tabName) {
            var stateName = tabName.toLowerCase();
            $state.go(stateName);
        };

        //TODO: refactor, smells a bit
        $scope.$watch(function () {
            return $state.current.name;
        }, function (state) {
            if(state) {
                $scope.tabs[state].isActive = true;
            }
        });
    });
