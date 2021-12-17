var modal = document.getElementById("myModal");
  var mdl = document.getElementById("mdl");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  var butn = document.getElementById("butn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span1 = document.getElementsByClassName("close")[1];
  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };
  butn.onclick = function () {
    mdl.style.display = "block";
  };
  var logIn=document.getElementById("")
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  span1.onclick = function () {
    mdl.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  window.onclick = function (event) {
    if (event.target == mdl) {
      mdl.style.display = "none";
    }
  };
  document.getElementById("signup").addEventListener("click", signup);
  var userArr = JSON.parse(localStorage.getItem("userData")) || [];
  function signup() {
    //console.log(form.email.value)
    var email = document.getElementById("Email").value;
    console.log(email);
    var pass = document.getElementById("Pass").value;
    var mobile = document.getElementById("no").value;
    var userCredientials = {
      emailAddress: email,
      password: pass,
      Mobile: mobile,
    };
    userArr.push(userCredientials);
    localStorage.setItem("userData", JSON.stringify(userArr));
  };
  var a = document
    .getElementById("button-style")
    .addEventListener("click", signin);
  console.log(a);
  var regUser = JSON.parse(localStorage.getItem("userData"));
  function signin() {
    var eMail = document.getElementById("email").value;
    var pAss = document.getElementById("pass").value;
    if (eMail == "admin" && pAss == "admin") {
      window.location.href = "Admin.html";
    }
    for (var i = 0; i < regUser.length; i++) {
      if (regUser[i].emailAddress == eMail && regUser[i].password == pAss) {
        alert("Login Sucessfull");
        btn.innerHTML='LogOut'
        window.location.href = "home.html";
      }
    }
  }