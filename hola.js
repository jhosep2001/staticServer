var http = require ('http')
var fs = require("fs")

//crear instancia de servidpr http y iniciar escucha
var server = http.createServer(atenderServidor)


console.log("servidor iniciado")

server.listen(8088);

function atenderServidor (request, response){
	if (request.url == "/fecha"){
		response.write("fecha de hoy: " + new Date())
		console.log("Fecha" + request.url)		
	}
	else {
		console.log("solicitado " + request.url)
		retornarArchivo(request, response)
	}
}


function retornarArchivo(request, response){
	fs.readFile("." + request.url, archivoListo)
	console.log("solicitado: "+request.url)

	function archivoListo(error, data){
		if (error){
			console.log("error  " +error )
			response.end(error.toString())
		}
		else {
			response.write(data)
			response.end()
		}
	}
}