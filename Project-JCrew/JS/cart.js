var cart = JSON.parse(localStorage.getItem("cartitems")) || []
  console.log("cart:", cart);
  displayItem(cart);
  var checkout=JSON.parse(localStorage.getItem("chekoutitems"))
  console.log("c:",checkout)
  function displayItem(cart) {
    cart.map(function (item) {
      var imgdiv = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", item.image_url);
      var h3 = document.createElement("h3");
      h3.textContent = item.name;
      var h4 = document.createElement("h4");
      h4.textContent = item.price;
      var btn1 = document.createElement("button");
      btn1.textContent = "CHECKOUT";
      var btn2 = document.createElement("button");
      btn2.textContent = "Remove";
      btn2.setAttribute("id","remove");
      imgdiv.append(img, h3, h4, btn1,btn2);
      document.querySelector("#prod-container").append(imgdiv);
      btn1.addEventListener("click",function(){
        addToCheckOut(item);
      })
      btn2.addEventListener("click", function () {
        removetocart(item);
      });
    });
    function addToCheckOut(item){
      checkout.push(item);
      localStorage.setItem("checkoutitems",JSON.stringify(checkout));
    }
    function removetocart(item) {
      console.log(item);
      cart.pop(item);
      localStorage.setItem("cartitems", JSON.stringify(cart));
      window.location.reload();
    }
  }
  var payment=document.getElementById("goToPay");
  payment.addEventListener("click",function(){
  window.location.href="payment.html";
  });