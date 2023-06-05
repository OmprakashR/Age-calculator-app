
 
    function age() {

      var is_errord = false;

      var d1 = document.getElementById('date').value;
      var m1 = document.getElementById('month').value;
      var y1 = document.getElementById('year').value;


      /* If statements to check if text box is empty */
      document.getElementById("dateerrormsg").innerHTML = "";
      document.getElementById("monthrerrormsg").innerHTML = "";
      document.getElementById("yearerrormsg").innerHTML = "";

      var date = new Date();
      var d2 = date.getDate();
      var m2 = 1 + date.getMonth();
      var y2 = date.getFullYear();


      if (d1 == null || d1.length === 0) {
        var errorOne = document.getElementById("dateerrormsg").innerHTML = "This filed is required";

        validlabelRed();
        is_errord = true;
      }

      if (m1 == null || m1.length === 0) {
        var errorOne = document.getElementById("monthrerrormsg").innerHTML = "This filed is required";
        validlabelRed();
        is_errord = true;
      }

      if (y1 == null || y1.length === 0) {
        var errorOne = document.getElementById("yearerrormsg").innerHTML = "This filed is required";
        validlabelRed();
        is_errord = true;
      }


      if (d1 > 31) {
        var errorOne = document.getElementById("dateerrormsg").innerHTML = "Must be a Valid Day";
        validlabelRed();
        document.getElementById('days').innerHTML = "--";
        is_errord = true;
      }

      if (m1 > 12) {
        var errortwo = document.getElementById("monthrerrormsg").innerHTML = "Must be a Valid Month";
        validlabelRed();
        document.getElementById('months').innerHTML = "--";
        is_errord = true;

      }

      if (y1 > y2) {
        var errortwo = document.getElementById("yearerrormsg").innerHTML = "Must be a Valid Year";
        validlabelRed();
        document.getElementById('years').innerHTML = "--";
        is_errord = true;
      }

      if (is_errord == false) {
        validlabelBlack();
        ClaculateDOB(d1, m1, y1);
      }
    }



    function validlabelRed() {

      document.getElementById('titleD').style.color = "red";
      document.getElementById('titleM').style.color = "red";
      document.getElementById('titleY').style.color = "red";

    }
    function validlabelBlack() {

      document.getElementById('titleD').style.color = "black";
      document.getElementById('titleM').style.color = "black";
      document.getElementById('titleY').style.color = "black";


    }


    function ClaculateDOB(d1, m1, y1) {
      var date = new Date();
      var d2 = date.getDate();
      var m2 = 1 + date.getMonth();
      var y2 = date.getFullYear();
      var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;


      }
      if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
      }

      var d = d2 - d1;
      var m = m2 - m1;
      var y = y2 - y1;


      document.getElementById('years').innerHTML = y;
      document.getElementById('days').innerHTML = d;
      document.getElementById('months').innerHTML = m;
    }


   
