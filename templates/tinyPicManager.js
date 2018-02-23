class tinyPicManager{
  constructor(s1){
    this.s1 = s1;
  }

  showPic(node, evento){
    var img = document.createElement("img");
         img.classList.add("classTipeA");
         img.setAttribute("src", node.imgSRC);
         img.addEventListener("click", evento )
         this.s1.appendChild(img);


  }



}
