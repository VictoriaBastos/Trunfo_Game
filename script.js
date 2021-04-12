
var carta1 = {nome:'Darth Vader', imagem:'https://s.abcnews.com/images/Entertainment/HT_darth_vader_jef_160715_4x5_992.jpg', atributos:{ataque:90,defesa:80,force:70}}
var carta2 = {nome:'Luke Skywalker',imagem:'https://static.wikia.nocookie.net/star-wars-extended-universe/images/3/3d/LukeSkywalker.png/revision/latest/scale-to-width-down/310?cb=20200125105040', atributos:{ataque:80,defesa:70,force:85}}
var carta3 = {nome:'Yoda',imagem:'https://nerdist.com/wp-content/uploads/2020/09/Yoda-The-High-Republic-Featured.jpg', atributos:{ataque:85,defesa:60,force:90}}
var carta4 = {nome:'Princess Leia',imagem:'https://bbts1.azureedge.net/images/p/full/2019/12/3ada0108-801b-4dda-afd3-6a4b0bfe24c3.jpg', atributos:{ataque:60,defesa:75,force:80}}
var carta5 = {nome:'Han Solo',imagem:'https://upload.wikimedia.org/wikipedia/en/b/be/Han_Solo_depicted_in_promotional_image_for_Star_Wars_%281977%29.jpg', atributos:{ataque:70,defesa:65,force:60}}
var carta6 = {nome:'Obi-Wan Kenobi',imagem:'https://img.ibxk.com.br//ms/images/highlights/000/054/335/51019.jpg?w=1200&h=675&mode=crop&scale=both', atributos:{ataque:90,defesa:80,force:85}}
var carta7 = {nome:'Chewbacca',imagem:'https://www.refinery29.com/images/9084590.jpg', atributos:{ataque:75,defesa:80,force:60}}
var carta8 = {nome:'Anakin Skywalker',imagem:'https://qph.fs.quoracdn.net/main-qimg-586b88bc03159f3ece889bba266fe1b5.webp', atributos:{ataque:90,defesa:80,force:85}}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]

var cartaJogador = " "
var cartaComputador = " "

var pontosJogador = 0
var pontosComputador = 0

atualizarInfoJogo()

function sortearCarta(){
    
    var indexComputador = parseInt(Math.random()* cartas.length)
    cartaComputador = cartas[indexComputador]
    cartas.splice(indexComputador,1)
    

    var indexJogador = parseInt(Math.random()* cartas.length)
    cartaJogador = cartas[indexJogador]
    cartas.splice(indexJogador,1)
    
    
    exibirCartaJogador()

    var btnSortear = document.getElementById('btnSortear').disabled = true
    var btnJogar = document.getElementById('btnJogar').disabled = false
    
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'

    var nomeCarta = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    
    var divRadioTexto = `<div id='opcoes' class='carta-status'>`

    var radioTexto=""
    for(var atributo in cartaJogador.atributos){
       radioTexto += '<input type="radio" name="atributo" value="' + atributo + '">' + atributo + ' ' + cartaJogador.atributos[atributo] + '<br>'
    }

    divCartaJogador.innerHTML = moldura + nomeCarta + divRadioTexto + radioTexto + '</div>'
}

function obterAtributo(){
    var radioAtributo = document.getElementsByName('atributo')
    for( var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function exibirCartaComputador(){
    var divCartaComputador = document.getElementById('carta-maquina')
    divCartaComputador.style.backgroundImage=`url(${cartaComputador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'

    var nome = `<p class="carta-subtitle">${cartaComputador.nome}</p>`

    var divRadioTexto = '<div id="opcoes" class="carta-status --spacing">'

    var radioTexto = ""
    for( var atributo in cartaComputador.atributos){
        radioTexto += `<p>${atributo} ${cartaComputador.atributos[atributo]}</p>`
    }

    divCartaComputador.innerHTML = moldura + nome + divRadioTexto + radioTexto + '</div>'

}

function jogar(){

    exibirCartaComputador()

    resultado()

    atualizarInfoJogo()

    btnJogar.disabled = true

    var btnProximaRodada = document.getElementById('btnProximaRodada')
    btnProximaRodada.disabled = false
}

function resultado(){
    var divResultado = document.getElementById('resultado')
    var radioEscolhido = obterAtributo()

    var resultado = ""
    if(cartaJogador.atributos[radioEscolhido] > cartaComputador.atributos[radioEscolhido]){
        resultado = `<p class="resultado-final">Venceu!</p>`     
        pontosJogador++  
    }else if( cartaJogador.atributos[radioEscolhido] < cartaComputador.atributos[radioEscolhido]){
        resultado = `<p class="resultado-final">Perdeu</p>`
        pontosComputador++
    }else{
        resultado = `<p class="resultado-final"> Empatou! </p>`
    }

    divResultado.innerHTML = resultado
}

function atualizarInfoJogo(){
    var divPlacar = document.getElementById('placar')
    divPlacar.innerHTML = `<p>Jogador ${pontosJogador} / ${pontosComputador} Computador</p>`

    var divQtdCartas = document.getElementById('quantidade-cartas')
    divQtdCartas.innerHTML = `<p> Quantidade de Cartas: ${cartas.length}</p>`

}

function proximaRodada(){

    btnSortear.disabled = false
    btnProximaRodada.disabled = true

    var divCartas = document.getElementById('cartas')
    divCartas.innerHTML = '<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>'
    
    var divResultado = document.getElementById('resultado')
    var resultadoFinal = ""

    if(cartas.length > 2){
        divResultado.innerHTML = ""
    }else if( cartas.length == 2){   
        btnProximaRodada.innerText = 'Resultado Final'   
    }else{
        if(pontosJogador > pontosComputador){
            resultadoFinal = `<p class="resultado-final">Resultado Final: Venceu!</p>`
        }else if(pontosJogador < pontosComputador){
            resultadoFinal = `<p class="resultado-final">Resultado Final: Perdeu</p>`
        }else{
            resultadoFinal = `<p class="resultado-final">Resultado Final: Empatou</p>` 
        }
        divResultado.innerHTML = resultadoFinal
        btnSortear.disabled = true
    }   
}