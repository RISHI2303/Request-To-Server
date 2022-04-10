const http = require('http');
const fs = require('fs');

var port = 3000;

var server = http.createServer(function(req, res) {
    if (req.method === "GET") {
        if (req.url === "/") {
            fs.readFile("./home.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("Error Occured");
                    return;
                }
                else
                    res.end(data);
            })
        }

        else if (req.url === "/about") { 
            fs.readFile("./about.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("Error Occured");
                    return;
                }
                else
                    res.end(data);
            })
        }

        else
            res.end("Page Not Found");
    }

    else 
        res.end("Method Not Allowed");
});

server.listen(port, () => {
    console.log("Server is running on port " + port);
})