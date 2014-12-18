(function () {
    'use strict';

    angular
        .module('app')
        .controller('sessions', sessions);

    sessions.$inject = ['$location']; 

    function sessions($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'sessions';

        activate();

        function activate() { }
    }
})();
