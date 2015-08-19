(function() {

  'use strict';

  angular
    .module('statusApp')
    .controller('StatusController', StatusController);

  function StatusController($rootScope, Status, md5) {

    var vm = this;  

    vm.addStatus = addStatus;
    vm.md5 = md5;
    vm.statusData = Status;

    function addStatus() {
      if(vm.statusText) {       
        vm.statusData.$add({

          // Add the status data object to Firebase
          date: Firebase.ServerValue.TIMESTAMP,
          text: vm.statusText,
          user: {
            username: $rootScope.loggedInUserData.username,
            email: $rootScope.loggedInUserData.email
          }
        });
        // once the status data is sent - clear the status field
        vm.statusText = '';
      }
    }
  }

})();