angular
    .module('BookingApp.bkModels')
    .factory('HotelBookingModel', function(BookingModel) {
        function HotelBookingModel() {
            BookingModel.call(this);

            this.rating = '3';
            this.location = '';

            this.toString = (function (base) {
                return function () {
                    return base() + ', ' +
                        this.location + ', ' +
                        Array(Number(this.rating) + 1).join('★');
                };
            })(this.toString.bind(this));
        }

        return HotelBookingModel;
    });
