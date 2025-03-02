class DonutMaker {


    constructor() {
        this.timer;
        this.reset();
    }

    reset() {
        this.donutCount = 0; // the count of donuts
        this.multiplier = 1; // amount of donuts per click
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;

    }

    startTimer(updateDisplay) {

        if (this.timer == null) {
            console.log("Timer started");
            this.timer = setInterval(() => {
                updateDisplay();
            }, 1000);
        }
    }

    getAutoClicker() {
        return this.autoClickerCount;
    }
    makeDonuts() {
        this.donutCount += this.multiplier;
    }
    getDonuts() {
        return this.donutCount;
    }

    updateAuto() {
        this.donutCount = this.donutCount + (this.autoClickerCount);
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    autoClick() {
        if (!this.checkAuto()) {
            this.autoClickerCount++;
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCost += Math.round(this.autoClickerCost * 0.1);
        }
    }

    checkAuto() {
        if (this.donutCount >= this.autoClickerCost) {
            return false;
        }
        else {
            return true;
        }
    }
}