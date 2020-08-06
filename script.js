const container = document.querySelector(".chooser")
const circle = document.querySelector(".circle");
const title = document.querySelector(".title");

title.addEventListener("mouseenter", function () {
    title.style.height = "100px";
})
title.addEventListener("mouseleave", function () {
    title.style.height = "10px";
})

container.addEventListener("click", function (e) {
    if (circle.style.left === "5px") {
        circle.style.left = "33px";
    }else {
        circle.style.left = "5px";
    }
    e.preventDefault();
})

