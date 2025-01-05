let usm = document.getElementById("username");
let pass = document.getElementById("password");
let passCon = document.getElementById("passwordCon");
let err;
let btn = document.getElementById("btn");
btn.disabled = true;
function req() {
  let errors = document.querySelectorAll(".error");
  if (usm.value === "") {
    errors[0].innerHTML = "required";
  } else {
    errors[0].innerHTML = "";
  }
  if (pass.value === "") {
    errors[1].innerHTML = "required";
  } else {
    errors[1].innerHTML = "";
  }
  if (passCon.value !== pass.value) {
    errors[2].innerHTML = "your passwords are not the same >-<";
  } else {
    errors[2].innerHTML = "";
  }
  if (usm.value !== "" && pass.value !== "" && passCon.value === pass.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

usm.addEventListener("mouseleave", req);
pass.addEventListener("mouseleave", req);
passCon.addEventListener("mouseleave", req);
usm.addEventListener("input", () => {
  let errors = document.querySelectorAll(".error");
  errors.forEach((errorPop) => (errorPop.innerHTML = ""));
});

btn.addEventListener("click", () => {
  alert("U have successfully registered Yippeee!!!!!!!");
});
