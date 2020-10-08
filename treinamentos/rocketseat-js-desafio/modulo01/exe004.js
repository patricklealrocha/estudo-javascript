function experiencia(anos){
    if(anos < 1){
        console.log('Iniciante - Pequeno Gafanhoto')
    }else if( anos < 3){
        console.log('Intermediário')
    }else if (anos <= 6 ){
        console.log('Avançado')
    }else{
        console.log('Jedi Master')
    }
    // De 0 - 1 ano  : Iniciante
    // De 1 - 3 anos : Intermediário
    // De 3 - 6 anos : Avançado
    // De 7 acima    : Jedi Master
}

var anosEstudo = 7;
experiencia(anosEstudo);