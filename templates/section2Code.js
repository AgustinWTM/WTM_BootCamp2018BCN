
                      var section2 = function(worker){

this.worker = worker;
                        this.data1x= [{
                                        'img': "resources/imgA.jpg",
                                        'classUse': 'classTipeA',
                                        'name':'Imagen A'
                                      },
                                {
                                                'img': "resources/imgB.jpg",
                                                'classUse': 'classTipeA',
                                                'name':'Imagen B'
                                              }]

  this.createSectionElements = function(parentNode){
    parentUl = document.createElement('ul');
    for(var i = 0; i < 10; i++){
      parentUl.appendChild(this.createFoos(i));
    }
    parentNode.appendChild(parentUl);
  };
  this.createFoos = function(index){
    var sheet = document.createElement('li');
      if(index % 2 === 0){
        sheet.classList.add('shad1');
      }else{
        sheet.classList.add('shad2');
      }
    var block1 = document.createElement('div');
    var name1 = document.createElement('h1');
    var desc1 = this.descriptionBuilder(index);
    block1.appendChild(name1).appendChild(desc1);
    sheet.appendChild(block1);
    return sheet;
  };
  this.descriptionBuilder = function(index){
    var desc1 = document.createElement('p');

      var sectionxLogic = this.worker;
      sectionxLogic.procesateDataInput(this.data1x);

    desc1.innerHTML = section1Logic.drawCollection();
    desc1.id = 'desc_'+index;
    desc1.classList.add('desc1Class');
    return desc1;
  };
  this.initSection = function(parentNode){
    // parentNode.innerHTML = this.sectionBody();
    this.createSectionElements(parentNode);
    return 0;
  };
  return this;
};
