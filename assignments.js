let message = document.getElementById("submit");
let message1 = document.getElementById("submitA");
message.addEventListener("click", FirstAdd);
message.addEventListener("click", SecondAdd);

function FirstAdd() {
  window.alert("Description Ammends are Saved");
};

function SecondAdd() {
  window.alert("New Dates are saved");
};

message.addEventListener('click', ThirdAdd);

function ThirdAdd() {
    window.alert("Update is completed");
};