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
// const wait = (delay = 0) =>
//   new Promise(resolve => setTimeout(resolve, delay));

  
//   function setVisible(selector, visible) {
//     document.querySelector(selector).style.display = visible ? 'block' : 'none';
//   }
// /*   
//   setVisible('.page', false);
//   setVisible('#load', true); */
  
// document.addEventListener('DOMContentLoaded', wait(2000).then(() => {
//     setVisible('#page', true);
//     setVisible('#load', false);
//   }));
  
/*   onReady(function() {
    setVisible('#page', true);
    setVisible('#load', false);
  }); */
  
  const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));
  
  function setVisible(selector, visible) {
        document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  function work() {
    wait(1000).then(() => {
      setVisible('#page', true);
      setVisible('#loading', false);
    })
  }

  if (document.readyState == 'loading') {
    // ещё загружается, ждём события
    document.addEventListener('DOMContentLoaded', work);
  } else {
    // DOM готов!
    setVisible('#page', false);
    setVisible('#load', true);
  }