// Ocultar o card
let card = document.getElementById('card').style.setProperty('display','none','important')
// Mostra o card com as informções do placeholder
function Pesquisa(){
let card = document.getElementById('card').style.setProperty('display','block','important')
let busca = document.getElementById('form').value.trim()
let teste = `http://localhost:3000/animais`
console.log(teste)

fetch(teste)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data)
    console.log(data.nome)
    console.log(data.tipo)
    console.log(data.descricao)
    console.log(data.imagem)

    let nome = document.getElementById('nome')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let imagem = document.getElementById('imagem')

    nome.innerHTML = data.nome
    tipo.innerHTML = data.tipo
    descricao.innerHTML = data.descricao
    imagem.src = data.imagem

    if (busca === "") {
        alert("Por favor, digite algo.");
        document.getElementById('card').style.setProperty('display','none','important')
    
      }


 let resultado = data.find( animal => animal.nome.toLowerCase().includes(busca.toLowerCase()))
 

 if(resultado){

    nome.innerHTML = resultado.nome
    tipo.innerHTML = resultado.tipo
    descricao.innerHTML = resultado.descricao
    imagem.src = resultado.imagem
 } else{
    alert('Animal não encontradado!')
    document.getElementById('card').style.setProperty('display','none','important')
    
 }
 
})


}








   




