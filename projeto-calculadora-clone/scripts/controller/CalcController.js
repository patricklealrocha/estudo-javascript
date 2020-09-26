// Aqui será criada a classe
class CalcController {
    
    constructor(){

        this._displayCalc = '0';
        this._currentDate ;
        this.initialize();
    }
    // método principal do projeto
    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEL = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEL.innerHTML = "01/05/2020";
        timeEl.innerHTML = "00:00";

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._currentDate;
    }
    set dataAtual(valor){
        this._dataAtual = valor;
    }


}