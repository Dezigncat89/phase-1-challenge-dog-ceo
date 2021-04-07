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
  for (let x = 0;x < imgUrl.length;x++){
    let imgElem = document.createElement("img"); 
    imgElem.src = imgUrl[x];
 
    let imgID = "image" + (x + 1);
     let imgDogs = document.getElementById(imgID);
    cardElement.appendChild(imgElem);   
  } 
  console.log(document.getElementById('body').innerHTML);
});

// Adds Breeds to Page in a List
let dogBreeds2 = ['Afghan', 'Basset Hound'];
let ul = document.getElementById("dog-breeds");

for (let i = 0; i < dogBreeds2.length; i++) {
    let allBreeds = dogBreeds2[i];
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(allBreeds));
    ul.appendChild(li);
}

//Change Color of List Items
let  listBreeds = document.querySelectorAll('#dog-breeds li');
listBreeds.forEach(function (listBreed) {
  listBreed.addEventListener('click', function () {
    this.style.color = 'yellow';
  });
});

//Filter Breeds by Starting Letter
function sortBreeds() {
  let allInput, allFilter, ul, li, a, i, value;
  allInput = document.getElementById('myInput');
  allFilter = allInput.value.toUpperCase();
  ul = document.getElementById("dog-breeds");
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    value = a.textContent || a.innerText;
    if (value.toUpperCase().indexOf(allFilter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
