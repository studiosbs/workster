/* const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading");

let load = 0;
let int = setInterval(blurring,30);

function blurring(){
  load++
  if(load>110){
    clearInterval(int);
    loadText.style.display = "none";
  }
//  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
//   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
} */
function onReady(callback) {
    function loadingScreen() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalId);
          callback.call(this);
        }
        document.querySelector(".loading").style.opacity = scale(intervalId, 0, 100, 1, 0)
      }
    var intervalId = window.setInterval(loadingScreen, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.bg', true);
    setVisible('#load', false);
  });
  
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }