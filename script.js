function age() {
    var d1 = (document.getElementById('date').value);
    var m1 = (document.getElementById('mnth').value);
    var y1 = (document.getElementById('yr').value);
    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth();
    var y2 = date.getFullYear();
    var d = (d2 - d1);
    var m = (m2 - m1)+13;
    var y = (y2 - y1)-1;
    if(m>11){
      y=y+1;
      m=0;
    }
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days ';
  }