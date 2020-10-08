function formatUser(lista){

    for(const value of lista){
        console.log(`O ${value.nome} possui as habilidades : ${value.habilidades.join(' ,')}.`);
    }
}

var usuarios = [
    {
        nome:'Diego',
        habilidades : ['Javascript','Redux','ReactJS']
    },
    {
        nome : 'Gabriel',
        habilidades  : ['VueJs','Ruby on Rails','Elixir']
    }
];

//console.log(usuarios);
formatUser(usuarios);
