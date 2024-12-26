
/*const tarefas = document.querySelector('#elements')
console.log(tarefas.children) // pega o filho da div(ul)
console.log(tarefas.children[0].children) //pega os filhos da ul (lis)

    const ul = tarefa.querySelector('ul')
    ul.children[0].textContent = 'oi' // muda apenas o texto

    //altera o texto e elementos podem ser adicionados
    ul.children[0].innerHTML = 'testando <a href="">com tag</a> '
    ul.children[1].innerHTML = 'teste <strong> negrito </strong>'

    ul.outerHTML ='<input type="text">' // troca todo o elemento e seu conteúdo


*/
//.append(conteúdo) é quando se quer adicionar um conteudo dentro do elemento, 
// o append não adiciona o elemento sozinho, se eu quiser adicionar por exemplo uma lista dentro de uma ul, 
// eu tenho que criar a lista numa variavel e usar o .appendChild(var) ex ul.appendChild(novalista)




function clicar() {
    const tarefas = document.querySelector('#teste') // peguei uma div
    const lista = tarefas.querySelector('ul') // a ul dentro da div
    const tarefa = document.querySelector('#elements')
    const ul = tarefa.querySelector('ul')


    ul.children[1].append(' alterado')



    // criando o elemento e armazenando em uma nova variavel
    /*let novaLista = document.createElement('li') // cria a lista
    novaLista.textContent = 'lista 1'
    lista.append(novaLista) // adiciona a lista criada

    // fazer mais de uma lista praticando o for
    for (i = 1; i <=10; i++) {
        let novaLista = document.createElement('li')
        novaLista.textContent = "lista" + i;
        lista.append(novaLista)
    }
        
    
    */

}
