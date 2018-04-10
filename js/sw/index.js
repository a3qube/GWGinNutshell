const CacheName = "GWGinNutShell-V2";

self.addEventListener('install', function(event) {
    console.log("within install");
	console.log(document);
    event.waitUntil(function(){
    setTimeout(() => {
        console.log("inside install");
    }, 10000);
    }
    );
  });


  self.addEventListener("activate",function(oEvent){
    console.log("within activate");
	oEvent.waitUntil(function(){
        setTimeout(() => {
            console.log("inside install");
        }, 10000);
    });
    });


self.addEventListener("fetch",function(oEvent){
    console.log("within fetch");
    oEvent.waitUntil(function(){
        setTimeout(() => {
            console.log("inside install");
        }, 10000);
    });
    });

self.addEventListener("message",function(oEvent){
    console.log("within message");
    oEvent.waitUntil(function(){
        setTimeout(() => {
            console.log("inside install");
        }, 10000);
    });
    });

