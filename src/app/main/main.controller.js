(function () {
    'use strict';

    angular
        .module('flickr')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $http) {

        $scope.message = false;
        $scope.resultMessage = false;

        $scope.resultMessageFunc = function () {
            $scope.resultMessage = true;
        }

        $scope.hideMessage = function () {
            $scope.searchingMessage = true;
        }

        $scope.search = function (keyword) {


            var search_tag = $scope.searchTag;

            $scope.cachedSearchTag = search_tag;


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
                        $scope.searchingMessage = false;
                    },
                    function (error) {
                        $scope.error = "Ooops! Something went wrong!";
                    });
        }
    }
})();