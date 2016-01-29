angular
    .module('BookingApp.bkModels')
    .factory('FlightBookingModel', function(BookingModel) {
        function FlightBookingModel() {
            BookingModel.call(this);

            this.from = '';
            this.to = '';

            this.toString = (function (base) {
                return function () {
                    return base() + ', ' + this.from + ' ✈ ' + this.to;
                };
            })(this.toString.bind(this));
        }

        return FlightBookingModel;
    });
