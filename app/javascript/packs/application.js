/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


console.log('Hello World from Webpacker')


//taxons

import { howManyCards} from '../components/similar';

if(document.querySelectorAll("#similar_items_by_taxon .card")[4]){
    window.addEventListener("resize", (event) =>{
    console.log("resize");
    howManyCards();

  })

  howManyCards();
}else{
  console.log("else");
};




import { hello } from '../components/greeter';
hello();

// SEARCH BAR

import { navBar } from '../components/navbar';
navBar();


// PREVENT FORM
import { preventCart } from '../components/buttons';
if(document.querySelectorAll(".size-buttons input").length != 0){
  preventCart();
}else{

}




// function removeLastCard(){
//   document.querySelectorAll(".card")[4].style.display = "none"
// };
// function addLastCard(){
//   document.querySelectorAll(".card")[4].style.display = "block"
// };

// function howManyCards(){
//   if(993 > window.screen.width && 732 < window.screen.width) {
//     removeLastCard();
//     console.log("tab");
//   }else{
//     addLastCard()
//   };
// }



















