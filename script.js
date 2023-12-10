let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");

btn.addEventListener("click",function(){

body.classList.toggle("mode");


if(body.classList.contains("mode")){
    btn.innerText= "Dark";
    h1.innerText = "Dark Mode";
}
else {
    btn.innerText= "Light";
    h1.innerText = "Light Mode";
}
});