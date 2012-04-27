<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Grid</title>
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/designGrid.css">
</head>
<body>

<!--<div class="grid">

<div class="columns">
<div class="col"><small>c1</small></div>
<div class="col"><small>c2</small></div>
<div class="col"><small>c3</small></div>
<div class="col"><small>c4</small></div>
</div>

<div class="baseline">
<div class="l"></div>
</div>

</div>-->

<header role="banner">
<h1>Grid</h1>
<p class="tagline">Grids 2.0 — A fluid grid-tool for responsive designs.</p>
</header>

<div role="main">

<h2>History</h2>

<p>Grid was born to address the need for a tool, that can help you when you're designing websites with fluid grids. Such tool, at the time being doesn't exist, and i needed one now! Grid is not a grid framework! Grid is a tool to help you make sure the different elements of your design aligns nicely with the grid. <a href="#">You can read more about the project here</a>.</p>

<h2>Usage</h2>

<p>Grid comes with a stylesheet and a javascript file. To get started, <a href="#">dowload the project from GitHub</a>, and then include the files in your project, like this:</p>

<div>Add this line inside your <code>&lt;head&gt;</code></div>
<p><code>&lt;link rel="stylesheet" href="path/to/css/grid.css"&gt;</code></p>

<div>And this one before <code>&lt;/body&gt;</code></div>
<p><code>&lt;script src="path/to/js/grid.js"&gt;&lt;/script&gt;</code></p>

<p>Or you can just copy-and-paste the code directly into your current stylesheet and javascript files.</p>

<h3><label for="css">CSS:</label></h3>

<textarea id="css" readonly rows="24" cols="80">
<?php echo file_get_contents('css/grid.css'); ?>
</textarea>

<h3><label for="js">JS:</label></h3>

<textarea id="js" readonly rows="24" cols="80">
<?php echo file_get_contents('js/grid.js'); ?>
</textarea>

<p>Press <kdb>g</kdb> to toggle the grid on/off.</p>

<h2>Customization</h2>

<h2>Browser support</h2>
<p>Grid is tested and is working in the following browsers:</p>
<ul>
<li>Chrome 18</li>
<li>Firefox 11</li>
<li>Safari 5</li>
</ul>

<p><small>There's currently a few issues with Opera 11, i haven't looked into what is causing them yet. But this should most likely be addressed in the next release (i hope). PS. I did this project in a day, so everythig is far from perfect.</small></p>

</div>

<footer role="contentinfo">
<small>This project was brought to you by: <a href="http://carlrafting.com">Carl Räfting</a>.</small>
</footer>

<script src="js/designGrid.js"></script>
<script src="js/global.js"></script>

</body>
</html>