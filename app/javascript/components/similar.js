

function removeLastCard(){
  document.querySelectorAll("#similar_items_by_taxon .card")[4].style.display = "none"
};
function addLastCard(){
  document.querySelectorAll("#similar_items_by_taxon .card")[4].style.display = "block"
};

function howManyCards(){
  if(993 > window.screen.width && 732 < window.screen.width) {
    removeLastCard();
    console.log("tab");
  }else{
    addLastCard()
  };
}

export { howManyCards};

