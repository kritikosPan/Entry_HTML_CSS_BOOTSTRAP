
let message = document.getElementById("submit");
let message1 = document.getElementById("submitA");
message.addEventListener("click", FirstAdd);
message.addEventListener("click", SecondAdd);

function FirstAdd() {
  window.alert("Discription is Saved");
};

function SecondAdd() {
  window.alert("Registration Form is saved");
};

message.addEventListener('click', ThirdAdd);

function ThirdAdd() {
    window.alert("Update is completed");
};

