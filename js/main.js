var link = document.querySelector(".modal-popape");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-close");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});