
/*const tarefa= document.querySelector('#elements')
console.log(tarefas.children) // pega o filho da div(ul)
console.log(tarefas.children[0].children) //pega os filhos da ul (lis)

    const lista = tarefa.querySelector('ul')
    lista.children[0].textContent = 'oi' // muda apenas o texto

    //altera o texto e elementos podem ser adicionados
    lista.children[0].innerHTML = 'testando <a href="">com tag</a> '
    lista.children[1].innerHTML = 'teste <strong> negrito </strong>'

    lista.outerHTML ='<input type="text">' // troca todo o elemento e seu conteúdo

    lista.children[1].append(' alterado') // adiciona o texto


//.append(conteúdo) é quando se quer adicionar um conteudo dentro do elemento, 
// o append não adiciona o elemento sozinho, se eu quiser adicionar por exemplo uma lista dentro de uma ul, 
// eu tenho que criar a lista numa variavel e usar o .appendChild(variavel) ex ul.appendChild(novalista), 
// em resumo usar o append é mais pratico, principalmente quando se quer adicionar apenas "1 lista e no final do elemento que tenha muitas listas",
// se eu quiser adicionar no começo usa-se .prepend(conteudo)


function clicar() {
    const tarefa = document.querySelector('#elements')
    const lista = tarefa.querySelector('ul') // a ul dentro da div
    // peguei uma div

    // criando o elemento e armazenando em uma nova variavel
    let novaLista = document.createElement('li') // cria a lista
    novaLista.textContent = 'lista 1'
    lista.append(novaLista) // adiciona a lista criada apos as listas
    lista.prepend(novaLista) // no começo das listas

    // fazer mais de uma lista praticando o for
    for (i = 1; i <= 10; i++) {
        let novaLista = document.createElement('li')
        novaLista.textContent = "lista" + i;
        lista.append(novaLista)
    }

    // metodos after e before

    const newButton = document.createElement('button')
    newButton.innerHTML = "botão"

    lista.after(newButton)
    lista.before(newButton)

} 
*/

//elemento.getAttribute(atributo) 
// elemento.hasAttribute(atributo), verifica se tem o atributo  elemento.setAttribute()
//adicionar e remover classes no elemento ex: botao.classList.add('classe') e botao.classList.remove('classe') 
// botao.classList.contains('classe') verifica se tem a classe pra fazer ou nao uma função 
//botao.classList.toggle('rosa') coloca e tira a classe do elemento
// .replace('rosa', 'verde') troca uma classe por outra.

  /*function enviar() {

    const input = document.querySelector('input')
    const botao = document.querySelector('#botaoEnviar')

  if(input.getAttribute('type') === 'password')// pega o atributo type e verifica se é identico a pass...
        {
            // funcão executada se for indentico
        input.setAttribute('type', 'text') //mudando o atributo type para text
        botao.innerText = 'Ocultar senha' //alterando o texto do botao

        //mudar estilos dos elementos
        botao.style.backgroundColor = '#03680b' 
        input.style.fontSize ='20px'
    } else{
// função executada se não for indentico a pass
        input.setAttribute('type', 'password')
        botao.innerText ='Mostrar senha'
        botao.style.backgroundColor = '#8303b6'

    }

}
// função para usar o teclado
function teclar(e){
    if(e.key === 'Enter') // key reconhece a tecla teclada
        {
        console.log('teclou')
    }
}
const inputTeclado = document.getElementById('inputTeclado')
inputTeclado.addEventListener('keyup', teclar)// keydown, keypress tambem

// uma boa pratica quando vai usar o click e o key, fazer uma unica função()
e chamar-la nos dois eventos.
*/
