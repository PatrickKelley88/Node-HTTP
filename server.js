const http = require("http");

const server = http.createServer((request, response) => { //pass request and response objects into createServer method
    const chunksArray = []; // create chunks array outside of function

    request.on("data", (chunk) => { //.on is same as add event listener
        chunksArray.push(chunk);
    });


request.on("end", () => { // "end" event listener - message has finished, move on to routing
    const body = JSON.parse(Buffer.concat(chunks).toString()); 
    // create const body which parses JSON and changes "chunks" to strings 

// routing below

    if(req.url == "/") {
        response.writeHead(200, {"Content-Type":"text/html" });
        response.write("<h1>Welcome to the Home Page</h1>");
    } else if (req.url == "/about") {
        //send back object with info "about you"

        const infoObject = {
            alive: true,
            alwaysSkateboarding: true,
        };

        const stringified = JSON.stringify(infoObject)
        response.writeHead(stringified);
    } else if(request.url == "/echo") {
        //send back an object that echos the incoming information
        const echoInfo = {
            body,
            method: request.method,
            url: request.url
        }
        response.writeHead(200, {"Content-Type":"application/json" });
        response.write(JSON.stringify({ method: req.method, url: req.url, body}))
    } else {
    res.writeHead(404, {"Content-Type":"text/html" });
    res.write("<h1>404 Error Not Found</h1>");
    }
    res.end();
});

});

server.listen(5555, () => {
    console.log("Listening");
});

