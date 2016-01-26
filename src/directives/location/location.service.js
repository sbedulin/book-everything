angular
    .module('BookingApp.bkDirectives')
    .factory('Location', function ($http) {
        return {
            getLocation: function(val) {
                return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                    params: {
                        address: val,
                        sensor: false
                    }
                }).then(function(response){
                    return response.data.results.map(function(item){
                        return item.formatted_address;
                    });
                });
            }
        };
    });
