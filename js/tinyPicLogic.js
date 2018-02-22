class tinyPicLogic{
    constructor (s1){
        this.s1 = s1;
        this.lista = [];
        this.imp = new tinyPicManager(s1);
    }

    procesate(coleccion, evento)
    {
        
        for (let x of coleccion) {
            let y = new nodeDataObject(x.name,x.imgSRC,x.type,x.description,x.origin,x.options)
            this.lista.push(y);
            this.imp.showPic(y, function(){
                evento(y)
               });
        }
        
      return 0;
    };

}

//  name,imgSRC,type,description,origin,options