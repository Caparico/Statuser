(function() {
  'use strict';

  angular
    .module('statusing')
    .factory('Auth', AuthService);

  function AuthService($firebaseAuth) {
    var ref = new Firebase("https://statusing.firebaseio.com");
    return $firebaseAuth(ref);
  }

})();