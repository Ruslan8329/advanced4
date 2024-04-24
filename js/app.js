let trafficLight = document.querySelector(".traffic-light");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let nextButton = document.querySelector(".nextButton");

let colorsArray = [color1, color2, color3];
let colorIndex = 0;

nextButton.addEventListener("click", () => {
  colorsArray[colorIndex].style.backgroundColor = "";

  colorIndex += 1;

  if (colorIndex >= colorsArray.length) {
    colorIndex = 0;
  }
  colorsArray[colorIndex].style.backgroundColor = "yellow";
});

// nextButton.addEventListener("click", () => {
//   color1.style.backgroundColor = "red";
// });
// nextButton.addEventListener("click", () => {
//   color2.style.backgroundColor = "yellow";
// });
// nextButton.addEventListener("click", () => {
//   color3.style.backgroundColor = "green";
// });

/////////////////////////////////////////////////////////////////////////////////////////////

let books = document.querySelector(".books");
let book1 = document.querySelector(".book1");
let book2 = document.querySelector(".book2");
let book3 = document.querySelector(".book3");
let booksArray = [book1, book2, book3];
let currentIndex = 0;

books.addEventListener("click", (e) => {
  let index = booksArray.indexOf(e.target);
  booksArray[currentIndex].style.backgroundColor = "";
  booksArray[index].style.backgroundColor = "orange";
  currentIndex = index;
});

// books.addEventListener("click", () => {
//   book1.style.backgroundColor = "orange";
// });
// books.addEventListener("click", () => {
//   book2.style.backgroundColor = "orange";
// });
// books.addEventListener("click", () => {
//   book3.style.backgroundColor = "orange";
// });

///////////////////////////////////////////////////////////////////////////////////////
let tooltipElem;
document.onmouseover = function (e) {
  let target = e.target;
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement("div");
  tooltipElem.className = "tooltip";
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();
  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 5;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) top = coords.top + target.offsetHeight + 5;
  tooltipElem.style.left = left + "px";
  tooltipElem.style.top = bottom + "px";
};
document.onmouseout = (e) => {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};
