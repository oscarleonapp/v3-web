var tabs = document.getElementsByClassName("nav-item");
var active = tabs[0];

function select(el) {
  active.classList.remove("active");
  active = el;
  active.classList.add("active");
}

select(active);

// autoplay
// var iter = 0;
// setInterval(() => {
//   iter = ++iter >= tabs.length ? 0 : iter;
//   select(tabs[iter]);
// }, 1500);
