const http = require('http')

function handleRequest(request, response){
    if("GET" === request.method && 
       "/product/" === request.url){
        
        response.setHeader("Content-Type", "text/json");

        response.setHeader(`Access-Control-Allow-Origin`, `*`); // * WILDCARD
        response.setHeader(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
        response.setHeader(`Access-Control-Allow-Headers`, `Content-Type`);

        response.write(`
        [
            {
                "name": "Pencil",
                "desc": "Wood lead pencil #2 with eraser.",
                "price": 0.25,
                "images": [
                    {
                        "name" : "default",
                        "path" : "./images/pencil.png"
                    },
                    {
                        "name" : "side",
                        "path" : "./images/pencil_side.png"
                    }
                ]
            },
            {
                "name": "Paper",
                "desc": "8.5x11\\\" recycled stock.",
                "price": 2.50,
                "images": [
                    {
                        "name" : "default",
                        "path" : "./images/paper.png"
                    },
                    {
                        "name" : "top",
                        "path" : "./images/paper_top.png"
                    }
                ]
            }
        ]
        `);
    }else{
        response.write(`Your url was: `); //BUILD IT
        response.write(request.url); //BUILD IT MORE
    }
    return response.end(); //SEND IT
}

const server = http.createServer(handleRequest);
server.listen(9090);
