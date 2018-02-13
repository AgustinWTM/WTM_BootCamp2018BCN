var section1 = function(){
  this.nodesCollection = [];
  this.nodeModel = function(block, img, classT, text){
    this.blockId= block ? block : "",
    this.imgSRC= img ? img : "",
    this.textClass= classT ? classT : "defaultTextClass",
    this.text= text ? text : "has no name"
    return this;
  };
  this.procesateDataInput = function(collectionData){
    var collectionSize = collectionData.length;
    for(var i = 0; i < collectionSize; i++){
      this.nodesCollection.push(new this.nodeModel(this.nodesCollection.length, collectionData[i].img, collectionData[i].classUse, collectionData[i].name));
    }
    return 0;
  };
  this.drawCollection = function(){
    htmlColl = "";
    var collectionSize = this.nodesCollection.length;
    for(var i = 0; i < collectionSize; i++){
      htmlColl += this.section1Node(this.nodesCollection[i]);
    }
    return htmlColl;
  };
  this.section1Node = function(nodeCurrent){
    return '<div class="relativeLocation" id="'+nodeCurrent.blockId+'">'+
                      '<img src="'+nodeCurrent.imgSRC+'">'+
                      '<p class="'+nodeCurrent.textClass+'">'+nodeCurrent.text+'</p>'+
                    '</div>';
  };
  return this;
};
