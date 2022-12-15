const {aluno, Aluno, listaAlunos} = require('./index')





curso = {
    nomedocurso: 'JS',
    notadeaprovacao: 6,
    faltasmaximas: 2,
    estudantes: listaAlunos,
    adicionaraluno: function(nome, faltas, nota ) {                
        let lista = listaAlunos.push(new Aluno(nome, faltas, nota))
        return lista;        
    },
    truefalse: function(alu1) {
        let porcentagem = curso.notadeaprovacao * 10 / 100; 
        let alun01 = aluno.Faltas(alu1)
        let aluno00 = aluno.calcularMedia(alu1)
        if (aluno00 >= curso.notadeaprovacao && alun01 <= curso.faltasmaximas) {
            return true;
        }else if(aluno00 >= curso.notadeaprovacao || alun01 >= curso.faltasmaximas){
            return false;
        }else if(aluno00 >= curso.notadeaprovacao + porcentagem && alun01 >= curso.faltasmaximas){
            return true;
        }
        else if(aluno00 < curso.notadeaprovacao && alun01 > curso.faltasmaximas){
            return false
        }
    },
    alunosaprovados: function() {   
       resul = curso.estudantes.length
            for (let i = 0; i < resul; i++){                 
                console.log(curso.truefalse(curso.estudantes[i]));
            }         
        return  ;
    } 
}


console.log(curso.adicionaraluno('José Paulo', 6, [10,1,1,10,10]))
console.log(curso.adicionaraluno('Maria', 7, [6,6,6,6,8]))

console.log(curso)
console.log(curso.estudantes)
//console.log(curso.truefalse(curso.estudantes))

console.log(curso.alunosaprovados(curso.estudantes))
module.exports = {curso}



