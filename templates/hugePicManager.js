
 class HugePicManager{
 
   showPic(nodeData){
       let img = document.createElement("img");
       img.setAttribute("src", nodeData.imgSRC); 
       document.getElementById("section2").appendChild(img);

       let name = document.createElement("h3");
       name.innerHTML = nodeData.name;
       document.getElementById("section2").appendChild(name);

       let desc = document.createElement("p");
       desc.innerHTML = nodeData.description;
       document.getElementById("section2").appendChild(desc);

       let or = document.createElement("p");
       or.innerHTML = nodeData.origin;
       document.getElementById("section2").appendChild(or);
    }

 }


 function prueba(){
  let hugePic = new HugePicManager()
  let hugPic2 = new nodeDataObject ("resources/imgA.jpg","foto1","hola descripcion","www.google.com")
  console.log(hugePic);
  hugePic.showPic(hugPic2);
  return 0;
}
