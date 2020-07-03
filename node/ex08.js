//console.log(process.argv)

//run --producao outro param on terminal

function temParam(param){
    return process.argv.indexOf(param)  !== -1
}

if (temParam('--producao')){
    console.log('Atencao total!')
}else{
    console.log('tranquilo!!!')
}

//run on terminal node ex08 
//after
//run on terminal node ex08 --producao
