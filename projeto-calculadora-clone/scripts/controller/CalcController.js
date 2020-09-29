// Aqui será criada a classe
class CalcController {
    
    constructor(){

        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEL = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate ;
        this.initialize();
        this.initButtonsEvents();
    }
    // método principal do projeto
    initialize(){

        this.setdisplayDateTime();

        setInterval(() => {
            this.setdisplayDateTime();       
        }, 1000)         
    }
    // Aplicando vários eventos
    addEventListenerAll(element , events, fn){

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })

    }
    
    //Controlando eventos com querySector
    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, 'click drag', e =>{
                console.log(btn.className.baseVal.replace("btn-",""))
            });
            this.addEventListenerAll(btn , 'mouseover mouseup mousedown', e =>{
                btn.style.cursor = 'pointer';
            });
        });

    }
    //Método para iniciar a calculadora e manter os intervalos
    setdisplayDateTime(){
        
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }
    // get e set display time
    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    
    // get e set display date
    get displayDate(){
        return this._dateEL.innerHTML;
    }
    set displayDate(value){
        return this._dateEL.innerHTML = value;
    }

    // get e set display calc
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    // get e set data atual
    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this._currentDate = value;
    }


}