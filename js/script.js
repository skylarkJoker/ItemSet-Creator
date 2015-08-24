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
    return this.count;
  }

  var setCount = function(count){
    this.count = count;
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

  //General Functions
    var addItem = function(set, item){
      set.push(item);
    }

    var findBlock = function(set, type){
      for(var i = 0; i < set.length; i++){
        if(set[i].type == type){
          return i;
        }
      }
      return -1;
    }

    var findItem = function(set, id){
      for(var i = 0; i < set.length; i++){
        if(set[i].id == id){
          return i;
        }
      }
      return -1;
    }
//Count the amount of consumables stacked
    function appendCount(object){
      object.append('<span class="counter">'+object.data('counter')+'<span>');
    }

    function updateCount(object){
      object.children('p.counter').text(object.data('counter'));
    }

    //Global Variables
    var data;
    var itemSet;//Needs to be initialized



//Make the big list of items sortable
    $('.item-list').sortable({
      connectWith: ".dragNdrop",
      receive: function(event, ui){
        //if we receive a duplicate item in this list, remove it
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
          $('.search').fastLiveFilter('.item-list');
      }
    }).disableSelection();

//Function to remove duplicates from the main item list
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

//Item Set Manipulation. Making the set sortable. So many issues sigh...
    var removeIntent = false;
    var duplicateChk = {};

    $('.item-set').click(function(){
      $('.block').sortable({
        connectWith: ".block",
        receive: function (event, ui) {
          ui.sender.data('copied', true);

          if(ui.item.data('consumed')){
            $(ui.item).each (function () {
                if (duplicateChk.hasOwnProperty(this.id)) {
                   $(this).remove();
                } else {
                   duplicateChk[this.id] = 'true';
                }
            });
            var id = "#"+ ui.item.attr('id');
            var count =  $(this).children(id).data('counter');
            $(this).children(id).data('counter', count +1)

            if( $(this).children(id).data('counter') == 1){
              appendCount($(this).children(id));
            }
            else if( $(this).children(id).data('counter') > 1){
              updateCount($(this).children(id));
            }
          }

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
      var newBlock = '<li><p class="block-name">'+ blockName +'</p><button id="op-block" type="button" name="button">-</button><ul class="block dragNdrop"></ul></li>'
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
      var index = findBlock(itemSet.getBlocks(), old);

      if(index !== -1){
        itemSet.getBlock(index).setType(newBlockName);
      }
    });

    //Save set to object
    var organize = function(){
      var map = $('input[name=map]:checked', '.item-set-option').val();
      itemSet.setMap(map);

      //Clear previous block information to write new structure
      $('.block').each(function(){
        var blockName = $(this).parent().children('.block-name').text();
        var index = findBlock(itemSet.getBlocks(), blockName);

        itemSet.getBlock(index).getItems().length = 0;
      });

      //add current items in block to item array
      $('.item-set .item').each(function(){
        var item = Item();
        item.setID($(this).attr('id'));
        item.setCount($(this).data('counter'));

        var parentBlock = $(this).parent().parent().children('.block-name').text();
        var index = findBlock(itemSet.getBlocks(), parentBlock);

        addItem(itemSet.getBlock(index).getItems(), item);
      });
    }


    var saveData = function (data, fileName){

            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            var json = JSON.stringify(data, null, 4);
            var blob = new Blob([json], {type: "octet/stream"});
            var url = URL.createObjectURL(blob);
            a.href = url;
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
    }


    $('#save-set').click(function(){
      organize();
      var fileName = itemSet.getTitle() + ".json";
      //saveData(itemSet, fileName);
    });

    $('.item-set').on('click','#op-block', function(){
      var blockName = $(this).parent().children('.block-name').text();
      var index = findBlock(itemSet.getBlocks(), blockName);

      itemSet.getBlocks().splice(index, 1);
      $(this).parent().remove();
      console.log(itemSet);
    });

    // $('.search').fastLiveFilter('.item-list');

    jQuery(window).scroll(function() {
            var scroll = $(window).scrollTop();
          if (scroll >= 10) {
              $("nav").addClass("darken");
              $("nav").removeClass("transparent");
          }
          if (scroll < 10) {
              $("nav").removeClass("darken");
              $("nav").addClass("transparent");
          }
      });

      $('.your-class').slick({
        dots:true,
        arrows:true,
        initialSlide:0,
        infinite: false,
      });
});
