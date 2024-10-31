const modal = document.querySelector(".s-popup");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close");
const btnOpen = document.querySelector(".terms-btn");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnOpen.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    closeModal();
  }
});
