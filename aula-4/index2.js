class celular{

    constructor(){
        this.cor = 'prata';
    }
    ligar(){
        console.log('uma ligação');
        return 'ligando';
    }

}
let objeto = new celular();
console.log(objeto.ligar())