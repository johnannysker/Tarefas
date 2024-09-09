
//Criando variaveis dos elementos
let BotaoAdd = document.getElementById('bot');
let Input = document.getElementById('inp');
let Tarefas = document.getElementById('task');
let mark = false;

//Evento de criação das tarefas
BotaoAdd.addEventListener('click', function() {
    if(Input.value != ''){
        var tarefa = document.createElement('p');
        Tarefas.appendChild(tarefa);
        tarefa.innerText = '- ' + Input.value;
        Input.value = '';

        //Marcação para concluída
        tarefa.addEventListener('click', function() {
            if (mark == false){
                tarefa.style.textDecoration = 'line-through';
                mark = true;
            }else{
                tarefa.style.textDecoration = '';
                mark = false;
            }
        })

        //Evento para excluir tarefa
        tarefa.addEventListener('dblclick', function() {
            Tarefas.removeChild(tarefa);
        })
    }
})