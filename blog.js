    // // Your web app's Firebase configuration
    // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    // var firebaseConfig = {
    //     apiKey: "AIzaSyCImzRQa2NQKel7VE55S_PliUCU2rNWZUk",
    //     authDomain: "presonal-web-page.firebaseapp.com",
    //     databaseURL: "https://presonal-web-page-default-rtdb.europe-west1.firebasedatabase.app",
    //     projectId: "presonal-web-page",
    //     storageBucket: "presonal-web-page.appspot.com",
    //     messagingSenderId: "188818464429",
    //     appId: "1:188818464429:web:41298cc42168ee3e2c7024",
    //     measurementId: "G-QVYHB4YCFL"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    // firebase.analytics();  


// const name = localStorage.getItem('nameValue');
// const surname = localStorage.getItem('surnameValue');

// document.getElementById('reslut-name').innerHTML=name;
// document.getElementById('reslut-surname').innerHTML=surname;


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


const btn1 = document.querySelector("button1");
      const post1 = document.querySelector(".post1");
      const widget1 = document.querySelector(".star-widget1");
      const editBtn1 = document.querySelector(".edit1");
      btn1.onclick = ()=>{
        widget1.style.display = "none";
        post1.style.display = "block";
        editBtn1.onclick = ()=>{
          widget1.style.display = "block";
          post1.style.display = "none";
        }
        return false;
      }
      const btn2 = document.querySelector("button2");
      const post2 = document.querySelector(".post2");
      const widget2 = document.querySelector(".star-widget2");
      const editBtn2 = document.querySelector(".edit2");
      btn2.onclick = ()=>{
        widget2.style.display = "none";
        post2.style.display = "block";
        editBtn2.onclick = ()=>{
          widget2.style.display = "block";
          post2.style.display = "none";
        }
        return false;
      }
      const btn3 = document.querySelector("button3");
      const post3 = document.querySelector(".post3");
      const widget3 = document.querySelector(".star-widget3");
      const editBtn3 = document.querySelector(".edit3");
      btn3.onclick = ()=>{
        widget3.style.display = "none";
        post3.style.display = "block";
        editBtn3.onclick = ()=>{
          widget3.style.display = "block";
          post3.style.display = "none";
        }
        return false;
      }
      const btn4 = document.querySelector("button4");
      const post4 = document.querySelector(".post4");
      const widget4 = document.querySelector(".star-widget4");
      const editBtn4 = document.querySelector(".edit4");
      btn4.onclick = ()=>{
        widget4.style.display = "none";
        post4.style.display = "block";
        editBtn4.onclick = ()=>{
          widget4.style.display = "block";
          post4.style.display = "none";
        }
        return false;
      }