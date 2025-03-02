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
    autoCost.innerText = "Auto Clickers: " + donutMaker.getAutoClicker() + " (Cost: " + donutMaker.getAutoClickerCost() + "  donuts)";
    donutCount.innerText = "donuts: " + donutMaker.getDonuts() ;
    autoClicker.disabled = donutMaker.checkAuto();
   
   
  
}

function reset(){
    donutMaker.reset();
    updateUI();
}
