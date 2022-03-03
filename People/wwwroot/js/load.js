/* window.onload(function () {
  document.querySelector('#page').style.display="none";
  document.querySelector('#load').style.display="block";
})
function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 2000);
} */
 
// Fix this code

const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

document.addEventListener('DOMContentLoaded', () =>
  wait(1000).then(() => {
    document.querySelector('#page').style.display="block";
    document.querySelector('#load').style.display="none";
  }));