
 class HugePicManager{
   constructor(s2) {
     this.s2 = s2;
   }
 
   showPic(nodeData){
       let img = document.createElement("img");
       img.setAttribute("src", nodeData.imgSRC); 
       this.s2.appendChild(img);

       let name = document.createElement("h3");
       name.innerHTML = nodeData.name;
       this.s2.appendChild(name);

       let desc = document.createElement("p");
       desc.innerHTML = nodeData.description;
       this.s2.appendChild(desc);

       let or = document.createElement("p");
       or.innerHTML = nodeData.origin;
       this.s2.appendChild(or);

       let op = document.createElement("p");
       op.innerHTML = nodeData.options;
       this.s2.appendChild(op);

    }
 }



