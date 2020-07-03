const _ = require('lodash')
//run npm i lodash on terminal
//run npm init -y on terminal to create package.json
//install lodash: run npm i lodash --save
const alunos =[
    {
    nome : 'joao',
    nota: 7.6
},
{
    nome: 'maria',
    nota: 8
},
{
    nome: 'pedro',
    nota: 7
}
]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)