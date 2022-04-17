
let message = document.getElementById("submit");
message.addEventListener("click", FirstAdd);
message.addEventListener("click", SecondAdd);

function FirstAdd() {
  window.alert("Personal Data are Saved");
};

function SecondAdd() {
  window.alert("Tuition Fees are saved");
};



let message1 = document.getElementById("submitA");
message.addEventListener('click', ThirdAdd);

function ThirdAdd() {
    window.alert("Update is completed.");
};

