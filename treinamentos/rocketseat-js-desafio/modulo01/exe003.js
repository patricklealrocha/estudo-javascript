function temHabilidade(lista){

    var pos = lista.indexOf('JavaScript')
    
    return (pos == -1) ? console.log(false) : console.log(true);
    
}

var skills = [ 'React JS', 'React Native','NodeJs','JavaScript']
temHabilidade(skills);
