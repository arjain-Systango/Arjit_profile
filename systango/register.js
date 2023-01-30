let form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('psw').value;
    let Repeatpassword = document.getElementById('psw-repeat').value;
    if(password !==Repeatpassword)
    {
        alert("password not match");

    }
    

    else{
        let user={};
        let users=[];
        user.name = document.getElementById("name").value;
user.collegename = document.getElementById('collegename').value;
user.phone = document.getElementById('phone').value;
user.email = document.getElementById('email').value;
user.password = document.getElementById('psw').value;
let emailnew = document.getElementById('email').value;
      if(localStorage.getItem("users")){
            users = JSON.parse(localStorage.getItem("users"));
            
        }
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        window.location.href="login.html";
        const value=JSON.parse(localStorage.getItem("user"));
        console.log(value.email);
    }

})
