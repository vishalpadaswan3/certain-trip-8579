var data = JSON.parse(localStorage.getItem("details")) || [];
var myform = document.getElementById("myform")

myform.addEventListener("submit", (e) =>{
    e.preventDefault();
    data.forEach((element,index) =>{
        if (element.email == myform.signemail.value){
            if (element.password == myform.signpassword.value){
                alert("Login Successfully")
               window.location.assign("http://127.0.0.1:5500/homepage/index1.html")
            }
        }else{
            alert("Check Your Email")
        }
    })
})
