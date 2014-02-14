(function (global) {
  var t, src, response,
      txtareas = document.getElementsByTagName('textarea'),
      len = txtareas.length,
      i = 0;

  function get(url, fn) {
    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {
      if (r.readyState === 4) {
        if (r.status === 200) {
          fn(r.responseText);
        }
      }
    };
    r.open("get", url, true);
    r.send(null);
  }
      
  function trigger_select() {
    this.select(); 
  }

  get('css/designGrid.css', function (r) {
    document.getElementById('css').value = r;
  });

  get('js/designGrid.js', function (r) {
    document.getElementById('js').value = r;
  });
  
  for (i; i < len; i+=1) {
    t = txtareas[i];
    t.addEventListener('click', trigger_select, false);
  }  
  
  designGrid.init();
}(this));