(function () {
"use strict";

angular.module('public')
.component('favoriteItem', {
  templateUrl: 'src/public/menu-item/favorite-item.html',
  bindings: {
    favoriteItem: '<'
  },
  controller: MenuItemController
});


MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
