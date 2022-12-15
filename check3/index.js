

const aluno = {    
    nome: '',
    faltas: 0,
    notas: [],

calcularMedia: function(alu) {        
    let notas = alu.notas
    let soma = alu.notas.reduce(function(soma, i) {return soma + i})             
    const resultado = (soma / alu.notas.length);
    return resultado;
    },
    
Faltas: function(alu) {
    faltas = aluno.faltas    
    let mais1 = alu.faltas++ + 1
    return mais1;}  
};

function Aluno(nome,faltas,notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas};

let aluno0 = new Aluno('Pedro', 4, [7,6,10,8,7]);
let aluno1 = new Aluno('José',1,[5,8,6,7,9]);
let aluno2 = new Aluno('Paulo',0,[10,8,9,7,9]);
let aluno3 = new Aluno('Henrique',8,[7,4,2,10,10]);


const listaAlunos = [
    aluno0,
    aluno1,
    aluno2,
    aluno3
];
console.log(aluno.Faltas(aluno1))

console.log(aluno.calcularMedia(aluno3))
module.exports = {aluno, Aluno, listaAlunos};



