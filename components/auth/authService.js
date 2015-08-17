(function() {
  'use strict';

  angular
    .module('statusApp')
    .factory('Auth', AuthService);

  function AuthService($firebaseAuth) {
    var ref = new Firebase("https://blazing-torch-2984.firebaseio.com/");
    return $firebaseAuth(ref);
  }

})();