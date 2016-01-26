angular
    .module('BookingApp.directives', ['ui.bootstrap'])
    .directive('bkDatepicker', function () {
        return {
            scope: {
                model: '=',
                title: '@'
            },
            templateUrl: 'directives/datepicker/datepicker.html'
        };
    });
