var main_bootcamps = {
  data1: [{
                  'img': "resources/imgA.jpg",
                  'classUse': 'classTipeA',
                  'name':'Imagen A'
                }],
  init: function(){
    var section1Logic = new section1();
    var section1Node = document.getElementById('section1');
    section1Logic.procesateDataInput(this.data1);
    section1Node.innerHTML = section1Logic.drawCollection();
    return 0;
  }
};
function mainPageLoader(){
  main_bootcamps.init();
}
