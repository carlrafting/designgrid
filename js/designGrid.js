/**
 * designGrid.js
 * http://carlrafting.com/designGrid/
 * https://github.com/carlrafting/<project>
 */
 
var designGrid = (function () {

  function init(options) {
      
    var column_count = (options && options.column_count) || 4,
        grid,
        baseline,
        line_height,
        l,
        columns,
        i,
        output,
        count;

  /**
   * Build html
   */
   
    grid = document.createElement('div');
    grid.className = 'grid';
    grid.innerHTML += '<div class="columns"></div>' +
                      '<div class="baseline"></div>';
    document.body.appendChild(grid);
    // Now that .baseline and .columns are created, we can get them!
    baseline = document.getElementsByClassName('baseline')[0];
    columns = document.getElementsByClassName('columns')[0];
  
  /**
   * Columns
   */

    output = '';
    for (i = 1; i <= column_count; i+=1) {
      output += '<div class="col"><small>C' + i + '</small></div>';
    }
    columns.innerHTML = output;
   
  /**
   * Baseline
   */
   
    l = document.createElement('div');
    baseline.appendChild(l);
    l.className = 'l';
    
    // now it's time to convert the value of line_height to a number
    line_height = document.getElementsByClassName('l')[0];
    line_height = line_height.offsetHeight;
    
    // divide viewport height with line_height and return the results
    function x() {
      var result = document.body.clientHeight / line_height;
      return result;
    }
    
    // get viewport height and store it as count
    count = x();
    
    // build up html for baseline
    output = '';
    for (i = 0; i < count; i+=1) {
      output += '<div class="l"></div>';
    }
    baseline.innerHTML = output;
    
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
        designGrid.storestate(grid);
      }
    }, false);
    
    // retrieve state on DOMContentLoaded (similar to jQuery's $(document).ready())
    document.addEventListener('DOMContentLoaded', designGrid.retrievestate(grid), false);  
      
  }
  
/**
 * State functionality
 */
  
  // store the className of grid
  function storestate(el) {
    localStorage.designGrid = el.className;
  }
  
  // retrieve whatever is stored
  function retrievestate(el) {
    if (localStorage.designGrid) {
      el.className = localStorage.designGrid;
    }
  }
  
  return {
    init: init,
    retrievestate: retrievestate,
    storestate: storestate
  };

}());