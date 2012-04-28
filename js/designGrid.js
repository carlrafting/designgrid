/**
 * designGrid.js
 * <url>
 * <url>
 */
 
var designGrid = function () {

  function init(options) {
      
    var column_count = (options && options.column_count) || 4,
        grid,
        divs,
        baseline,
        line_height,
        l,
        columns,
        len,
        i;

  /**
   * Build html
   */
   
    grid = document.createElement('div');
    grid.className = 'grid';

    divs =  ['columns', 'baseline'];
    len = divs.length;
    // Build up divs and assign classnames    
    for (i = 0; i < len; i++) {
      var classname = divs[i];
      var d = document.createElement('div');
      d.className = classname;      
      divs[i] = d;
    }
    divs.forEach(function (el, i, arr) {
      grid.appendChild(el);
    });
    document.body.appendChild(grid);
  
    // */
    
  /**
   * Columns
   */

  baseline = document.getElementsByClassName('baseline')[0];
  l = document.createElement('div'),
  columns = document.getElementsByClassName('columns')[0];
   
   function buildCols() {
     var output = '';
     for (i = 1; i <= column_count; i++) {
       output += '<div class="col"><small>C' + i + '</small></div>';
     }
     columns.innerHTML = output;
   }
   
   buildCols();
   
   // */
       
  /**
   * Baseline stuff
   */
   
    baseline.appendChild(l);
    l.className = 'l';
    
    // convert string into number
    // NOT USED, REMOVE!

    function convertToNum(value) {
      value = value.slice(0, -2); // Strip off px from string.
      value = Number(value);
      return value;
    }
    
    // now it's time to convert the value of line_height to a number
    // line_height = convertToNum(line_height);
    line_height = document.getElementsByClassName('l')[0];
    line_height = line_height.offsetHeight;
    
    // divide viewport height with line_height and return the results
    function x() {
      var result = document.body.clientHeight / line_height;
      return result;
    }
    
    // get viewport hight and store it as count
    var count = x();
    // we need to get the new value on resize as well... 
    // not currently of any use though... But maybe later on
    window.addEventListener('resize', function (event) {
      count = x();
      // Wow this has a huge performance hit! Maybe remove or optimize somehow?
      // Oh and btw, i wrapped buildLines() in setTimeout to reduce the performance hit, didn't do much. 
      // The problem must be somewhere else, the loop most likely... window resize and loops, not a good combination i guess...
      // setTimeout(buildLines, 3000);
    }, false);
    
    // build up html for baseline
    function buildLines() {
      var output = "";
      for (i = 0; i < count; i++) {
        output += '<div class="l"></div>';
      }
      baseline.innerHTML = output;
    }
    
    buildLines();
    // */
    
  /**
   * Hide/Show grid overlay
   */

    // Hidden by default
    grid.classList.add('hide'); 
    
    document.addEventListener('keyup', function (event) {
      if (event.keyCode === 71) {
        if (!grid.classList.contains('hide')) {
          grid.classList.add('hide');
        } else {
          grid.classList.remove('hide');
        }
        storestate();
      }
    }, false);
    // */
    
  /**
   * State functionality
   */
    
    // store the className of grid
    function storestate() {
      localStorage.grid = grid.className;
    }
    
    // retrieve whatever is stored
    function retrievestate() {
      if (localStorage.grid) {
        grid.className = localStorage.grid;
      }
    }
    
    // retrieve state on DOMContentLoaded (similar to jQuery's $(document).ready())
    document.addEventListener('DOMContentLoaded', retrievestate, false);  
      
    // */
      
  };
  
  return { init: init };

}();