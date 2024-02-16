document.querySelectorAll(".button-collapse").forEach((e) => e.addEventListener("click", toggleCollapse));
let cardContentStyle = document.querySelector(".card-content").style;
let squareIcon = document.querySelector(".fa-plus-square").style;
let minusIcon = document.querySelector(".fa-minus-square").style;

function toggleCollapse(ev) {
    if (cardContentStyle.display === "none") {
        cardContentStyle.display = "block";
        squareIcon.visibility = "hidden";
        minusIcon.visibility = "visible";
    } else {
        cardContentStyle.display = "none";
        squareIcon.visibility = "visible";
        minusIcon.visibility = "hidden";

    }
}
