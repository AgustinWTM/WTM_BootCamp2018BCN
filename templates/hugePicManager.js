
 class HugePicManager{
   constructor(s2) {
     this.s2 = s2;
   }

   showPic(nodeData){
       let div = document.createElement("div");
       div.classList.add("imgGrande");


       let img = document.createElement("img");
       img.setAttribute("src", nodeData.imgSRC);
       div.appendChild(img);

       let name = document.createElement("h3");
       name.innerHTML = nodeData.name;
       div.appendChild(name);

       let desc = document.createElement("p");
       desc.innerHTML = nodeData.description;
       div.appendChild(desc);

       let or = document.createElement("p");
       or.innerHTML = nodeData.origin;
       div.appendChild(or);

       let op = document.createElement("p");
       op.innerHTML = nodeData.options;
       div.appendChild(op);

       s2.appendChild(div);
    }
 }
