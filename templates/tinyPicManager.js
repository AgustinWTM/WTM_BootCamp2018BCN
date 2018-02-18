var tinyPicManager = function (img,name){
    
      this.listaCollection = [];
      this.img = img;
      this.name = name;

      this.showPic = function(){
         var img = document.createElement("img");
         img.setAttribute("src", this.img); 
         document.getElementById("section1").appendChild(img);

         var name = document.createElement("h2");
         name.innerHTML = this.name;
         document.getElementById("section1").appendChild(name);
      };

      return this;
    };
    
    this.procesate = function (coleccion){
        var coleccionSize = coleccion.length;
        for (var i = 0; i < coleccionSize; i++) {
          this.listaCollection.push(tinyPicManager()(this.listaCollection.lenght, coleccion[i].img, coleccion[i],name));

        }
      return 0;
    };

    this.carrusel = function() {
        var html = "";
        var coleccionSize = listaCollection.lenght;
        for(var i = 0; i<coleccionSize; i++){
          html = html + this.section1Nodo(this.listaCollection[i]);

        }
      return html;

    };

    this.section1Nodo = function(currentNode){
      return  '<section id= section1 class="section1MainClass" id="'+currentNode.blockId+'">'+
                      '<img class="'+currentNode.name+'" src="'+currentNode.img+'">'
                    '</section>';

      return this;

    };  





