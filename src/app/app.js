angular
    .module('BookingApp', [
        'ngSanitize',
        'ui.router',
        'BookingApp.bkDirectives',
        'BookingApp.bkModels'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('flights', { url: '/flights' })
            .state('hotels' , { url: '/hotels'  })
            .state('cars'   , { url: '/cars'    });
    })
    .controller('BookingAppCtrl', function ($rootScope, $state, FlightBookingModel, HotelBookingModel, CarBookingModel) {
        var vm = this;
        var activeTab;

        vm.tabs = {
            flights: { title: 'Flights', Model: FlightBookingModel },
            hotels:  { title: 'Hotels' , Model: HotelBookingModel  },
            cars:    { title: 'Cars'   , Model: CarBookingModel    }
        };

        // navigate to a state ONLY IF user initiated an action
        vm.tabSelectedByUser = function (tab) {
            // prevent state changes on active tab
            if(tab.isActive) {
                return;
            }

            var stateName = tab.title.toLowerCase();
            $state.go(stateName);
        };

        vm.history = [];
        vm.search = function () {
            vm.history.push(vm.bookingModel.toString());
        };
        vm.removeFromHistory = function (i) {
            vm.history.splice(i, 1);
        };

        vm.clear = function () {
            vm.bookingModel = new activeTab.Model();
        };

        $rootScope.$on('$stateChangeStart', function(event, toState){
            var tab = vm.tabs[toState.name];
            tab.isActive = true;
            vm.bookingModel = new tab.Model();

            activeTab = tab;
        });
    });;
