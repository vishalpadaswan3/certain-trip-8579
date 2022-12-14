var data = JSON.parse(localStorage.getItem("details")) || [];
var sam = document.getElementById("signemail")
var pass = document.getElementById("signpassword")

data.forEach((element,index) =>{
    if (element.email == sam.value){
        if (element.password == pass.value){
            alert("Login Successfully")
        }else{
            alert("Wrong Password")
        }
    }else{
        alert("Check Your Email")
    }
})