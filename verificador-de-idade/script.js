function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade <= 12){
                //criança
                img.setAttribute('src','_imagens/menino.jpg')
                
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','_imagens/rapaz.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','_imagens/homem.jpg')
            }else{
                //idoso
                img.setAttribute('src','_imagens/idoso.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade <= 12){
                //criança
                img.setAttribute('src','_imagens/menina.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','_imagens/moca.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','_imagens/mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src','_amagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos  ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}