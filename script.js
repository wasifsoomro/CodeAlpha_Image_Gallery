//Set a current active element
let currentIndex = 0;

//Now select a all <img> elements iside a contaoner class gallery
const images = document.querySelectorAll(".gallery img");

//Now get a element have lightbox and lightbox-img id
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

//now create a showimage function that remove active class from element and add active class in given index
function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

//Now create a select image function that update current index to the selected image index and then display a image
function selectImage(index) {
    currentIndex = index;
    showImage(currentIndex);
}


// Here first update a style of light box to dispaly flex to making it visible and lightbox imag.src updats with clicked images to display
function openLightbox(index) {
    lightbox.style.display = "flex";
    lightboxImg.src = images[index].src;
}

//Now update a style of light box to dispaly none
function closeLightbox() {
    lightbox.style.display = "none";
}


// This autoslide function change a image after every three seconds 
function autoSlide() {
    // % images.length this loops back to first image after reachig last 
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}
setInterval(autoSlide, 3000);
