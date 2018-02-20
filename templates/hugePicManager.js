
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
