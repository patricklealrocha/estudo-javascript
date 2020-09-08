function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12 ){
        // Bom dia!
        img.src = '_imagens/manha.jpg'
        window.document.body.style.background = '#8CB8DD'
    } else if(hora >= 12 && hora < 18){
        // Boa tarde!
        img.src = '_imagens/tarde.jpg'
        window.document.body.style.background = '#F3B546'
    }else{
        //Boa noite!
        img.src = '_imagens/noite.jpg'
        window.document.body.style.background = '#160100'
    }
}