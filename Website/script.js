let logo = document.querySelector('.logo')
let theme = document.querySelector('.switch')
let log = document.querySelector('.sign_up')
log.addEventListener("click",()=>
  {
    console.log("Helo tehre")
    window.location.href = "login/index.html";
  })
// let darkmode = Storage.getItem (acitve)
theme.addEventListener("click",function(e)
{
   e.stopImmediatePropagation();

    let bod = document.querySelector('body')
    console.log("Hello there")
})
logo.addEventListener("click", function () {
    window.location.href = "index.html";
  });