const parallax = document.getElementById
("parallax");

window.addEventListener("scroll", function ()
{
let offset = window.pageYOffset;
parallax.style.backgroundPositionY = pageYOffset* 0.7 + "px";

})
