(function(){
"use strict";

angular.module('public')
.controller('myinfoController', myinfoController);

myinfoController.$inject = ['userInfo'];
function myinfoController(userInfo){
  var myinfoCtrl = this;
  myinfoCtrl.user = userInfo;
}


})();