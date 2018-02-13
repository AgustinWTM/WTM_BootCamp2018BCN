var main_bootcamps = {
  data1: [{
                  'img': "resources/imgA.jpg",
                  'classUse': 'classTipeA',
                  'name':'Imagen A'
                },
          {
                          'img': "resources/imgB.jpg",
                          'classUse': 'classTipeA',
                          'name':'Imagen B'
                        }],
                        data2: [{
                                        'img': "resources/imgB.jpg",
                                        'classUse': 'classTipeA',
                                        'name':'FOOOOOOOOOOOO'
                                      },
                                {
                                                'img': "resources/imgB.jpg",
                                                'classUse': 'classTipeA',
                                                'name':'FOOOOOOOOOOOOOOOOOOOOO'
                                              }],
  init: function(){
    var section1Logic = new section1();
    var section1Node = document.getElementById('section1');
    section1Logic.procesateDataInput(this.data1);
    section1Node.innerHTML = section1Logic.drawCollection();



      var section2Logic = new section2();

      section2Logic.initSection(document.getElementById('section2'))

    return 0;
  }
};
function mainPageLoader(){
  main_bootcamps.init();
}
