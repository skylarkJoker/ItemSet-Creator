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
      type: "custom",
      map:"",
      mode: "any",
      priority: true,
      sortrank: 0,
      blocks: []
    }

    itemSet.getTitle = getTitle;
    itemSet.getMap = getMap;
    itemSet.getMode = getMode;
    itemSet.getPriority = getPriority;
    itemSet.getSortRank = getSortRank;
    itemSet.getBlocks = getBlocks;
    itemSet.getBlock = getBlock;

    itemSet.setTitle = setTitle;
    itemSet.setType = setType;
    itemSet.setMap = setMap;
    itemSet.setMode = setMode;
    itemSet.setPriority = setPriority;
    itemSet.setSortRank = setSortRank;

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

  var getBlock = function(index){
    return this.blocks[index];
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

    var findItem = function(set, type){
      for(var i = 0; i < set.length; i++){
        if(set[i].type == type){
          return i;
        }
      }
      return -1;
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
    var itemSet;

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
        var item = '<li id="'+ key +'"><img src="http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/'+key+'.png "></li>';
         $('.item-list').append(item);
         $( "img" ).error(function() {
           $( this ).hide();
         });
      }
    }

    loadContent(function(response){
      data = response.data;
      setItemList();
    });

    //Events

    $('.item-list').sortable({
      connectWith: ".dragNdrop",
      helper: function (event, li) {
          this.copyHelper = li.clone().insertAfter(li);
          $(this).data('copied', false);
          return li.clone();
      },
      stop: function () {
          var copied = $(this).data('copied');
          if (!copied) {
              this.copyHelper.remove();
          }
          this.copyHelper = null;
      }
    }).disableSelection();

    $('.item-set').click(function(){
      $('.block').sortable({
        connectWith: ".dragNdrop",
        receive: function (event, ui) {
          ui.sender.data('copied', true);
        }
      }).disableSelection();
    });

    //Create new Item Set
    $('#create-item-set').click(function(){
      itemSet = ItemSet();
      $('#item-set-name').append('New Item Set')
      $('#item-set-name').show();
      var map = $('input[name=map]:checked', '.item-set-option').val();

      itemSet.setTitle($('#item-set-name').text());
      itemSet.setMap(map);

      $(this).hide();

      //enable the adding of blocks
      $('#add-block').prop('disabled', false);
    });

    //change Item Set name
    $('#item-set-name').dblclick(function(){
      $(this).attr('contenteditable', 'true');
    });

    $('#item-set-name').focusout(function(){
      $(this).attr('contenteditable', 'false');
    });

    //add block
    var counter = 0;
    $('#add-block').click(function(){
      var blockName = 'New Block ' + counter++;
      var newBlock = '<li><p class="block-name">'+ blockName +'</p><ul class="block dragNdrop"></ul></li>'
      $('.placeholder').before(newBlock);

      var block = Block();
      block.setType(blockName);
      addItem(itemSet.getBlocks(), block);
    });

    //change Block name
    var old;
    $('.item-set').on('dblclick', 'p.block-name', function(){
      old = $(this).text();
      $(this).attr('contenteditable', 'true');
      $(this).focus();
    });

    $('.item-set').on('focusout', 'p.block-name', function(){
      $(this).attr('contenteditable', 'false');
      var newBlockName = $(this).text();
      var index = findItem(itemSet.getBlocks(), old);

      if(index !== -1){
        itemSet.getBlock(index).setType(newBlockName);
      }
      console.log(itemSet);
    });

});
