
const socket = io.connect(window.location.origin);


const registerForm = document.querySelector('.register');
const nameVal = document.querySelector('.name');
const emailVal = document.querySelector('.email');
const passVal = document.querySelector('.password');
const confirmVal = document.querySelector('.confirm-password');


const notif_div =  document.querySelector('.notification');
const notif = document.querySelector('#notification-message');



registerForm.addEventListener('submit',(event) =>  {
    event.preventDefault();
 
        socket.emit('Register', nameVal.value, emailVal.value, passVal.value, confirmVal.value);

    
  
   
   
});
socket.on('registered-failed',function (args) {
    if (args == 'true') {
          
        notif.innerHTML = "Password doesn't match" ;
        notif.style.color = 'white'
        notif_div.style.display = 'block';
        notif_div.style.backgroundColor = ' #ff9966';
    setTimeout(() => {
       
        notif_div.style.display = 'none';
      
    }, 3000);
    
    }
    else if(args == 'registered-already')
    {
        notif.innerHTML = "Email address is already registered" ;
        notif.style.color = 'white'
        notif_div.style.display = 'block';
        notif_div.style.backgroundColor = ' #ff9966';
    setTimeout(() => {
       
        notif_div.style.display = 'none';
      
    }, 3000);
    }
    else if(args == 'registered-success')
    {
        notif.innerHTML = "Email Verification sent" ;
        notif.style.color = 'white'
        notif_div.style.display = 'block';
        notif_div.style.backgroundColor = ' #ff9966';
    setTimeout(() => {
       
        notif_div.style.display = 'none';
      
    }, 3000);
    }
    
    
 
})

socket.on('Registered-Success', function(args,args1) {
    console.log("client: "+ args);
    if (args == 'success') {
        notif.innerHTML = "Email Sent to " + args1 ;
            notif.style.color = 'white'
            notif_div.style.display = 'block';
            notif_div.style.backgroundColor = ' #42ba96';
        setTimeout(() => {
           
            notif_div.style.display = 'none';
          
        }, 3000);
       
    }
    else{
        notif.innerHTML = args1 + " is not a registered email"  ;
        notif.style.color = 'white'
        notif_div.style.display = 'block';
        notif_div.style.backgroundColor = ' #fc5555';
    setTimeout(() => {
       
        notif_div.style.display = 'none';
      
    }, 3000);
    }
})