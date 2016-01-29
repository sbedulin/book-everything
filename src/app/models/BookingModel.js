angular
    .module('BookingApp.bkModels')
    .factory('BookingModel', function() {
        function formatDate(date) {
            return moment(date).format('MMMM DD');
        }

        function BookingModel() {
            this.startDate = new Date();
            this.endDate = new Date();

            this.toString = function () {
                return formatDate(this.startDate) + ' - ' + formatDate(this.endDate);
            };
        }

        return BookingModel;
    });
