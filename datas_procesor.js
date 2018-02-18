exports.dataProcessor = class dataProcesor {
  constructor(dataInput) {
    this.data = dataInput;
  }
  buildDOMDAtas(){
    let response = '';
    for(let nodeUl of this.data){
      response += '<ul>' + this.buildNodeLI(nodeUl) + '</ul><br>';
    }
    return response;
  }

  buildNodeLI(nodeUl){
    let response = ''
    for (let variable in nodeUl) {
      response += '<li><p>' + variable + ': '+nodeUl[variable]+'</p></li>';
    }
    return response;
  }

  injectDatas(file){
    let indexinjection = file.indexOf('bloqWork1');
    if(indexinjection > -1){
      let b = file.slice((indexinjection+('bloqWork1').length), (file.length-1));
      let a = file.slice(0, indexinjection);
      return a + this.buildDOMDAtas() + b;
    }else{
      return file;
    }

  }
}
