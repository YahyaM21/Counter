let number = document.querySelector(".number");
let addNum = document.querySelector(".add");
let lower = document.querySelector(".lower");

let currentAmt = 0;

updateDisplay();

addNum.addEventListener("click", function(){
    currentAmt++;
    updateDisplay();
});
lower.addEventListener("click", function(){
    currentAmt--;
    updateDisplay();
});

function updateDisplay() {
    number.innerHTML = currentAmt;
};



switch (currentAmt){
    case 1:
        
}