// var allcoll = document.querySelectorAll(".row .card")
// var card = document.querySelectorAll(".card img")
// var card_img = document.querySelector(".card-img-top")
// var text = document.querySelector(".content")
// var cardbady = document.querySelector(".card-body")
// var btn = document.querySelector(".show_price")
// var totalprice = 0;
// allcoll.forEach(function(item) {
//     item.onclick = function() {
//         text.innerHTM += item.textContent + " ";

//     }
// })
var allprodect = document.querySelectorAll(".list li")
var content = document.querySelector(".content")
var btn = document.querySelector(".addtocart")
var totalprice = 0;
var div = document.querySelector(".showprice")

// allprodect.forEach(function(item) {
//     item.onclick = function() {
//         totalprice += parseInt(item.getAttribute("price"))
//         content.innerHTML += item.textContent + " ";
//         if (content.innerHTML != " ") {
//             btn.style.display = "block"
//         }


//     }
// })
// btn.onclick = function() {
//     div.innerHTML = totalprice
//     if (totalprice >= 9000) {
//         div.style.color = "red"
//         var x = alert("are you sure to pay this product")

//     } else {
//         div.style.color = "green"
//     }
// var allproduct= document.querySelectorAll(".list li")
// var addcontent = document.querySelector(".content")
// var btn = document.querySelector(".showprice")
// var totalprice = document.querySelector("")
// var totalprice = 0;
var allprodect = document.querySelectorAll(".list li")
var content = document.querySelector(".content")
var btn = document.querySelector(".addtocart")
var totalprice = 0;
var div = document.querySelector(".showprice")

allprodect.forEach(function(item) {
    item.onclick = function() {
        totalprice += parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent + "<br/>";
        if (content.innerHTML != " ") {
            btn.style.display = "block"
        }


    }
})
btn.onclick = function() {
    div.innerHTML = totalprice
    if (totalprice >= 9000) {
        div.style.color = "red"
        var x = alert("are you sure to pay this product")

    } else {
        div.style.color = "green"
    }
    // console.log(totalprice)
    // totalprice.innerHTML += parseInt(item.getAttribute("price"))
}