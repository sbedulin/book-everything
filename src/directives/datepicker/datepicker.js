angular
    .module('BookingApp.bkDirectives')
    .directive('bkDatepicker', function () {
        return {
            scope: {
                model: '=',
                title: '@'
            },
            templateUrl: 'directives/datepicker/datepicker.html'
        };
    });
