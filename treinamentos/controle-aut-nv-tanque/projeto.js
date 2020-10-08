async function principal() 
{
//Comece seu programa aqui
	var s1 = 0;
	var s2 = 0; 
	var s3 = 0;
	var s4 = 0;

	var nivel;

	s1 = lerSensor(1);
	s2 = lerSensor(2);
	s3 = lerSensor(3);
	s4 = lerSensor(4);

	nivel = s1*5 + s2*30 + s3*30 + s4*30;
	
	while(s1 === 0){
		abrirValvulaEntrada();
		await esperar(2000);
		fecharValvulaEntrada();
		mostrarMensagem(`O nível de s1 é ${s1}. `);
		await esperar(2000);		
	}
/*	mostrarMensagem(`O nível de s1 é ${s1}. `);
	await esperar(2000);
	mostrarMensagem(`O nível de s2 é ${s2}. `);
	await esperar(2000);
	mostrarMensagem(`O nível de s3 é ${s3}. `);
	await esperar(2000);
	mostrarMensagem(`O nível de s4 é ${s4}.`);

	mostrarMensagem(`Nível da caixa é ${nivel} %.`);*/
}

/*
Exibe uma mensagem no Display
	mostrarMensagem(mensagem)

Acionamento de válvulas
	abrirValvulaEntrada()
	fecharValvulaEntrada()
	abrirValvulaSaida()
	fecharValvulaSaida()

Leitura dos sensores
	lerSensor(sensor)

Repete a execução do programa
	repetir()
	
Esperar	
	await esperar(2000);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var s1,s2,s3,s4;
 	
	
// Comece seu programa aqui
	while(true)
	{
		s1=lerSensor(1);
		s2= lerSensor(2);
		s3= lerSensor(3);
		s4= lerSensor(4);
		if (s4==0)
		{
			mostrarMensagem("Tanque Vazio");
		}
		else
		{
			if (s1 == 1)
			{
				mostrarMensagem("Tanque Cheio");
			}
			else
			{

				mostrarMensagem("Tanque pela metade");

			}
			
		}
		await esperar(1000);
	}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

*/





























/*
var s1=0;
var s2=0;
var s3=0;
var s4=0;
var nivel;

s1 = lerSensor(1);
s2 = lerSensor(2);
s3 = lerSensor(3);
s4 = lerSensor(4);

nivel = s4*5 + s3*30 + s2*30 + s1*30;

mostrarMensagem("Nivel Caixa =" + nivel);
*/