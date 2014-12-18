(function () {
    'use strict';

    angular
        .module('app')
        .controller('sessions', ['common', sessions]);

    sessions.$inject = ['$location']; 

    function sessions($location, common) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'sessions';

        activate();

        function activate() { }
    }
})();
