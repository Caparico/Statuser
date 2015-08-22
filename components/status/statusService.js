(function() {

  'use strict';

  angular
    .module('statusing')
    .factory('Status', StatusService);

  function StatusService($firebaseArray) {
    var ref = new Firebase("https://statusing.firebaseio.com/status");
    return $firebaseArray(ref);
  }

})();