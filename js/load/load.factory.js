(function(){
  'use strict';
  angular
    .module('app.load')
    .factory('httpResponse', loadData);

  function loadData($http){
    //Grab data that was loaded from Riot API
    var httpResponse = {
      getData: function(){
        var data = $http.get("items.php")
          .then(function(response) {
              return response.data;
          });
          return data;
      }
    }
    return httpResponse;
  }

})();
