function isChecked(){
  let radios = document.querySelectorAll(".size-buttons input");
  let i = 0
  let checked = false

  radios.forEach((radio)=> {


    if (radio.checked === false){

    } else {
      checked = true;
    }


  })
  return checked;
}



function preventCart() {
  document.querySelector("#add-to-cart-button").addEventListener("click", function(event) {

    if(isChecked() === false){
      document.getElementById("output-box").classList.remove("hidden");
      document.getElementById("output-box").style.transform = "scale(1.1)" ;
      event.preventDefault();
      console.log(isChecked());
    }  else {
      // console.log("yes");
    }
  });
}

export { preventCart };
