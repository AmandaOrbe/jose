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

search.addEventListener("click", (event) =>{
  console.log(event);
  console.log(searchBar);
  login.classList.remove("login-visible");
  searchBar.classList.toggle("visible");
})


// LOGIN HOME

const userIcon =  document.getElementById("user-icon")
const login = document.getElementById("home-login")


userIcon.addEventListener("click", (event) =>{
  console.log(userIcon);
  console.log(login);
  searchBar.classList.remove("visible");
  login.classList.toggle("login-visible");
})


