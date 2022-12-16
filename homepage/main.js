
var container = document.getElementById("container")
var like_data = JSON.parse(localStorage.getItem("heart")) || []
var cartdata = JSON.parse(localStorage.getItem("cart")) || []
var arr = [];

var selectprice = document.getElementById("filter3")
selectprice.addEventListener("change", () => {

  if (selectprice.value == "low-to-high") {
    var x = arr.sort(function (a, b) {
      return a.price - b.price
    })
    showuser(x);

  } else if (selectprice.value == "high-to-low") {
    var x = arr.sort(function (a, b) {
      return b.price - a.price
    })
    showuser(x);

  } else {
    showuser(arr)
  }
})


var filterdata = document.getElementById("filter1")
filterdata.addEventListener("change", () => {

  var value = filterdata.value;
  if (value == "women") {
    let x = arr.filter((element) => element.desc == "female products less rates")
    showuser(x)
  } else if (value == "men") {
    let x = arr.filter((element) => element.desc == "male products less rates")
    showuser(x)
  } else if (value == "kids") {
    let x = arr.filter((element) => element.desc == "kids products less rates")
    showuser(x)
  } else {
    showuser(arr)
  }
})

fetchdata();
function fetchdata() {
  let promise = fetch("https:63989a35044fa481d6a3f349.mockapi.io/pr4")
  promise.then((res) => {
    return res.json();
  })

    .then((actualdata) => {
      arr = actualdata
      showuser(actualdata)
    })
    .catch((err) => {
      console.log(err)
    })
}



function showuser(data) {

  container.innerHTML = null;

  data.forEach((element, index) => {

    let cards = document.createElement("div")

    let image = document.createElement("img")
    image.setAttribute("src", element.image)

    let name = document.createElement("h2")
    name.innerText = element.name

    let price = document.createElement("h3")
    price.innerText = "$ " + element.price

    let type = document.createElement("p")
    type.setAttribute("class", "p2")
    type.innerText = element.desc

    let like = document.createElement("button")
    like.innerText = "Watchlist +"
    like.setAttribute("class", "like")

    like.addEventListener("click", () => {


      let flag = false;
      for (let i = 0; i < like_data.length; i++) {
        if (like_data[i].id == element.id) {
          flag = true;
          break;
        }
      }

      if (flag == true) {
        alert("Product is already in watchlist")
      } else {
        like_data.push(element)
        localStorage.setItem("heart", JSON.stringify(like_data))
        alert("Product is save in watchlist")
      }

    })

    let cart = document.createElement("button")
    cart.setAttribute("class", "cart")
    cart.innerText = "Add to cart"

    cart.addEventListener("click", () => {
      let flag = false;
      for (let i = 0; i < cartdata.length; i++) {
        if (cartdata[i].id == element.id) {
          flag = true;
          break;
        }
      }

      if (flag == true) {
        alert("Product Already in Cart")
      } else {
        cartdata.push(element)
        localStorage.setItem("cart", JSON.stringify(cartdata))
        alert("Product Added To Cart")
        window.location.assign("http://127.0.0.1:5500/homepage/cart.html")
      }
    })

    cards.append(image, name, type, price, like, cart)
    container.append(cards)
  })
}


var come1 = document.getElementById("come1")
come1.addEventListener("click", () =>{
  confirm("You want to logout")
})