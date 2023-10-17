let score = 0;
let adder = 1;
let autoclickAdd = 0;
const scoreDisplay = document.querySelector("#score span");
const cookie = document.querySelector("#cookie");

cookie.addEventListener("click", () => {
    score += adder;
    scoreDisplay.textContent = score;
});

function autoclick() {
    score += autoclickAdd;
    scoreDisplay.textContent = score;
    setTimeout(autoclick, 1000);
}

document.body.onload = () => {
    autoclick();
}

const autoClickButton = document.querySelector("#auto-click");
const upgradeClickButton = document.querySelector("#upgrade-click");

autoClickButton.addEventListener("click", () => {
    const price = parseInt(autoClickButton.getAttribute("data-price"));
    if (score >= price) {
        score -= price;
        scoreDisplay.textContent = score;
        autoclickAdd +=3;
        autoClickButton.setAttribute("data-price", price * 2);
        document.querySelector("#auto-click span").innerHTML = price * 2;
        const element = document.createElement('img');
        element.src = "./res/img/cursor.png";
        element.classList.add("cursor");
        document.getElementsByClassName("cursors")[0].appendChild(element);
        
    }
});

upgradeClickButton.addEventListener("click", () => {
    const price = parseInt(upgradeClickButton.getAttribute("data-price"));
    if (score >= price) {
        score -= price;
        scoreDisplay.textContent = score;
        adder *= 2;
        upgradeClickButton.setAttribute("data-price", price * 3);
        document.querySelector("#upgrade-click span").innerHTML = price * 3;
    }
});
