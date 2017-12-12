function checkPass()
{
    var pass1 = document.getElementById('passwordinput');
    var pass2 = document.getElementById('confirm_password');
    var message = document.getElementById('confirmMessage');
    
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    
    if(pass1.value == pass2.value){
        
        
         
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match"
        $('#submit').prop('disabled', false);
    }else{
        
      
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
        $('#submit').prop('disabled', true);
    }
} 