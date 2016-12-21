(function(){
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService){
  var signupCtrl = this;
  
  //Sign up Function
  signupCtrl.submit = function(){
    MenuService.getFavoriteDish(signupCtrl.user.favoriteDish)
      .then(function(response){
        signupCtrl.user.favoriteDish = response.data;
        MenuService.setuserProfile(signupCtrl.user);
        signupCtrl.success = true;
        signupCtrl.error = false;
      },
        function (response){
          signupCtrl.success = false;
          signupCtrl.error = true;
        });
  };
}

})();