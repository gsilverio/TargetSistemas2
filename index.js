//QUESTAO 2
/*
const primeiroVal = 0;
const segundoVal = 1;
let c = 0;
let array = []
let flag = false;

//NUMERO PREVIAMENTE DEFINIDO NO CODIGO PARA SER VERIFICADO SE PERTENCE OU NAO A SEQUENCIA
let numInformado = 6765;

//INSERINDO OS PRIMEIRO VALORES DA SEQUENCIA AO ARRAY
array.push(primeiroVal)
array.push(segundoVal)

//COMO NAO FOI DEFINIDO UM VALOR ESPECIFICO DE ATÉ ONDE A SEQUENCIA IRIA, EU ESTIPULEI UMA QUANTIDADE QUALQUER
//FOR ONDE SERA INCLUIDO OS OUTROS VALORES DA SEQUENCIA
for(let i =0; i<50; i++)
{
    if(i===0)
    {
        c = primeiroVal + segundoVal
        array.push(c)
    }
    else {
        c = array[i]+array[i+1]
        array.push(c)
    }
}
//FOR PARA PERCORRER O ARRAY VERIFICANDO SE O NUMERO INFORMADO PERTENCE OU NÃO A SEQUENCIA
for(let i = 0;i<array.length;i++)
{
    if(numInformado===parseInt(array[i]))
    {
        flag = true;
        break;
    }
}
//UTILIZANDO UMA FLAG BOOLEAN PARA CASO O NUMERO PERTENCER OU NAO A SEQUENCIA, ONDE SERA PRINTADO A RESPONDE PARA TRUE OU FALSE
if(flag)
{
    console.log("Numero pertence a sequencia")
}
else
{
    console.log("Numero nao pertence a sequencia")
}
*/


//QUESTAO 3
/*
//USEI NODE.JS PARA PEGAR O ARQUIVO JSON QUE ESTAVA SEPARADAMENTO DO JAVASCRIPT
let js = require("./dados.json")
let menorValor = js[0].valor;
let maiorValor = js[0].valor;
let diaMesMenor
let diaMesMaior
let flag = 0;
let media = 0;

//PEGANDO O MENOR, MAIOR E VERIFICANDO A QTD DE DIAS QUE OS VALORES FORAM 0.0 (FINAIS DE SEMANAS E FERIADOS) QUE SERÃO DESCONSIDERADOS NA HORA DE FAZER A MEDIA
for(let i = 0; i<js.length;i++)
{
    
    if(js[i].valor < menorValor && js[i].valor > 0.0)
    {
        menorValor = js[i].valor
        diaMesMenor = js[i].dia
    }

    if(js[i].valor > maiorValor && js[i].valor > 0.0)
    {
        maiorValor = js[i].valor
        diaMesMaior = js[i].dia
    }

    if(js[i].valor <= 0.0)
    {
        flag++
    }

    media += js[i].valor
}

//CALCULO DA MEDIA, RETIRANDO OS DIAS EM QUE O VALOR DO FATURAMENTO FOSSE DE 0.0
media = media/(js.length-flag)
flag = 0;
for(let i =0; i<js.length;i++)
{
    if(js[i].valor>media.toFixed(4))
    {
        flag++
    }
}

console.log(`O menor valor de faturamento foi de ${menorValor} ocorrido no dia ${diaMesMenor} do mês`)
console.log(`O maior valor de faturamento foi de ${maiorValor} ocorrido no dia ${diaMesMaior} do mês`)
console.log(`${flag} dias no mês em que o valor de faturamento diário foi superior à média mensal`)
*/


//QUESTÃO 4 
/*
const fatSP = 67836.43
const fatRJ = 36678.66
const fatMG = 29229.88
const fatES = 27165.48
const fatOutros = 19849.53

let media = fatSP+fatRJ+fatMG+fatES+fatOutros

let vTotal = fatSP*100/media;
let vTotal1 = fatRJ*100/media;
let vTotal2 = fatMG*100/media;
let vTotal3 = fatES*100/media;
let vTotal4 = fatOutros*100/media;

console.log(`SP: ${vTotal.toFixed(1)}% dentro do valor total mensal da distribuidora.
RJ: ${vTotal1.toFixed(1)}% dentro do valor total mensal da distribuidora.
MG: ${vTotal2.toFixed(1)}% dentro do valor total mensal da distribuidora.
ES: ${vTotal3.toFixed(1)}% dentro do valor total mensal da distribuidora.
OUTROS: ${vTotal4.toFixed(1)}% dentro do valor total mensal da distribuidora.`)
*/


//QUESTAO 5
/*
const stringInformada = "Target Sistemas"
let tamanhaFirst = stringInformada.length-1
let array = []
for(let i=0; i<stringInformada.length;i++)
{
    if(i===0)
    {
        array+=stringInformada[tamanhaFirst]
        tamanhaFirst--
    }
    else{
        array+=stringInformada[tamanhaFirst]
        tamanhaFirst--
    }
}
console.log(array)
*/