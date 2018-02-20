class nodeDataObject{
    constructor(name,imgSRC,type,description,origin,options){
        this.name = name;
        this.imgSRC = imgSRC;
        this.description = description;
        this.origin = origin;
        this.options =[];
       
      }
     
      getName(){
         return this.name;
      }

      getImgSRC(){
        return this.imgSRC;
      }

      getDescription(){
        return this.description;
      }

      getOrigin(){
        return this.origin;
      }

      getOptions(){
        return this.options;
      }


      setNombre(name){
        this.name = name;
      }

      setImgSRC(imgSRC){
        this.imgSRC = imgSRC;
      }

      setDescription(description){
        this.description;
      }

      setOrigin(origin){
        this.origin = origin;
      }

      setOptions(options){
        this.options = options;
      }
  
}

console.log(nodeDataObject);
