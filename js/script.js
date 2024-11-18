document.getElementById("burger2").addEventListener("click",function() {
    document.querySelector(".navbar").classList.toggle("open")
});

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");
const cos = document.getElementById("butcos");
const sin = document.getElementById("butsin");
const tg = document.getElementById("buttg");
const ctg = document.getElementById("butctg");

let first = document.getElementById('first');
let second = document.getElementById('second');

let a = document.getElementById('a')

const result = document.getElementById("result");

const value = document.getElementById("Value");

let res = 0;
let val = 0;

function calculus(mark) {
    const num1 = parseFloat(first.value) || 0;
    const num2 = parseFloat(second.value) || 0;
    switch(mark) {
        case "+":
            res = num1 +num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num1 !==0 ? num1 / num2 : "error";
            break;
       
    }
    result.textContent=res;
}
plus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("+");
});
minus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("-");
});
mult.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("*");
});
div.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("/");
});

function trigonometry(mark) {
    const num = parseFloat(a.value) || 0;
    const angleInRadians = num * (Math.PI / 180)
    switch(mark) {
        case "sin":
            val = Math.sin(angleInRadians);
            break;
        case "cos":
            val = Math.cos(angleInRadians);
            break;
        case "tg":
            val = (angleInRadians % Math.PI) === (Math.PI/2) ? "error" : Math.tan(angleInRadians);
            break;                
        case "ctg":
            val = (angleInRadians % Math.PI) === 0 ? "error" : 1/(Math.tan(angleInRadians));
            break; 
        
    }
    value.textContent=val.toFixed(2);
}

cos.addEventListener("click", (event) => {
    event.preventDefault()
    trigonometry("cos");
});
sin.addEventListener("click", (event) => {
    event.preventDefault()
    trigonometry("sin");
});
tg.addEventListener("click", (event) => {
    event.preventDefault()
    trigonometry("tg");
});
ctg.addEventListener("click", (event) => {
    event.preventDefault()
    trigonometry("ctg");
});

