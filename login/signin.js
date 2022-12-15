var data = JSON.parse(localStorage.getItem("details")) || [];
var myform = document.getElementById("myform")

myform.addEventListener("submit", (e) =>{
    e.preventDefault();
    data.forEach((element,index) =>{
        if (element.email == myform.signemail.value){
            if (element.password == myform.signpassword.value){
                alert("Login Successfully")
               window.location.assign("https://modesens.com/")
            }else{
                alert("Wrong Password")
            }
        }else{
            alert("Check Your Email")
        }
    })
})
