var imagenes = function tinyPicManager() {

      this.foto = [{
                'img': "resources/imgA.jpg",
                'classUse': 'classTipeA',
                'name':'Imagen 1'
              },
          {
                        'img': "resources/imgB.jpg",
                        'classUse': 'classTipeA',
                        'name':'Imagen 2'
                      }
                    {
                        'img': "resources/imgB.jpg",
                        'classUse': 'classTipeA',
                        'name':'Imagen 3'

                    }]
    var carrusel = this.foto.length;
    for (i=0; i<carrusel; i++){
       parentImag = document.createElement('img')[i];
       document.getElementById(section1).appendChild(parentImag);
       document.getElementById(section1).innerHTML= parentImag;


      }
    };
