
const socket = io.connect(window.location.origin);


const forgotPass = document.querySelector('.forgotPass');

const emailVal = document.querySelector('.email');
const notif_div =  document.querySelector('.notification');
const notif = document.querySelector('#notification-message');

const submit = document.querySelector('.btn');

forgotPass.addEventListener('submit',(event) =>  {
    event.preventDefault();
    socket.emit('Forgot-Password-Email', emailVal.value)
   
});

socket.on('Forgot-Password-Success', function(args,args1) {
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