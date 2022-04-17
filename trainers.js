let message = document.getElementById("submit");
let message1 = document.getElementById("submitA");
message.addEventListener("click", FirstAdd);
message.addEventListener("click", SecondAdd);

function FirstAdd() {
  window.alert("Personal Data are Saved");
};

function SecondAdd() {
  window.alert("Ammends in Subject are saved");
};

message.addEventListener('click', ThirdAdd);

function ThirdAdd() {
    window.alert("Update is completed");
};