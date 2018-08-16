

function navBar(){
  const search = document.getElementById("search")
  const searchBar =  document.getElementById("search-bar")
  const wrapper =  document.getElementById("wrapper")
  const userIcon =  document.getElementById("user-icon")
  const login = document.getElementById("home-login")

  search.addEventListener("click", (event) =>{
    console.log(event);
    login.classList.remove("header-login--visible");
    login.classList.add("header-login--invisible");
    searchBar.classList.toggle("visible");
    wrapper.classList.remove("under-login");
    wrapper.classList.toggle("under-search");
  })

  // login



  userIcon.addEventListener("click", (event) =>{
    console.log(userIcon);
    console.log(login);
    searchBar.classList.remove("visible");
    login.classList.toggle("header-login--invisible");
    wrapper.classList.remove("under-search");
    wrapper.classList.toggle("under-login");



})
}

function navBarLoggedIn(){
  const search = document.getElementById("search")
  const searchBar =  document.getElementById("search-bar")
  const wrapper =  document.getElementById("wrapper")


  search.addEventListener("click", (event) =>{
    console.log(event);
    searchBar.classList.toggle("visible");
    wrapper.classList.remove("under-login");
    wrapper.classList.toggle("under-search");
  })
}

export { navBar, navBarLoggedIn };
