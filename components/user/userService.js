// components/user/userService.js

(function() {

  'use strict';

  angular
    .module('statusApp')
    .factory('User', UserService);

  function UserService($firebaseObject) {

    function newUserRef(user) {
      var ref = new Firebase("https://blazing-torch-2984.firebaseio.com//users/" + user.uid);
      return $firebaseObject(ref);
    }

    function getUserData(user) {
      var ref = new Firebase("https://blazing-torch-2984.firebaseio.com//users/" + user);
      return $firebaseObject(ref);
    }

    function getLoggedInUser() {
      var user = localStorage.getItem('firebase:session::statusapp');
      if(user) {
        return JSON.parse(user);
      }
    }

    return {
      newUserRef: newUserRef,
      getUserData: getUserData,
      getLoggedInUser: getLoggedInUser
    }

  }

})();