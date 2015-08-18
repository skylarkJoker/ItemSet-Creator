$(document).ready(function(){
  //Item Class
  var Item = function(){
    var item = {
      id: "",
      count: 1
    }

    item.getID = getID;
    item.setID = setID;
    item.getCount = getCount;
    item.setCount = setCount;
    item.itemToString = itemToString;

    return item;
  }

  var getID = function(){
    return this.id;
  }

  var setID = function(id){
    this.id = id;
  }

  var getCount = function(){
    return this.count;
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
    var newString = '\t\t\t\t{\n'
                    +'\t\t\t\t\t"id": '+ this.getID() +',\n'
                    +'\t\t\t\t\t"count": '+this.getCount() + '\n'
                    +'\t\t\t\t},\n';
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
    block.getItems = getItems;

    block.setType = setType;
    block.setRecMath = setRecMath;
    block.setMinSummonerLevel = setMinSummonerLevel;
    block.setMaxSummonerLevel = setMaxSummonerLevel;
    block.setShowIfSummonerSpell = setShowIfSummonerSpell;
    block.setHideIfSummonerSpell = setHideIfSummonerSpell;
    block.isEmpty = isEmpty;

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
    var newString =  '\n\t\t{\n'
                    +'\t\t\t"type": "' + this.getType() +'",\n'
                    +'\t\t\t"recMath": ' + this.getRecMath() +',\n'
                    +'\t\t\t"minSummonerLevel": ' + this.getMinSummonerLevel() + ',\n'
                    +'\t\t\t"maxSummonerLevel": ' + this.getMaxSummonerLevel() + ',\n'
                    +'\t\t\t"showIfSummonerSpell": "' + this.getShowIfSummonerSpell() + '",\n'
                    +'\t\t\t"hideIfSummonerSpell": "' + this.getHideIfSummonerSpell() + '",\n'
                    +'\t\t\t"items": [\n';
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
    itemSet.getType = getType;
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
    itemSet.isEmpty = isEmpty;

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
                    +'\t"title": "' + this.getTitle() +'",\n'
                    +'\t"type": "' + this.getType() +'",\n'
                    +'\t"map": "' + this.getMap() + '",\n'
                    +'\t"mode": "' + this.getMode() + '",\n'
                    +'\t"priority": ' + this.getPriority() + ',\n'
                    +'\t"sortrank": ' + this.getSortRank() + ',\n'
                    +'\t"blocks": [';
      return newString;
  }

  //General Functions
    var addItem = function(set, item){
      set.push(item);
    }

    var removeItem = function(set, id){
      if(!isEmpty(set)){
        for(var i = 0; i < set.length; i++){
          if(set[i].id == id){
            set.splice(i, 1);
          }
        }
      }
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

    var isEmpty = function(set){
        if(set.length == 0){
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
        var item = '<li id="'+ key +'" class="item"><img src="http://ddragon.leagueoflegends.com/cdn/5.2.1/img/item/'+key+'.png "></li>';
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
      receive: function(event, ui){
        var pasteItem = checkList("item-list", $(this).data().uiSortable.currentItem);
             if (!pasteItem){
                  $(this).data().uiSortable.currentItem.remove();
             }
      },
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

    function checkList(listName, newItem){
        var dupl = false;
        $("." + listName + " > li").each(function(){
            if ($(this)[0] !== newItem[0]){
                if ($(this).html() == newItem.html()){
                    dupl = true;
                }
            }
        });

        return !dupl;
    }


    var removeIntent = false;

    $('.item-set').click(function(){
      $('.block').sortable({
        connectWith: ".block",
        receive: function (event, ui) {
          ui.sender.data('copied', true);
        },
        over: function () {
            removeIntent = false;
        },
        out: function () {
            removeIntent = true;
        },
        beforeStop: function (event, ui) {
            if(removeIntent == true){
                ui.item.remove();
            }
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
      itemSet.setTitle($(this).text());
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
    });

    //Save set to object
    var organize = function(){
      //Clear previous block information to write new structure
      $('.block').each(function(){
        var blockName = $(this).parent().children('.block-name').text();
        var index = findItem(itemSet.getBlocks(), blockName);

        itemSet.getBlock(index).getItems().length = 0;
      });

      //add current items in block to item array
      $('.item-set .item').each(function(){
        var item = Item();
        item.setID($(this).attr('id'));

        var parentBlock = $(this).parent().parent().children('.block-name').text();
        var index = findItem(itemSet.getBlocks(), parentBlock);

        addItem(itemSet.getBlock(index).getItems(), item);
      });
    }

    var massiveObjToStringFunc = function(){
      var blockString = "";

      for(var i = 0; i < itemSet.getBlocks().length; i++){
        var itemString = "";

        for(var j = 0; j < itemSet.getBlock(i).getItems().length; j++){
          itemString += itemSet.getBlock(i).getItems()[j].itemToString();
        }
        blockString += itemSet.getBlock(i).blockToString() + itemString + '\t\t\t]\n \t\t},\n';
      }

      var itemSetString = itemSet.itemSetToString();

      var completeString = itemSetString + blockString + '\t]\n }\n';
      console.log(completeString);
    }

    $('#save-set').click(function(){
      organize();
      massiveObjToStringFunc();
    });
});
