console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

//Fetch Images of Dogs
function fetchImage(webRespond) {
  fetch('https://dog.ceo/api/breeds/image/random/4')
.then(function(webRespond) {
  console.log(webRespond);
  return webRespond.json();
})
.then(function(json) {
  console.log(json);
});
  
}

//Fetch Breed of Dogs
function fetchBreed(webRespond) {
  fetch('https://dog.ceo/api/breeds/list/all')
.then(function(webRespond) {
  console.log(webRespond);
  return webRespond.json();
})
.then(function(json) {
  console.log(json);
});
  
}
// Adds Image Elements to DOM tags
 document.addEventListener('DOMContentLoaded', function () {
  //iterate through the gameDeck array.
  for (let x = 0;x < imgUrl.length;x++){
    //create an img tag for each gameDeck element
    let imgElem = document.createElement("img"); 
    //set the source of the img tag to be the current gameDeck element (which will be a URI of a png file)
    imgElem.src = imgUrl[x];

    //target the div with id "card(x + 1)" 
    let imgID = "image" + (x + 1);
     let imgDogs = document.getElementById(imgID);

    //append the img tag to the card element
    cardElement.appendChild(imgElem);   
  } 
  //log the HTML to the console to check it
  console.log(document.getElementById('body').innerHTML);
});

