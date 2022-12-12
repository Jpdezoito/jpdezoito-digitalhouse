let teclado = require('prompt-sync')();

const dados = [{
    altura: Number(teclado('Qual é a altura: ')),
    sexo: teclado('Digite F para feminino e M para masculino: ')
},
{
    altura: Number(teclado('Qual é a altura: ')),
    sexo: teclado('Digite F para feminino e M para masculino: ')
},
{
    altura: Number(teclado('Qual é a altura: ')),
    sexo: teclado('Digite F para feminino e M para masculino: ')
},
{
    altura: Number(teclado('Qual é a altura: ')),
    sexo: teclado('Digite F para feminino e M para masculino: ')
},
]

const menormaior = (dados) => {
let maior = 0
dados.forEach(dado => {
if (dado.altura > maior) {
    maior = dado.altura;
}
});
let menor = maior
dados.forEach(dado => {
if(dado.altura < menor) {
    menor = dado.altura
}
});
return `A menor altura é ${menor} a maior altura é ${maior}`
};
console.log(menormaior(dados))

const maiorAlturaMulheres = (dados) => {
    let mulheres = dados.filter((dado) => dado.sexo === 'F')
    let totalaltura = mulheres.reduce((total,atual) => {
        return total + atual.altura;
    }, 0);
    const resultado = (totalaltura / mulheres.length).toFixed(2)
return `A média de altura das mulheres é de ${resultado}M`
}
console.log(maiorAlturaMulheres(dados))

const quantoshomens = (dados) => {
    const homens = dados.filter(dado =>  dado.sexo ==='M')    
    return homens.length ;   
}
console.log(quantoshomens(dados))