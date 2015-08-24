//Turns object into array so that it can be filtered. angular.filter does not work on objects of objects
(function(){
  'use strict';

  angular
    .module('app.load')
    .filter('array', itemFilter);

  function itemFilter(){

    return function(data) {
      var filtered = [];
      angular.forEach(data, function(item) {
        filtered.push(item);
      });
     return filtered;
    }
  }
})();
