let counter = 0;

var DOMs = {
    counterNumber: 'value',
    counterDecrease: '.decrease',
    counterincrease: '.increase',
    counterReset: '.reset'
};

const decreaseBtn = document.querySelector(DOMs.counterDecrease);
const increaseBtn = document.querySelector(DOMs.counterincrease);
const resetBtn = document.querySelector(DOMs.counterReset);

const currentCount = document.getElementById(DOMs.counterNumber);


var showCounter = function () {

    currentCount.textContent = Math.floor(counter);

    if (counter > 0) {
        currentCount.style.color = 'green';
    } else if (counter < 0) {
        currentCount.style.color = 'red';
    } else {
        currentCount.style.color = 'var(--clr-grey-1)';
    }

};

var increaseCounter = function () {
    counter++;
    showCounter();
}

var decreaseCounter = function () {
    counter--;
    showCounter();
}

var resetCounter = function () {
    counter = 0;
    showCounter();
}

increaseBtn.addEventListener("click", increaseCounter);

decreaseBtn.addEventListener("click", decreaseCounter);

resetBtn.addEventListener("click", resetCounter);


/*

// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});



*/