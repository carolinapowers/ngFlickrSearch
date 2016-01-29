(function () {
    'use strict';

    angular
        .module('flickr')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $http) {

        $scope.search = function (keyword) {

            var search_tag = $scope.searchTag;

            var url = 'https://api.flickr.com/services/rest';

            var params = {
                method: 'flickr.photos.search',
                api_key: 'aff9f512a10767918225223fc710e45d',
                tags: search_tag,
                format: 'json',
                nojsoncallback: 1
            }

            $http({
                    url: url,
                    method: 'GET',
                    params: params
                })
                .then(function (response) {
                    $scope.pictures = response.data.photos.photo;
                    console.log(response.data.photos.photo[0]);
                });
        }
    }
})();