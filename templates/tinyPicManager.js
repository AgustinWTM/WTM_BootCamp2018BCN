var tinyPicManager = function (img,name){
    
      this.listaCollection = [];
      this.img = img;
      this.name = name;

      this.showPic = function(){
        for (let x of this.listaCollection){
         
         var img = document.createElement("img");
         img.setAttribute("src", x.img); 
         document.getElementById("section1").appendChild(img);

         var name = document.createElement("h2");
         name.innerHTML = x.name;
         document.getElementById("section1").appendChild(name);
        }
      };

      this.procesate = function (coleccion){
        var coleccionSize = coleccion.length;
        for (var i = 0; i < coleccionSize; i++) {
          this.listaCollection.push({"img":coleccion[i].img, "name":coleccion[i].name});

        }
      return 0;
    };

      return this;
    };
    
   
    this.carrusel = function() {
        var html = "";
        var coleccionSize = listaCollection.lenght;
        for(var i = 0; i<coleccionSize; i++){
          html = html + this.section1Nodo(this.listaCollection[i]);

        }
      return html;

    };

    
function prueba2(){
  var tinyPic = new tinyPicManager("resources/imgA.jpg","foto1")
  
  console.log(tinyPic);
  tinyPic.procesate(data);  
  tinyPic.showPic();
  return 0;
}


