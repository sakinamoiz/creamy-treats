let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartItems.classList.remove('active');
    searchcountry.classList.remove('active');
}
let cartItems = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItems.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    searchcountry.classList.remove('active');
    
}
let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
    searchcountry.classList.remove('active');
}
let searchcountry = document.querySelector('.search-country');
document.querySelector('#country-btn').onclick = () =>{
    searchcountry.classList.toggle('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
    searchform.classList.remove('active');
    searchcountry.classList.remove('active');
}
