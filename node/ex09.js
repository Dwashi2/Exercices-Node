process.stdout.write('isso é bom?')
process.stdin.on('data', function(data){
    process.stdout.write(`sua resposta foi ${data.toString()} obrigado\n`)
    process.exit()
})