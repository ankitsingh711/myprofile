const validateEmail = () => {
  let email = document.getElementById("email").value;
  let Eout = document.getElementById("eout");
  if(email.trim().length == 0) {
    Eout.innerHTML = "Please Enter Email Address"
  }else{
    Eout.value = ""
  }
}

const validateFname = () => {
  let fname = document.getElementById("fname").value;
  let Eout = document.getElementById("fout");
  if(fname.trim().length == 0) {
    fout.innerHTML = "Please Enter First Name"
  }else{
    fout.value = ""
  }
}

const validateLname = () => {
  let lname = document.getElementById("lname").value;
  let lout = document.getElementById("lout");
  if(lname.trim().length == 0) {
    lout.innerHTML = "Please Enter Last Name"
  }else{
    lout.value = ""
  }
}

 // button scroll 

let mybutton = document.getElementById("btn-back-to-top");

 // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
      scrollFunction();
      };

      function scrollFunction() {
  if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
 // When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




