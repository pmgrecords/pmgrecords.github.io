(function() {
    angular.module('PMG Records').controller('VideosController', VideosController);

    VideosController.$inject = ['videosService'];

    function VideosController(videosService) {
        var vm = this;
        vm.add = add;

        videosService.getVideos()
            .then(function(videos) {
                vm.videos = videos;
            });

        function add() {
            vm.videos.unshift({})
        }
    }
})();