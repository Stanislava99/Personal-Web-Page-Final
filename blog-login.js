function redirect(){
    var name=document.getElementById('name').value;
    sessionStorage.setItem("nameValue",name);
    sessionStorage.setItem("surnameValue",surname);
    return false;
}
