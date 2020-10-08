$( document ).ready(function() {
    setarPercentualTanque(0);
    simularTanque();

    $('.btnsaida').click(function(){
        inverterValvulaSaida();
    });

    $('.btnentrada').click(function(){
        inverterValvulaEntrada();
    });

    $('.btnplay').click(function(){
        $('.btnplay').hide();
        $('body').data('status','rodando');
        principal();
    });

    $('.btnpause').click(function(){
        $('.btnpause').hide();
        $('.btncontinue').show();
        $('body').data('status','parado');
    });

    $('.btncontinue').click(function(){
        $('.btncontinue').hide();
        $('.btnpause').show();
        $('body').data('status','rodando');
        principal();
    });

    $('.btnrestart').click(function(){
        location.reload();
    });
});

function repetir(){
    setTimeout( function() {
        status = $('body').data('status');
        if(status != 'parado'){
            principal();
            $('.btnpause').show();
        }
    }, 100);
}

////////////////////////////////////
///////// controle do nível da água


function acionarValvula(valvula, status){
    var imagem = (status == 'fechada' ? 'tanque/on.jpg' : 'tanque/off.jpg');
    if(valvula == 've'){
        $('.entrada').data('status', status)
        $('.btnentrada').attr("src",imagem);
        
        status == 'aberta' ?  $('.entrada').show() :  $('.entrada').hide();
    }else if(valvula == 'vs'){
        $('.saida').data('status', status)
        $('.btnsaida').attr("src",imagem);
        status == 'aberta' ?  $('.saida').show() :  $('.saida').hide();
    }
}

function inverterValvulaSaida(){
    var status = $('.saida').data('status');
    
    if(status == 'aberta'){
        fecharValvulaSaida();
    }else if (status == 'fechada'){
        abrirValvulaSaida();
    }
}

function inverterValvulaEntrada(){
    var status = $('.entrada').data('status');
    
    if(status == 'aberta'){
        fecharValvulaEntrada();
    }else if (status == 'fechada'){
        abrirValvulaEntrada();
    }
}

function abrirValvulaEntrada(){
    acionarValvula('ve','aberta');
}

function fecharValvulaEntrada(){
    acionarValvula('ve','fechada');
}

function abrirValvulaSaida(){
    acionarValvula('vs','aberta');
}

function fecharValvulaSaida(){
    acionarValvula('vs','fechada');
}

///////////////////////////////////
///////// controle do nível da água


function setarPercentualTanque(percentual){
    // 0px = 0% - 682px = 100%
    px =  Math.round(percentual * 682 / 100);
    setarNivelTanque(px);
}

function medirNivelDoTanque(){
    var nivel = $('.agua').data("nivel");
    percentual =  Math.round(nivel * 100 / 682);
    return percentual;
}

function setarNivelTanque(nivel){
    
	var aguaElemento = $('.agua').position();
	var novoNivel=0;
	

	$('.agua').height(nivel + "px");
    $('.agua').data("nivel", nivel);
	
	//Ajustando a posição do nível
	novoNivel = 795 - Number(nivel);
	$('.agua').css("top", novoNivel+"px");
	
	
}

async function simularTanque() {
    var valvulaEntrada = $('.entrada').data("status");
    var valvulaSaida = $('.saida').data("status");
    
    if(valvulaEntrada == "aberta"){
        encherTanque();
        atualizaSensores();
    }
    if (valvulaSaida == "aberta"){
        esvaziarTanque();
        atualizaSensores();
    }

    setTimeout( function() {
        simularTanque();
    }, 100);
}

function encherTanque(){
    nivel = $('.agua').data("nivel");
    nivel = nivel + 4;
    setarNivelTanque(nivel);
}

function esvaziarTanque(){
    nivel = $('.agua').data("nivel");
    if(nivel > 0){
        nivel = nivel - 3;
        setarNivelTanque(nivel);
        if($('.saida').data("status") == 'aberta'){
            $('.saida').show();    
        }
    } else {
        $('.saida').hide();
    }
}

//////////////////////////////
///////// controle do display

function mostrarMensagem(mensagem){
	var n = mensagem.length;
	var mensagem_parte_01,mensagem_parte_02;
	
	if (n < 22)
	{
		$('.display').html(mensagem);
	}
	else
	{
		//Dividindo a mensagem em 2 partes
	  	mensagem_parte_01 = mensagem.substr(0,22);
		mensagem_parte_02 = mensagem.substr(22,n-1);
		$('.display').html(mensagem_parte_01 + "<br />" + mensagem_parte_02);
	}	
	
}


function limparDisplay(){
    $('.display').html('');
}

//////////////////////////////
///////// controle de sensores

function lerSensor(sensor){
    // 0px = 0% - 682px = 100%
    //s4=4%    s3=32%    s2=61%    s1 = 89%
    var nivel = $('.agua').data("nivel");
    percentual =  Math.round(nivel * 100 / 682);

    var status = false;
    switch (sensor){
        case 1: status = (percentual >= 89); break;
        case 2: status = (percentual >= 61); break;
        case 3: status = (percentual >= 32); break;
        case 4: status = (percentual >= 4); break;
        default: false; break;
    }
    return status ? 1 : 0;
}

function atualizaSensores(){
    atualizaSensor(1);
    atualizaSensor(2);
    atualizaSensor(3);
    atualizaSensor(4);
}

function atualizaSensor(sensor){
    var status = lerSensor(sensor);
    if(status == 1){
        $('.s' + sensor).css("background-color", "red"); 
        $('.s' + sensor).data('status', true);
    }else{
        $('.s' + sensor).css("background-color", "#0e0e0e");
        $('.s' + sensor).data('status', false);
    }
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
