let userLogIn = document.querySelector('.log-in-form');

document.querySelector('#log-in-btn').onclick= () =>{
    userLogIn.classList.toggle('active');
    hamburger.classList.remove('active');
}




let hamburger = document.querySelector('.navbar');

document.querySelector('#hamburger').onclick= () =>{
    hamburger.classList.toggle('active');
    userLogIn.classList.remove('active');

}