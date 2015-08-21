<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $page_title; ?></title>
    <link rel="stylesheet" href="slick/slick-theme.css"/>
    <link rel="stylesheet" href="slick/slick.css"/>
    <link rel="stylesheet" href="stylesheets/app.css" />
    <link rel="stylesheet" href="stylesheets/test.css" />

    <script src="bower_components/modernizr/modernizr.js"></script>

    <meta http-equiv="description" content="<?php echo $page_description; ?>" />

    <script src="js/jquery-2.1.4.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script src="js/jquery.fastLiveFilter.js"></script>

  </head>
  <body>
    <div class="sticky">
      <nav class="top-bar" data-topbar role="navigation" data-options="sticky_on: large">
        <ul class="title-area">
          <li class="name">
            <h1><a href="#">ITEM SET CREATOR</a></h1>
          </li>
           <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
          <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>

        <section class="top-bar-section">
          <!-- Right Nav Section -->
          <ul class="left">
            <li><a href="index.php">Home</a></li>
            <li><a href="" id="tutorial" data-reveal-id="myModal">Tutorial</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>

        </section>
      </nav>
    </div>

    <?php include('tutorial.php') ?>
