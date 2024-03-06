

$(document).ready(function () {
    const carouselImages = document.querySelector('.carousel-images');

function moveCarousel() {
    const firstImage = carouselImages.firstElementChild;
    carouselImages.style.transition = 'transform 1s ease-in-out';
    carouselImages.style.transform = `translateX(-${firstImage.offsetWidth}px)`;

    setTimeout(() => {
        carouselImages.appendChild(firstImage);
        carouselImages.style.transition = 'none';
        carouselImages.style.transform = 'translateX(0)';
        setTimeout(moveCarousel, 2000);
    }, 1000);
}

moveCarousel();


    $(".read-more").click(function () {


        // Get the previous sibling with the class ".text-limit"
        var $textLimit = $(this).prev(".text-limit");

        // Toggle the class "text-expanded"
        $textLimit.toggleClass("text-expanded");

        // Change the text of the clicked element based on the presence of "text-expanded" class
        if ($textLimit.hasClass("text-expanded")) {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }
    });
});