<?php
$page_title = "Item Set";
$page_description = "Create an Item Set to use in League of Legends!";
?>
<?php  include("header.php"); ?>

    <div class="container row" ng-app="app" ng-controller="loadItemCtrl as load">
      <div class="large-5 columns">
        <div class="item-list-container">
          <!-- List to be populated with items -->
          <ul class="item-list dragNdrop">
            <li ng-repeat="item in load.data | array | filter:search" data-name="{{item.name}}"><img src="http://ddragon.leagueoflegends.com/cdn/5.16.1/img/item/{{item.id}}.png " alt="" /></li>
          </ul>
          <div class="sorting-options">
            <!-- Search bar and other sorting options -->
            <div class="row">
              <div class="small-1 columns">
                <label for="right-label" data-tooltip aria-haspopup="true" class="right inline has-tip" title='Type in a search term in the box on the right! e.g "potion"'><object type="image/svg+xml" data="img/search.svg" id="search"></object></label>
              </div>
              <div class="small-11 columns">
                <input ng-model="search" class="search" type="text" id="right-label" placeholder=" Enter name of item">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="large-7 columns">
        <!-- Set where items can be dragged to create an item set -->
        <div class="item-set-container">
          <button id="create-item-set" ng-click="createSet()" ng-show="isVisible" type="button" name="button">New Item Set</button>
          <h1 id="item-set-name" ng-bind="itemSetTitle" ng-hide="isVisible"></h1>

          <form class="item-set-option" action="index.html" method="post">
            <input type="radio" name="map" value="SR" checked>Summoner's Rift
            <input type="radio" name="map" value="HA"> Howling Abyss
            <br>
            <input type="radio" name="map" value="TT"> Twisted Treeline
            <input type="radio" name="map" value="CS"> Crystal Scar
            <input type="radio" name="map" value="any"> Any
          </form>

          <ul class="item-set">
            <li class="placeholder">
              <ul class="block-placeholder">
                <button id="add-block" type="button" class="button tiny" ng-disabled="isDisabled"><span>+</span></button>
              </ul>
            </li>
          </ul>

          <div class="save">
            <button id="save-set" type="button" name="button" ng-disabled="isDisabled">Save Item Set</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap here -->
    <script type="text/javascript" src="js/app.module.js"></script>

    <script type="text/javascript" src="js/load/load.module.js"></script>
    <script type="text/javascript" src="js/load/load.factory.js"></script>
    <script type="text/javascript" src="js/load/load.filter.js"></script>
    <script type="text/javascript" src="js/load/load.controller.js"></script>
<?php include("footer.php"); ?>
