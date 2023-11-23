
Início
Agenda
Minhas inscrições
Pendentes
E
Educacao Financeira - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
Q
Quimica - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
M
Matematica - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
L
Lingua Portuguesa - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
L
Lingua Inglesa - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
H
Historia - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
G
Geografia - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
S
Sociologia - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
B
Biologia I - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
P
Projeto De Vida - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
B
Biologia - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
M
Matematica I - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
F
Fisica I - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
P
Programação (Mat II) - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
Turmas arquivadas
Configurações
Mural
Atividades
Pessoas
Programação (Mat II) - 2º Ano B Manha - Médio
ARLINDA F CREPLIVE, C E-EF M PROFIS
Próximas atividades
Nenhuma atividade para a próxima semana!

Escreva um aviso para sua turma

Aviso: "function tocaSom (idElementoAudio) {…"
GILBERTO NUNES CORDEIRO
Criado em: 10:5910:59
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
 
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (){
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
