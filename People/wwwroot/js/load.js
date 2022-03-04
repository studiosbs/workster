const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

document.addEventListener('DOMContentLoaded', () =>
  wait(1000).then(() => {
    /* document.querySelector("#load").classList("load-diabled"); */
    $("#load-img").fadeOut("slow");
    document.querySelector('#page').style.display="block";
    wait(800).then(() => {
      document.querySelector('#load').style.display="none";
    });
  }));