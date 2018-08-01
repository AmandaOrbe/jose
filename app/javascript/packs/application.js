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
  login.classList.remove("header-login--visible");
  login.classList.add("header-login--invisible");
  searchBar.classList.toggle("visible");
  wrapper.classList.remove("under-login");
  wrapper.classList.toggle("under-search");



})


// LOGIN HOME

const userIcon =  document.getElementById("user-icon")
const login = document.getElementById("home-login")



userIcon.addEventListener("click", (event) =>{
  console.log(userIcon);
  console.log(login);
  searchBar.classList.remove("visible");
  login.classList.toggle("header-login--invisible");
  wrapper.classList.remove("under-search");
  wrapper.classList.toggle("under-login");



})


// PREVENT FORM




function isChecked(){
  let radios = document.querySelectorAll(".size-buttons input");
  let i = 0
  let checked = false

  radios.forEach((radio)=> {
    console.log("radio")

    if (radio.checked === false){
      console.log("false");
    } else {
      checked = true;
    }


  })
  return checked;
}
// radios.forEach((size) => {
//   console.log(size.checked)
// })




document.querySelector("#add-to-cart-button").addEventListener("click", function(event) {

  if(isChecked() === false){
    document.getElementById("output-box").classList.remove("hidden");
    document.getElementById("output-box").style.transform = "scale(1.1)" ;
    event.preventDefault();
    console.log(isChecked());
  }  else {
    console.log("yes");
  }
});






















