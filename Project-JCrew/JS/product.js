var product = JSON.parse(localStorage.getItem("ShoppingBag"));
  console.log("product:", product);
  displayItem(product);
  var cart = JSON.parse(localStorage.getItem("cartitems")) || [];

  function displayItem(product) {
    document.querySelector("#prod-container").textContent = "";
    product.map(function (item) {
      var imgdiv = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", item.image_url);
      var h3 = document.createElement("h3");
      h3.textContent = item.name;
      var h4 = document.createElement("h4");
      h4.textContent ="₹"+item.price;
      var btn = document.createElement("button");
      btn.textContent = "Add To Bag";
      imgdiv.append(img, h3, h4, btn);
      document.querySelector("#prod-container").append(imgdiv);
      btn.addEventListener("click", function () {
        addtocart(item);
      });
    });
    function addtocart(item) {
      console.log(item);
      cart.push(item);
      localStorage.setItem("cartitems", JSON.stringify(cart));
    }
  }
  document.getElementById("goTocart").addEventListener("click", function () {
    window.location.href = "Cart.html";
  });
  function handlePriceSort() {
    var selected = document.querySelector("#priceSort").value;
    console.log(selected);
    if (selected == "high") {
      product.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    }
    if (selected == "low") {
      product.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    }
    //console.log(products);
    displayItem(product);
  }