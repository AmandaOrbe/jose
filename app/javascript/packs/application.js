/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')

// SEARCH BAR


const search = document.getElementById("search")
const searchBar =  document.getElementById("search-bar")
const wrapper =  document.getElementById("wrapper")



search.addEventListener("click", (event) =>{
  console.log(event);
  login.classList.remove("login-visible");
  searchBar.classList.toggle("visible");
  wrapper.classList.remove("under-login");
  wrapper.classList.toggle("under-search");



})


// LOGIN HOME

const userIcon =  document.getElementById("user-icon")
const login = document.getElementById("home-login")
const hiddenButton1 = document.getElementById("hidden-button1")
const hiddenButton2 = document.getElementById("hidden-button2")


userIcon.addEventListener("click", (event) =>{
  console.log(userIcon);
  console.log(login);
  searchBar.classList.remove("visible");
  login.classList.toggle("login-visible");
  wrapper.classList.remove("under-search");
  wrapper.classList.toggle("under-login");
  hiddenButton1.classList.toggle("btn--hidden");
  hiddenButton2.classList.toggle("btn--hidden");


})


