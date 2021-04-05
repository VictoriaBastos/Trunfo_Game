
var carta1 = {nome:'Darth Vader', atributos:{ataque:90,defesa:80,force:70}}
var carta2 = {nome:'Luke Skywalker', atributos:{ataque:80,defesa:70,force:85}}
var carta3 = {nome:'Yoda', atributos:{ataque:85,defesa:60,force:90}}
var carta4 = {nome:'Princess Leia', atributos:{ataque:60,defesa:75,force:80}}
var carta5 = {nome:'Han Solo', atributos:{ataque:70,defesa:65,force:60}}
var carta6 = {nome:'Obi-Wan Kenobi', atributos:{ataque:90,defesa:80,force:85}}
var carta7 = {nome:'Chewbacca', atributos:{ataque:75,defesa:80,force:60}}
var carta8 = {nome:'Anakin Skywalker', atributos:{ataque:90,defesa:80,force:85}}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]

var cartaJogador = " "
var cartaComputador = " "


function sortearCarta(){
    var indexJogador = parseInt(Math.random()*8)
    var indexComputador = parseInt(Math.random()*8)
    if(indexJogador == indexComputador){
        indexJogador = parseInt(Math.random()*8)
    }else{
        cartaJogador = cartas[indexJogador]
        cartaComputador = cartas[indexComputador]
    }

    exibirAtributos()

    var btnSortear = document.getElementById('btnSortear').disabled = true
    var btnJogar = document.getElementById('btnJogar').disabled = false

    console.log(cartaJogador)
}


function exibirAtributos(){
    var radioTexto = ""
    for( var atributo in cartaJogador.atributos){
        radioTexto += `<input type='radio' name='atributo' value='${atributo}'>` + atributo
    }
    
    document.getElementById('opcoes').innerHTML = radioTexto
}


function obterAtributo(){
    var radioAtributo = document.getElementsByName('atributo')
    for( var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}


function jogar(){
    var radioEscolhido = obterAtributo()

    if(cartaJogador.atributos[radioEscolhido] > cartaComputador.atributos[radioEscolhido]){
        alert(`Voce venceu ${cartaComputador.nome}!`)        
    }else if( cartaJogador.atributos[radioEscolhido] < cartaComputador.atributos[radioEscolhido]){
        alert(`${cartaComputador.nome} derrotou voce!`)
    }else{
        alert(`Voce e ${cartaComputador.nome} empataram! Que tal jogar novamente?!`)
    }

    console.log(cartaComputador)

    btnJogar.disabled = true
    btnSortear.disabled = false
}

