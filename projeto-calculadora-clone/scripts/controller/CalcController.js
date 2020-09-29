// Aqui será criada a classe
class CalcController {
    
    constructor(){

        this._operation = [];
        this._locale = 'pt-BR';
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
        }, 1000);         
    }
    // limpa tudo
    clearAll(){
        this._operation = [];
        console.log(this._operation);
    }
    // limpa último item adicionado
    clearEntry(){
        this._operation.pop()
        console.log(this._operation);
    }
    setError(){
        this.displayCalc = 'Error'
    }
    //pegar a última operação
    getLastOperation(){
      return  this._operation[this._operation.length-1];
    } 
    setLastOperation(value){

        this._operation[this._operation.length -1] = value;
    }
    isOperator(value){
       return (['+','-','*','%','/'].indexOf(value) > -1);
    }
    pushOperation(value){
        this._operation.push(value);
        if (this._operation.length > 3) {
            
        }
    }
    //adiciona valor ou operador
    addOperation(value){
        
        console.log('A', value, isNaN(this.getLastOperation()))
        
        if (isNaN(this.getLastOperation())) {
            if (this.isOperator(value)) {

                this.setLastOperation(value);
                
                
                
            }else if(isNaN(value))
            {
                //outra coisa
                console.log(value);
            }
            else{

                this.pushOperation(value);
            }
        }else{
            if (this.isOperator(value)) {
                this.pushOperation(value)
            }else{
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(Number(newValue));
            }
            
        }
        console.log(this._operation);
    }
    // tratando outros caracteres da calculadora
    execBtn(value){
        switch(value){
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':
                break;
            case 'ponto':
                this.addOperation('.');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(Number(value));
                break;
            default:
                this.setError();
                break;

        }

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
               
                let textBtn = btn.className.baseVal.replace("btn-","");

               this.execBtn(textBtn);
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