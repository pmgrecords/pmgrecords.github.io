(function() {
    angular.module('PMG Records').directive('artworkTile', artworkTile);
    
    function artworkTile() {
        return {
            restrict: 'E',
            templateUrl: 'artwork-tile.html',
            scope: {
                imageSrc: '='
            },
            link: function(scope, element) {
                var img = new Image();
                img.src = scope.imageSrc;

                img.onload = function() {
                    scope.width = this.width;
                    scope.height = this.height;
                };

                element[0].onmouseover = function() {
                    element.css('height', scope.height);
                    element.css('width', scope.width);
                }
            }
        }
    }
})();