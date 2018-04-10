

  if ('serviceWorker' in navigator) {//Check if browser supports service worker
    navigator.serviceWorker.register('./js/sw/index.js')
    .then(function(registration) {
      console.log('registrationistration worked!',registration) ;
      // if(!navigator.serviceWorker.controller){
      //   return;
      // }
      navigator.serviceWorker.addEventListener("controllerchange",function(){
        location.reload();
      });
<<<<<<< HEAD

=======
 
>>>>>>> 78c88d3f655dd0e88f073deaede6ee3473346a25
      let oInstalling = registration.installing;
      let sw;
      if (registration.installing) {
        sw = registration.installing;
        document.querySelector('#installing').classList.add('highlight');                    
    } else if (registration.waiting) {
        sw = registration.waiting;  
        document.querySelector('#waiting').classList.add('highlight');                    
    } else if (registration.active) {
        sw = registration.active;
        document.querySelector('#active').classList.add('highlight');
    }
    if(sw){
      sw.addEventListener('statechange',function(e){
<<<<<<< HEAD
        let sState = e.target.state;
        console.log(sState);

        if (sState === 'installed') {
          document.querySelector('#installing').classList.add('highlight');                    
      } else if (sState === 'activating') {          
          document.querySelector('#waiting').classList.add('highlight');                    
      } else if (sState === 'activated') {          
          document.querySelector('#active').classList.add('highlight');
      }



      })
    }

       /*
      TODO - when waiting
      */
        

        /*
      TODO - when state Change
      */
  
        
      /*
      TODO - UpdateFound
      */
      
=======
        console.log(e.target.state)
      })
    } 
>>>>>>> 78c88d3f655dd0e88f073deaede6ee3473346a25
    
    }).catch(function() {
      console.log('Registration failed!');
    });
      }




