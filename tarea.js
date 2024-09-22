const fs = require('fs').promises;

function leerArchivoSimulado(rutaArchivo){
    return fs.readFile(rutaArchivo, 'utf8');

}

leerArchivoSimulado('input.txt').then((contenido) => {
    console.log("Contenido del archivo");
    console.log(contenido);
})
.catch((error) => {
    console.error("error al leer el archivo:", error.message);
    
} );

leerArchivoSimulado('input.txt');