angular
    .module('BookingApp.bkModels')
    .factory('CarBookingModel', function(BookingModel) {
        function CarBookingModel() {
            BookingModel.call(this);

            this.type = 'economy';
            this.location = '';

            this.toString = (function (base) {
                return function () {
                    return base() + ', ' + this.location + ' 🚗 ' + this.type;
                };
            })(this.toString.bind(this));
        }

        return CarBookingModel;
    });
