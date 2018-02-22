class infoTransferenceController {
  constructor (data){
    var s1 = document.getElementById("section1");
    var s2 = document.getElementById("section2");
    this.newHuge = new HugePicManager(s2);
    this.tinyLogic = new tinyPicLogic(s1);
    this.data = data;
  }
  init(){
    var myself = this;
    this.tinyLogic.procesate(this.data, function(node){
      myself.evento(node);

    });
  }
  evento(node){
    this.newHuge.showPic(node);
  }
  
}
