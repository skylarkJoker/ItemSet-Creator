<?php
$page_title = "Item Set";
$page_description = "Create an Item Set to use in League of Legends!";
?>
<?php  include("/header.php"); ?>

    <div class="container row">
      <div class="large-5 columns">
        <div class="item-list-container">
          <ul class="item-list dragNdrop">
              <?php include 'load.php' ?>
          </ul>
          <div class="sorting-options">

                <div class="row">
                  <div class="small-1 columns">
                    <label for="right-label" data-tooltip aria-haspopup="true" class="right inline has-tip" title='Type in a search term in the box on the right! e.g "potion"'><object type="image/svg+xml" data="/ItemCreator/img/search.svg" id="search"></object></label>
                  </div>
                  <div class="small-11 columns">
                    <input class="search" type="text" id="right-label" placeholder=" Enter name of item">
                  </div>


            </div>

            <form class="" action="index.html" method="post">

              <input type="radio" name="map" value="SR" checked>Summoner's Rift
              <input type="radio" name="map" value="HA"> Howling Abyss
              <br>
              <input type="radio" name="map" value="TT"> Twisted Treeline
              <input type="radio" name="map" value="CS"> Crystal Scar
              <input type="radio" name="map" value="any"> Any
            </form>
          </div>
        </div>
      </div>

      <div class="large-7 columns">

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
                <button id="add-block" type="button" class="button tiny" disabled><span>+</span></button>
              </ul>
            </li>
          </ul>

          <div class="save">
            <button id="save-set" type="button" name="button" disabled>Save Item Set</button>
          </div>
        </div>
      </div>
    </div>
<?php include("/footer.php"); ?>
