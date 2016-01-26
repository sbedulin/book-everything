angular
    .module('BookingApp.bkDirectives')
    .directive('bkDatepicker', function () {
        return {
            scope: {
                model: '=',
                title: '@'
            },
            templateUrl: 'app/components/datepicker/datepicker.html'
        };
    });
