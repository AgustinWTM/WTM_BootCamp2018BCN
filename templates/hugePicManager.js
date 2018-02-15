var HugePicManager = function (){
    this.img;
    this.name;
    this.description;
    this.reference;
    this.initPic = function(img,name,description,reference){
        this.img = img
        this.name = name
        this.description = description
        this.reference = reference
    }
    this.showPic = function(){
       document.getElementById("section2").innerHTML=  "<img src = " + this.img + " >"
       var name = document.createElement("h3");
       name.innerHTML = this.name;
       document.getElementById("section2").appendChild(name);
       var desc = document.createElement("p");
       desc.innerHTML = this.description;
       document.getElementById("section2").appendChild(desc);
       var ref = document.createElement("p");
       ref.innerHTML = this.reference;
       document.getElementById("section2").appendChild(ref);
    }

    return this;
}
function prueba(){
  var hugePic = new HugePicManager()
  hugePic.initPic("resources/imgA.jpg","foto1","hola descripcion","www.google.com")
  console.log(hugePic);
  hugePic.showPic();
  return 0;
}
