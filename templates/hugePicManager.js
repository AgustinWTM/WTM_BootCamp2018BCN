

 class HugePicManager{
   constructor (img,name,description,reference){
     this.img = img;
     this.name = name;
     this.description = description;
     this.reference = reference;
   }

   showPic(){
       let img = document.createElement("img");
       img.setAttribute("src", this.img); 
       document.getElementById("section2").appendChild(img);

       let name = document.createElement("h3");
       name.innerHTML = this.name;
       document.getElementById("section2").appendChild(name);

       let desc = document.createElement("p");
       desc.innerHTML = this.description;
       document.getElementById("section2").appendChild(desc);

       let ref = document.createElement("p");
       ref.innerHTML = this.reference;
       document.getElementById("section2").appendChild(ref);
    }

    
 }

 


function prueba(){
  let hugePic = new HugePicManager("resources/imgA.jpg","foto1","hola descripcion","www.google.com")
  
  console.log(hugePic);
  hugePic.showPic();
  return 0;
}
