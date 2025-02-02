let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

function selectImage(index) {
    currentIndex = index;
    showImage(currentIndex);
}

function openLightbox(index) {
    lightbox.style.display = "flex";
    lightboxImg.src = images[index].src;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}
setInterval(autoSlide, 3000);
