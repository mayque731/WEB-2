//iniciando os trabalhos com node
//executando o arquivo js no terminal com node aruivo.js
//resultado exibido no terminaml
console.log("Ola mundo!"); //sorte

const http = require("http"); //importando http, desnecessario instalar o pacote, nativo do node

const server = http.createServer((req, res) => {
  //criando servidor => arrow function(function(req,res)), lida com requisições e respostas
  res.writeHead(200, { "Content-Type": "text/plain" });
  //controle de rotas
  if (req.url === "/") {
    res.end("Ola mundo!");
  }
  if (req.url === "/home") {
    res.end("Wellcome home!");
  }
});
server.listen(3000, "localhost", () => {
  //define a porta a ser usada
  console.log("server on localhost:3000"); //mensagem no console ao iniciar o server
});
