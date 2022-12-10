function validate(event){
    event.preventDefault();
    var apple=document.getElementById("apple").value;
    var password=document.getElementById("pass").value;
    if(apple=="123456"&&password=="minsha"){
        location.replace("https://minshapious.github.io/Appleclone/index.html")
        return;
    }else{
    alert("enter valid number and password");
    return;
        }
    }