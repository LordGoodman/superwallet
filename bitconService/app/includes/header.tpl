<!DOCTYPE html>
<html lang="en" ng-app="mewApp">
<head>
  <meta charset="utf-8">
  <title>Super Wallet</title>
  <!-- <link rel="canonical" href="https://www.myetherwallet.com" /> -->
  <meta name="description" content="Super Wallet">
  <meta name="author" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/etherwallet-master.min.css">
  <script type="text/javascript" src="js/etherwallet-static.min.js"></script>
  <script type="text/javascript" src="js/etherwallet-master.js"></script>
  <!--
  <link rel="apple-touch-icon" sizes="60x60" href="images/fav/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="76x76" href="images/fav/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="120x120" href="images/fav/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="152x152" href="images/fav/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/fav/apple-touch-icon-180x180.png">
  <link rel="icon" type="image/png" href="images/fav/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="images/fav/favicon-194x194.png" sizes="194x194">
  <link rel="icon" type="image/png" href="images/fav/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/png" href="images/fav/android-chrome-192x192.png" sizes="192x192">
  <link rel="icon" type="image/png" href="images/fav/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="images/fav/manifest.json">
  -->
  <link rel="shortcut icon" href="images/favicon.ico">
  <meta name="msapplication-TileColor" content="#2e4868">
  <meta name="msapplication-TileImage" content="images/fav/mstile-144x144.png">
  <meta name="msapplication-config" content="images/fav/browserconfig.xml">
  <meta name="theme-color" content="#2e4868">
</head>

<body>

@@if (site === 'mew' ) {
  <header ng-controller='tabsCtrl'>
    <section class="container-fluid bg-gradient header-branding">
      <section class="container">
        <a class="brand"><img src="images/etherwallet-logo.svg" height="64px" width="auto" alt="My Ether Wallet" />
        <span style="max-width: 375px" translate="MEW_Tagline">Ether Wallet</span>
		&middot; v1.0 &middot;
		</a>
        <div class="tagline">
          <!--
		  <span style="max-width: 375px" translate="MEW_Tagline">Ether Wallet</span>
		  -->
}

@@if (site === 'cx' ) {
  <header ng-controller='tabsCtrl'>
    <section class="container-fluid bg-gradient header-branding">
      <section class="container">
        <a class="brand" href="/cx-wallet.html"><img src="images/etherwalletcx-logo.svg" height="64px" width="auto" alt="My Ether Wallet" />
        <span style="max-width: 375px" translate="CX_Tagline">Ether Wallet Chrome Extension</span>
		&middot; v1.0 &middot;
		</a>
        <div class="tagline">
		  <!--
          <span style="max-width: 375px" translate="CX_Tagline">Ether Wallet Chrome Extension</span>
		  -->
}
        <!-- &middot; v1.0 &middot; -->

  <section class="container nav-container overflowing" >
    <a ng-show="showLeftArrow" class="nav-arrow-left" ng-click="scrollLeft(100);" ng-mouseover="scrollHoverIn(true,2);" ng-mouseleave="scrollHoverOut()">&#171;</a>
    <div class="nav-scroll">
      <nav class="nav-inner">
        @@if (site === 'mew' ) {
        <span ng-repeat="tab in tabNames track by $index" class="nav-item" ng-class="{active: $index==activeTab}" ng-show="{{tab.mew}}" ng-click="tabClick($index)"> <a translate="{{tab.name}}"></a></span>
        }
        @@if (site === 'cx' ) {
        <span ng-repeat="tab in tabNames track by $index" class="nav-item" ng-class="{active: $index==activeTab}" ng-show="{{tab.cx}}" ng-click="tabClick($index)"> <a translate="{{tab.name}}"></a></span>
        }
      </nav>
    </div>
    <a ng-show="showRightArrow" class="nav-arrow-right" ng-click="scrollRight(100);" ng-mouseover="scrollHoverIn(false,2);" ng-mouseleave="scrollHoverOut()">&#187;</a>
  </section>
      </div>

        <span class="dropdown">
          <a href="#" class="dropdown-toggle" ng-click="dropdown = !dropdown"> {{curLang}} <span class="caret"></span></a>
          <ul class="dropdown-menu" ng-show="dropdown" style="display:none;" id="langDrop">
            <li><a ng-class="{true:'active'}[curLang=='English']" ng-click="changeLanguage('en','English')">English</a></li>
            <li><a ng-class="{true:'active'}[curLang=='中文']" ng-click="changeLanguage('zh','中文')">中文</a></li>
            <li role="separator" class="divider"></li>
            <!--
            <li><a data-toggle="modal" data-target="#disclaimerModal" translate="FOOTER_4"> Disclaimer </a></li>
            -->
          </ul>
        </span>
    </section>
  </section>

</header>
