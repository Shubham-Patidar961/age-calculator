let btnclick = document.querySelector(".btn");
let btn = document.querySelector(".btnclick");
// code for age clculater //
btnclick.addEventListener("click", () => {
  const birthyear = Number(prompt("plese provide birth year "));
  let birthyearcla = 2022 - birthyear;
  if (birthyear >= 2023 || birthyear <= 0) {
    btn.innerHTML = "plese provide valid input ";
  } else {
    btn.innerHTML = ` you are ${birthyearcla} year old`;
  }
});

// code for set things back //
const refrsh = document.querySelector("#refrsh");
refrsh.addEventListener("click", () => {
  btn.innerHTML = " ";
});
