function age() {
    var d1 = Number(document.getElementById('date').value);
    var m1 = Number(document.getElementById('mnth').value);
    var y1 = Number(document.getElementById('yr').value);
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
  }