let fileObj = require("fs")
let http = require("http");

http.createServer(
    function(req,res){

        // fileObj.readFile('JSONFiles/first.json', function (err, data) {
        //     doWithJSON(data, res);
        // });
        console.log(req.url);
        let sUrl = req.url;
        let mimeType = { 'Content-Type': 'text/plain' };
        if(sUrl){
            if(sUrl === "/" || sUrl.includes(".html"))
                {
                    sUrl ="index.html";
                    mimeType = { 'Content-Type': 'text/html' };
                }
            if(sUrl.includes(".css"))
                mimeType = { 'Content-Type': 'text/css'};
            if(sUrl.includes(".js"))
                 mimeType = { 'Content-Type': 'text/javascript'};       
            if(sUrl.includes(".ico"))
                {
                    mimeType = { 'Content-Type': 'image/webp'};    
                    return;
                } 
        }

        if(sUrl.startsWith('/'))sUrl= sUrl.substr(1);

        console.log(`URL -> ${sUrl} , mime type ${mimeType['Content-Type']}`)
        
        fileObj.readFile(sUrl, function (err, data) {
            res.writeHead(200, mimeType);
            console.log(typeof data);
            res.write(data);
            res.end();
        });

    }
).listen(8188);

function doWithHTML(data,res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
}

function doWithJSON(data,res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
    res.end();
}

console.log("inside the node server");