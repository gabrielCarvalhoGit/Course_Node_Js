const { error } = require('console')
const fs = require('fs') //require => Utilizado para importar módulos --- fs == File System

fs.readFile('arquivo.txt', 'utf-8', (err, data) => 
{
    if(err) {
        console.log(err)
        return
    }

    console.log(data)
})