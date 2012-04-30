<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>designGrid</title>
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/designGrid.css">
</head>
<body>

<header role="banner">
<h1>designGrid</h1>
<p class="tagline">Grids 2.0 — A fluid grid-tool for responsive designs.</p>
</header>

<div role="main">

<h2>History</h2>

<p>designGrid was born to address the need for a tool, that can help you when you're designing websites with fluid grids. Such tool, at the time being doesn't exist, and i needed one now! designGrid is not a grid framework! designGrid is a tool to help you make sure the different elements of your design aligns nicely with the grid. <a href="#">You can read about the background to the project here</a>.</p>

<h2>Usage</h2>

<p>designGrid comes with a stylesheet and a javascript file. To get started, <a href="#">dowload the project from GitHub</a>, and then include the files in your project, like this:</p>

<div>Add this line inside your <code>&lt;head&gt;</code></div>
<p><code>&lt;link rel="stylesheet" href="path/to/css/designGrid.css"&gt;</code></p>

<div>And this one before <code>&lt;/body&gt;</code></div>
<p><code>&lt;script src="path/to/js/designGrid.js"&gt;&lt;/script&gt;</code></p>

<p>Or you can just copy-and-paste the code directly into your current stylesheet and javascript files.</p>

<h3><label for="css">CSS:</label></h3>

<textarea id="css" readonly rows="24" cols="80">
<?php echo file_get_contents('css/designGrid.css'); ?>
</textarea>

<h3><label for="js">JS:</label></h3>

<textarea id="js" readonly rows="24" cols="80">
<?php echo file_get_contents('js/designGrid.js'); ?>
</textarea>

<p>Now, all that you need to do is call designGrid's <code>init()</code> method, and you're set!</p>

<p><code>designGrid.init();</code></p>

<p>Press <kdb>g</kdb> to toggle the grid on/off.</p>

<h2>Customization</h2>
<p>By the default there are 4 columns set, you can customize this by setting <code>column_count</code> to whatever value your design require.</p>

<pre>
<code>designGrid.init({</code>
  <code>column_count: 6</code>
<code>});</code>
</code>
</pre>

<p>You'll also need to change the css so that your columns and gutters uses the right widths. Then you're ready to go!</p>

<h2>Browser support</h2>
<p>designGrid is tested and is working in the following browsers:</p>
<ul>
<li>Chrome 18</li>
<li>Firefox 11</li>
<li>Safari 5</li>
<li>Opera 11</li>
</ul>

</div>

<footer role="contentinfo">
<small>This project was brought to you by: <a href="http://carlrafting.com">Carl Räfting</a>.</small>
</footer>

<script src="js/designGrid.js"></script>
<script src="js/global.js"></script>

</body>
</html>