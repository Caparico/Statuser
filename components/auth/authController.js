(function() {
  'use strict';

  angular
    .module('statusing')
    .controller('AuthController', AuthController);

  function AuthController(Auth, User, $state) {

    var vm = this;

    vm.createUser = createUser;
    vm.login = login;
    vm.loggedInUser;

    function createUser() {

      // If there is already a user logged in,
      // log them out before proceeding
      Auth.$unauth();

      Auth.$createUser({
        email: vm.email,
        password: vm.password
      }).then(function(userData) {
        saveUser(userData);
        login();
      }).catch(function(error) {
        vm.error = error;
      });
    }

    function saveUser(userData) {

      var user = User.newUserRef(userData);
      user.username = vm.username;
      user.email = vm.email;
    
// If the user data was saved successfully empty 
// fields & redirect to statuses page, else display an error
      user.$save().then(function(success) {
        vm.username = null;
        vm.email = null;
        vm.password = null; 
        $state.go('status');
      }, function(error) {
        console.log("there was an error! " + error);
      });
    }

    function login() {

      Auth.$authWithPassword({
        email: vm.email,
        password: vm.password
      }).then(function(data) {
        vm.email = null;
        vm.password = null;
        $state.go('status');
      }).catch(function(error) {
        console.log(error);
      });
    }
    function logout() {        
        Auth.$unauth();
        $state.go('auth');
    }
  }

})();