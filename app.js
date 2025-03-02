const donutMaker = new DonutMaker();
const donutCount = document.getElementById("donutCounter");
const autoClicker = document.getElementById("autoClicker");
const autoCount = document.getElementById("autoCount");
const autoCost = document.getElementById("autoCost");

donutMaker.startTimer(updateDisplay);
updateUI();

function clickDonut(){
    donutMaker.makeDonuts();
    updateUI();
}

function clickAutoDonut() {
    donutMaker.autoClick();
    updateUI();
}

function updateDisplay(){
    console.log("UpdateDisplay");
    donutMaker.updateAuto();
    updateUI();
}

function updateUI(){
    console.log("UpdateUi");
    donutCount.innerText = donutMaker.getDonuts();
    autoClicker.disabled = donutMaker.checkAuto();
    autoCount.innerText = donutMaker.getAutoClicker();
    autoCost.innerText= "Next auto clicker cost: " + donutMaker.getAutoClickerCost();
}

function reset(){
    donutMaker.reset();
    updateUI();
}
