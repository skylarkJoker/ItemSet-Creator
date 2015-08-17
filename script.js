$(document).ready(function(){
  //Item Class
  var Item = function(){
    var item = {
      id: "",
      count: 0
    }

    item.getID = getID;
    item.setID = setID;
    item.getCount = getCount;
    item.setCount = setCount;

    return item;
  }

  var getID = function(){
    return this.id;
  }

  var setID = function(id){
    this.id = id;
  }

  var getCount = function(){
    return this.id;
  }

  var setCount = function(option){
    if(option == 'increase'){
      this.count++;
    }
    else if (option == 'decrease') {
      this.count--;
    }
  }

  var itemToString = function(){
    var newString = '{\n'
                    +'"id:"'+ this.getID() +',\n'
                    +'"count:"'+this.getCount() + '\n'
                    +'},\n';
    return newString;

  }

  //Block Class
  var Block = function(){
    var block = {
      type: '',
      recMath: false,
      minSummonerLevel: -1,
      maxSummonerLevel: -1,
      showIfSummonerSpell: '',
      hideIfSummonerSpell: '',
      items: []
    }

    block.getType = getType;
    block.getRecMath = getRecMath;
    block.getMinSummonerLevel = getMinSummonerLevel;
    block.getMaxSummonerLevel = getMaxSummonerLevel;
    block.getShowIfSummonerSpell = getShowIfSummonerSpell;
    block.getHideIfSummonerSpell = getHideIfSummonerSpell;

    block.setType = setType;
    block.setRecMath = setRecMath;
    block.setMinSummonerLevel = setMinSummonerLevel;
    block.setMaxSummonerLevel = setMaxSummonerLevel;
    block.setShowIfSummonerSpell = setShowIfSummonerSpell;
    block.setHideIfSummonerSpell = setHideIfSummonerSpell;

    block.arrange = arrange;
    block.blockToString = blockToString;

    return block;
  }

  var getType = function(){
    return this.type;
  }

  var getRecMath = function(){
    return this.recMath;
  }

  var getMinSummonerLevel = function(){
    return this.minSummonerLevel;
  }

  var getMaxSummonerLevel = function(){
    return this.maxSummonerLevel;
  }

  var getShowIfSummonerSpell = function(){
    return this.showIfSummonerSpell;
  }

  var getHideIfSummonerSpell = function(){
    return this.hideIfSummonerSpell;
  }

  var getItems = function(){
    return this.items;
  }

  var setType = function(type){
    this.type = type;
  }

  var setRecMath = function(option){
    this.recMath = option;
  }

  var setMinSummonerLevel = function(level){
    this.minSummonerLevel = level;
  }

  var setMaxSummonerLevel = function(level){
    this.maxSummonerLevel = level;
  }

  var setShowIfSummonerSpell = function(spell){
    this.showIfSummonerSpell = spell;
  }

  var setHideIfSummonerSpell = function(spell){
    this.hideIfSummonerSpell = spell;
  }

  var blockToString = function(){
    var newString =  '{\n'
                    +'"type":' + this.getType() +',\n'
                    +'"recMath":' + this.getRecMath() +',\n'
                    +'"minSummonerLevel":' + this.getMinSummonerLevel() + ',\n'
                    +'"maxSummonerLevel":' + this.getMaxSummonerLevel() + ',\n'
                    +'"showIfSummonerSpell":' + this.getShowIfSummonerSpell() + ',\n'
                    +'"hideIfSummonerSpell":' + this.getHideIfSummonerSpell() + ',\n'
                    + '"items": ['+''+']},\n';
      return newString;
  }

  //ItemSet Class
  var ItemSet = function(){
    var itemSet = {
      title: "",
      type: "",
      map:"",
      mode: "",
      priority: false,
      sortrank: 0,
      blocks: []
    }

    itemSet.getTitle = getTitle;
    itemSet.getMap = getMap;
    itemSet.getMode = getMode;
    itemSet.getPriority = getPriority;
    itemSet.getSortRank = getSortRank;
    itemSet.getBlocks = getBlocks;

    itemSet.setTitle = setTitle;
    itemSet.setMap = setMap;
    itemSet.setMode = setMode;
    itemSet.setPriority = setPriority;
    itemSet.setSortRank = setSortRank;
    itemSet.setBlocks = setBlocks;

    itemSet.itemSetToString = itemSetToString;

    return itemSet;
  }

  var getTitle = function(){
    return this.title;
  }

  var getMap = function(){
    return this.map;
  }

  var getMode = function(){
    return this.mode;
  }

  var getPriority = function(){
    return this.priority;
  }

  var getSortRank = function(){
    return this.sortrank;
  }

  var getBlocks = function(){
    return this.blocks;
  }

  var setTitle = function(title){
    this.title = title;
  }

  var setMap = function(map){
    this.map = map;
  }

  var setMode = function(mode){
    this.mode = mode;
  }

  var setPriority = function(priority){
    this.priority = priority;
  }

  var setSortRank = function(sortrank){
    this.sortrank = sortrank;
  }

  var itemSetToString = function(){
    var newString =  '{\n'
                    +'"title":' + this.getTitle() +',\n'
                    +'"type":' + this.getType() +',\n'
                    +'"map":' + this.getMap() + ',\n'
                    +'"mode":' + this.getMode() + ',\n'
                    +'"priority":' + this.getPriority() + ',\n'
                    +'"sortrank":' + this.getSortRank() + ',\n'
                    + '"blocks": ['+''+']},\n';
      return newString;
  }

  //General Functions
    var addItem = function(set, item){
      set.push(item);
    }

    var removeItem = function(set, id){
      var index = set.indexOf(id);
      set.splice(index, 1);
    }

    var findItem = function(set, id){
      var index = set.indexOf(id);
      return set[index];
    }

    var arrange = function(set, from, to){
      set.splice(to, 0, set.splice(from, 1)[0]);
    }

    var isEmpty = function(){
        if(this.length == 0){
          return true;
        }
        return false;
    }

    //Global Variables
    var data;

    var loadContent = function(callback){

      $.getJSON("code.json", function(json) {
            var code = json.Code

           var xmlhttp = new XMLHttpRequest();
           var url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?api_key=" + code;
          xmlhttp.onreadystatechange = function() {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                  callback(JSON.parse(xmlhttp.responseText));
              }
          }
          xmlhttp.open("GET", url, true);
          xmlhttp.send();

      });
    }



    var setItemList = function(){

      for(key in data){
        var item = '<li id="'+ key +'"><img src="http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/'+key+'.png " onerror="removeImage()"></li>';
         $('#item-list').append(item);
         $( "img" ).error(function() {
           $( this ).hide();
         });
      }
    }

    loadContent(function(response){
      data = response.data;
      setItemList();
    });


});
