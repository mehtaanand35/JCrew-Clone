var checkout = JSON.parse(localStorage.getItem("checkoutitems"));
  console.log("c:", checkout);
  displayItem(checkout);
  function displayItem(checkout) {
    checkout.map(function (item) {
      var imgdiv = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", item.image_url);
      var h4 = document.createElement("h4");
      h4.textContent = item.name;
      var h5 = document.createElement("h5");
      h5.textContent = item.price;
      var btn2 = document.createElement("button");
      btn2.textContent = "Remove";
      btn2.setAttribute("id", "remove");
      imgdiv.append(img, h4, h5, btn2);
      document.querySelector("#prod-container").append(imgdiv);
    });
    localStorage.setItem("checkoutitems",JSON.stringify(checkout));
  }
 var pay=document.getElementById("submit")
  var total=0;
  checkout.forEach(element => {
     total +=parseInt(element.price);      
  });
  pay.innerHTML="Pay ₹"+total
  pay.addEventListener("click",function(item){
      alert("Order Placed")
  })