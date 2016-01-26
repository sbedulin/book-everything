angular
    .module('BookingApp', ['ngSanitize', 'ui.bootstrap', 'ui.router', 'BookingApp.bkDirectives'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('flights', {
                url: '/flights',
                templateUrl: 'templates/flights.html'
            })
            .state('hotels', {
                url: '/hotels',
                templateUrl: 'templates/hotels.html'
            })
            .state('cars', {
                url: '/cars',
                templateUrl: 'templates/cars.html'
            });
    })
    .controller('BookingCtrl', function ($scope, $state) {
        var vm = this;

        vm.tabs = {
            flights: { title: 'Flights' },
            hotels:  { title: 'Hotels' },
            cars:    { title: 'Cars' }
        };

        vm.select = function (tabName) {
            var stateName = tabName.toLowerCase();
            $state.go(stateName);
        };

        vm.history = [];
        vm.search = function () {
            vm.history.push(vm.bookingModel.toString());
        };
        vm.removeFromHistory = function (i) {
            vm.history.splice(i, 1);
        };

        var initModel = (function () {
            function BookingModel() {
                this.startDate = new Date();
                this.endDate = new Date();

                this.toString = function () {
                    return moment(this.startDate).format('MMMM DD') +
                        ' - ' +
                        moment(this.endDate).format('MMMM DD');
                };
            }

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

            return function (state) {
                switch (state) {
                    case 'hotels':
                        vm.bookingModel = new HotelBookingModel();
                        break;
                    case 'cars':
                        vm.bookingModel = new CarBookingModel();
                        break;
                    case 'flights':
                        vm.bookingModel = new FlightBookingModel();
                        break;
                    default:
                        vm.bookingModel = new BookingModel();
                }
            };
        })();

        //TODO: refactor, smells a bit
        $scope.$watch(function () {
            return $state.current.name;
        }, function (state) {
            if(!state) {
                return;
            }

            vm.tabs[state].isActive = true;
            vm.clear = initModel.bind(null, state);

            initModel(state);
        });
    });
