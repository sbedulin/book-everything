angular
    .module('BookingApp.bkDirectives')
    .directive('bkLocation', function () {
        return {
            scope: {
                model: '=',
                title: '@'
            },
            controller: function ($scope, Location) {
                $scope.getLocation = Location.getLocation;
            },
            templateUrl: 'directives/location/location.html'
        };
    });
