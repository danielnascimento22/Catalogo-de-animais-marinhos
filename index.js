// Ocultar o card
let card = document.getElementById('card').style.setProperty('display','none','important')
// Mostra o card com as informções do placeholdera
function Pesquisa(){
let card = document.getElementById('card').style.setProperty('display','block','important')
let busca = document.getElementById('form').value
let teste = `http://localhost:3000/animais`
console.log(teste)

fetch(teste)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data[0])
    console.log(data[0].nome)
    console.log(data[0].tipo)
    console.log(data[0].descricao)
    console.log(data[0].imagem)

    let nome = document.getElementById('nome')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let imagem = document.getElementById('imagem')

    nome.innerHTML = data[0].nome
    tipo.innerHTML = data[0].tipo
    descricao.innerHTML = data[0].descricao
    imagem.src = data[0].imagem



})

}








   




