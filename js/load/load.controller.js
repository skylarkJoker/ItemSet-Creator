(function(){
  'use strict';

  angular
    .module('app.load')
    .controller('loadItemCtrl', populateList);

  function populateList(httpResponse){
    var viewModel = this;
      httpResponse.getData().then(function(d){
        viewModel.data = d.data;
      });
  }
})();
