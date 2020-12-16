function redirect(){
    let name=document.getElementById('name').value;
    let surname=document.getElementById('surname').value;
   
    localStorage.setItem("nameValue",name);
    localStorage.setItem("surnameValue",surname);
    
    return ;
}
