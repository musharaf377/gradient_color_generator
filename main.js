const resultDiv = document.querySelector(".resultDiv");
const first_color = document.querySelector("#first_color");
const second_color = document.querySelector("#second_color");
const output_h2 = document.querySelector("#output_h2");



function gradient_generator(){
  resultDiv.style.background = `linear-gradient(to right bottom, ${first_color.value}, ${second_color.value}`;

  output_h2.innerText = resultDiv.style.background; 
}

first_color.addEventListener("input", gradient_generator);
second_color.addEventListener("input", gradient_generator);
