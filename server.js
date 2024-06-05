const http = require('http')

function handleRequest(request, response){
    response.write(`Your url was: `); //BUILD IT
    response.write(request.url); //BUILD IT MORE
    return response.end(); //SEND IT
}

const server = http.createServer(handleRequest);
server.listen(9090);
