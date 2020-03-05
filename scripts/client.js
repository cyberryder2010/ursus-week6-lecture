console.log('Hello Ursus');
$(document).ready(readyNow);

const basket = [];

// readyNow will get used as a CALLBACK function
function readyNow() {
  // EVENT LISTENER
  $('#jsAddFruit').on('click', clickAddFruit);
  console.log('Tots ready');
}

// EVENT HANDLER
function clickAddFruit(event) {
  console.log('Clicked Stuff');
  // retrieve the input value
  const fruit = $('#jsFruit').val();

  // clears our form field
  $('#jsFruit').val('');
  console.log(fruit);

  // call to the function that will update my basket array
  // make sure we pass it the fruit
  putFruitInBasket(fruit);
}
console.log('Are we ready yet????');

// this function is only concerned with putting the newFruit into the basket
function putFruitInBasket(newFruit) {
  console.log(newFruit);
  basket.push(newFruit);
  console.log('Basket:', basket);

  render();
}

// updates the DOM with the appended contents of my basket
function render() {
  const $basket = $('#jsBasket');

  // removes all child elements from my <ul> in the DOM
  $basket.empty();

  for (let kittyKat of basket) {
    // kittyKat is the item in my basket array
    $basket.append('<li>' + kittyKat + '</li>');
  }
}
