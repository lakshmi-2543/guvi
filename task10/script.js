
const countdownElement = document.getElementById('countdown');


const countdown = (num, callback) => {
  countdownElement.textContent = num;
  if (num > 1) {
    setTimeout(() => {
      countdown(num - 1, callback);
    }, 1000);
  } else {
    setTimeout(() => {
      callback();
    }, 1000);
  }
};


countdown(10, () => {
  countdownElement.textContent = 'Happy Independence Day';
});