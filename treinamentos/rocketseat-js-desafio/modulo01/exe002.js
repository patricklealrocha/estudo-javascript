function pares(x, y){

    if(x < y){
        console.log('y é maior')
                
        for( let i = x ; x <= y ; x++){
            if(x % 2 == 0){
                console.log(x);
            }
        }
    }
    else{
        console.log('x é maior')
                
        for( let i = y ; y <= x ; y++){
            if(y % 2 == 0){
                console.log(y);
            }
        }
    }

}

//pares(32,321);
pares(77, 13);
