// ALTERNATE TITLE
let alertShow = false;
setInterval(() => {
  document.title =
  alertShow ? "Punit Parmar"
            : "#(231)...";
  
  alertShow = !alertShow;
}, 500);

// TYPING SCRIPT
var typed = new Typed(".text", {
  strings: ["Software Engineer", "Frontend Developer", "Web Developer"],
  typeSpeed: 120,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

// INSPECT POPUP
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  var t = document.getElementById("custom-popup");
  (t.style.display = "block"),
    setTimeout(function () {
      t.style.display = "none";
    }, 3e3);
}),
  document.addEventListener("keydown", function (e) {
    if (
      (e.ctrlKey && e.shiftKey && "C" === e.key) ||
      (e.ctrlKey && "s" === e.key) ||
      (e.ctrlKey && "p" === e.key) ||
      (e.ctrlKey && "u" === e.key) ||
      "F12" === e.key
    ) {
      e.preventDefault();
      var t = document.getElementById("custom-popup");
      (t.style.display = "block"),
        setTimeout(function () {
          t.style.display = "none";
        }, 3e3);
    }
  });