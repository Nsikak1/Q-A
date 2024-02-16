document.querySelectorAll(".card").forEach((element) => {
  element.addEventListener("click", toggleCollapse, { capture: true });
});

function toggleCollapse(ev) {
  let self = this;
  document.querySelectorAll(".card-content").forEach((e) => {
       if ( self.querySelector(".card-content") === e) return;
    e.style.display = "none";
  });
  document
    .querySelectorAll(".fa-plus-square")
    .forEach((e) => (e.style.visibility = "visible"));
  document
    .querySelectorAll(".fa-minus-square")
    .forEach((e) => (e.style.visibility = "hidden"));

  let cardContentStyle = this.querySelector(".card-content").style;
  let squareIcon = this.querySelector(".fa-plus-square").style;
  let minusIcon = this.querySelector(".fa-minus-square").style;
  if (cardContentStyle.display === "none" || cardContentStyle.display === "") {
    cardContentStyle.display = "block";
    squareIcon.visibility = "hidden";
    minusIcon.visibility = "visible";
  } else {
    cardContentStyle.display = "none";
    squareIcon.visibility = "visible";
    minusIcon.visibility = "hidden";
  }
}
