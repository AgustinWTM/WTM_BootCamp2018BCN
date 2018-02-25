var main_bootcamps = {

    init: function(){

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         var newInfo = new infoTransferenceController(this.responseText);
         newInfo.init();
        }
      };
      // xhttp.open("GET", "http://192.168.1.4:8081/", true);
      xhttp.open("GET", "http://localhost:8081/", true);
      xhttp.send();

    }
  };
  function mainPageLoader(){
    main_bootcamps.init();
  }
