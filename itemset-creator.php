<?php
$page_title = "Item Set";
$page_description = "Create an Item Set to use in League of Legends!";
?>
<?php  include("/header.php"); ?>
    <div class="container">
      <?php include("/sidebar.php"); ?>
      <div class="item-list-container">
        <ul class="item-list dragNdrop">
          <?php include 'load.php' ?>
        </ul>
        <div class="sorting-options">
          <form class="" action="index.html" method="post">

            <object type="image/svg+xml" data="/www/ItemCreator/img/search.svg" class="search"></object>
            <input id="search" type="text" name="name" value="" placeholder="Enter name of item">
            <br>
            <input type="radio" name="map" value="SR" checked>Summoner's Rift
            <input type="radio" name="map" value="HA"> Howling Abyss
            <br>
            <input type="radio" name="map" value="TT"> Twisted Treeline
            <input type="radio" name="map" value="CS"> Crystal Scar
            <input type="radio" name="map" value="any"> Any
          </form>
        </div>
      </div>

      <div class="item-set-container">
        <button id="create-item-set" type="button" name="button">New Item Set</button>
        <h1 id="item-set-name" hidden></h1>
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
              <button id="add-block" type="button" name="button" disabled>+</button>
            </ul>
          </li>
        </ul>

        <button id="save-set" type="button" name="button">Save Item Set</button>
      </div>





    <?php include("/footer.php"); ?>
