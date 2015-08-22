(function() {

  'use strict';

  angular
    .module('statusing')
    .controller('StatusController', StatusController);

  function StatusController($rootScope, Status, md5) {

    var vm = this;  

    vm.addStatus = addStatus;
    vm.deleteStatus = deleteStatus;
    vm.md5 = md5;
    vm.statusData = Status;

    function addStatus() {
      // check to see if a status entry exists
      if(vm.statusText) {       
        vm.statusData.$add({

        // if it exists - add the status data object to DB
        // The status object includes the date & timestamp on the server
          date: Firebase.ServerValue.TIMESTAMP,
          text: vm.statusText,
        // The user object passed gets data from $rootScope
          user: {
            username: $rootScope.loggedInUserData.username,
            email: $rootScope.loggedInUserData.email
          }
        });
        // once the status data is sent - clear the status field
        vm.statusText = '';
      }
    }
      
    function deleteStatus(status) {

      // Remove the status that was passed in
      // from the views
      vm.statusData.$remove(status);
    }
  }

})();