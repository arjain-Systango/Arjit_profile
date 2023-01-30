let form = document.getElementById('form');
let email = sessionStorage.getItem("email");
form.addEventListener('submit',function(event){
    event.preventDefault();
    window.localStorage.removeItem(sessionStorage.getItem("email"));
    sessionStorage.clear();

})