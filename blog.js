

  const nameOfUser = localStorage.getItem('nameValue');
   const surnameOfUser = localStorage.getItem('surnameValue');


let like1 = document.querySelector ('#like1');
let dislike1 = document.querySelector ('#dislike1');

let like2 = document.querySelector ('#like2');
let dislike2 = document.querySelector ('#dislike2');

let like3 = document.querySelector ('#like3');
let dislike3 = document.querySelector ('#dislike3');


let input11 = document.querySelector ('#input11');
let input21 = document.querySelector ('#input21');

let input12 = document.querySelector ('#input12');
let input22 = document.querySelector ('#input22');

let input13 = document.querySelector ('#input13');
let input23 = document.querySelector ('#input23');

let liked1=false;
let disliked1=false;

let liked2=false;
let disliked2=false;

let liked3=false;
let disliked3=false;



like1.addEventListener('click', ()=>{
    if (!liked1 && !disliked1){
       input11.value=parseInt(input11.value)+1;
        input11.style.color = 'yellow'; 
        liked1=true;
    }
    else if (liked1){
        input11.value=parseInt(input11.value)-1;
        input11.style.color = 'whitesmoke'; 
        liked1=false;
    }
    
})

dislike1.addEventListener('click', ()=>{
    if (!disliked1 && !liked1) {
        input21.value=parseInt(input21.value)+1;
        input21.style.color = 'yellow';
        disliked1=true;
    }
    else if (disliked1){
        input21.value=parseInt(input21.value)-1;
        input21.style.color = 'whitesmoke';
        disliked1=false;
    }
    
})


like2.addEventListener('click', ()=>{
    if (!liked2){
       input12.value=parseInt(input12.value)+1;
        input12.style.color = 'yellow'; 
        liked2=true;
    }
    else if (liked2){
        input12.value=parseInt(input12.value)-1;
        input12.style.color = 'whitesmoke'; 
        liked2=false;
    }
    
})

dislike2.addEventListener('click', ()=>{
    if (!disliked2) {
        input22.value=parseInt(input22.value)+1;
        input22.style.color = 'yellow';
        disliked2=true;
    }
    else if (disliked2){
        input22.value=parseInt(input22.value)-1;
        input22.style.color = 'whitesmoke';
        disliked2=false;
    }
    
})

like3.addEventListener('click', ()=>{
    if (!liked3){
       input13.value=parseInt(input13.value)+1;
        input13.style.color = 'yellow'; 
        liked3=true;
    }
    else if (liked3){
        input13.value=parseInt(input13.value)-1;
        input13.style.color = 'whitesmoke'; 
        liked3=false;
    }
    
})

dislike3.addEventListener('click', ()=>{
    if (!disliked3) {
        input23.value=parseInt(input23.value)+1;
        input23.style.color = 'yellow';
        disliked3=true;
    }
    else if (disliked3){
        input23.value=parseInt(input23.value)-1;
        input23.style.color = 'whitesmoke';
        disliked3=false;
    }
    
})

const ratings = {
  interstellar: 5.0,
  inception: 5.0,
  mrRobot: 5.0,
  friends: 5.0,
  bigBang:5.0
}


const starsTotal = 5;

document.addEventListener('DOMContentLoaded', getRatings);

const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

let product;

productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  // Enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value;

  if (rating > 5) {
    alert('Please rate 1 - 5');
    return;
  }
  ratings[product] = rating;

  getRatings();
});

function getRatings() {
  for (let rating in ratings) {
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
}

$(document).ready(function () {
    $('#comment').click(function(){
        let input = $('#input').val();
        $('.box').append(nameOfUser +' '+ surnameOfUser +' :' +input+'<br>');
        $('#input').val('');
        $('.box-container').slideDown();
    });
    $('#cancel').click(function () { 
        $('#input').val('');      
    });
    $('#delete').click(function () { 
      $('.box').text('');      
      $('.box-container').slideUp();
  });
  });
