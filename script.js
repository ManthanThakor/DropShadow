// Get the modal element
var modal = document.getElementById("imageModal");

// Get the modal image element
var modalImage = document.getElementById("modalImage");

// Get all the images that can be clicked
var images = document.querySelectorAll(".clickable-image");

// Get the <span> element to close the modal
var closeModal = document.querySelector(".close");

// When an image is clicked, open the modal and display the full-size image
images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImage.src = this.src;
  };
});

// When the close button is clicked, hide the modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Hide modal when clicked anywhere outside the modal image
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
