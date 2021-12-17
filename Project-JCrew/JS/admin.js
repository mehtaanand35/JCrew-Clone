document.querySelector("form").addEventListener("submit", addItem);
  var prod = JSON.parse(localStorage.getItem("ShoppingBag")) || [];
  function addItem(e) {
    var proObj = {
      name: form.name.value,
      price: form.price.value,
      image_url: form.img.value,
    };
    prod.push(proObj);
    localStorage.setItem("ShoppingBag", JSON.stringify(prod));
  }