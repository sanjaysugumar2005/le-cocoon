// ========================================
// HERO SLIDER
// ========================================

let currentSlide = 0;

const slides = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg",
    "images/slide4.jpg"
];

const heroSlide = document.getElementById("heroSlide");


function showSlide() {

    heroSlide.src = slides[currentSlide];

}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide();

}


function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide();

}


// Automatically change image every 5 seconds

setInterval(function () {

    nextSlide();

}, 10000);



// ========================================
// GALLERY - SEE MORE / SEE LESS
// ========================================

function toggleGallery() {

    const moreGallery =
        document.getElementById("moreGallery");

    const seeMoreButton =
        document.getElementById("seeMoreButton");


    moreGallery.classList.toggle("show");


    if (moreGallery.classList.contains("show")) {

        seeMoreButton.textContent = "See Less";

    } else {

        seeMoreButton.textContent = "See More";

    }

}



// ========================================
// GALLERY - ALL 13 IMAGES
// ========================================

const galleryImages = [

    "images/tares.jpg",
    "images/hall.jpg",
    "images/singlebed.jpg",
    "images/doublebedd.jpg",
    "images/varanda.jpg",
    "images/bathroom.jpg",

    "images/doublebed.jpg",
    "images/queen.jpg",
    "images/queenbeds.jpg",
    "images/twobed.jpg",
    "images/vaaranda.jpg",
    "images/house.jpg",
    "images/fronthouse.jpg"

];


let currentImageIndex = 0;


const imageLightbox =
    document.getElementById("imageLightbox");


const lightboxImage =
    document.getElementById("lightboxImage");



// ========================================
// OPEN IMAGE
// ========================================

function openImage(index) {

    currentImageIndex = index;

    lightboxImage.src =
        galleryImages[currentImageIndex];

    imageLightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}



// ========================================
// NEXT IMAGE
// ========================================

function nextImage() {

    currentImageIndex++;

    if (currentImageIndex >= galleryImages.length) {

        currentImageIndex = 0;

    }

    lightboxImage.src =
        galleryImages[currentImageIndex];

}



// ========================================
// PREVIOUS IMAGE
// ========================================

function previousImage() {

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            galleryImages.length - 1;

    }

    lightboxImage.src =
        galleryImages[currentImageIndex];

}



// ========================================
// CLOSE IMAGE
// ========================================

function closeImage() {

    imageLightbox.classList.remove("active");

    lightboxImage.src = "";

    document.body.style.overflow = "";

}



// ========================================
// CLICK OUTSIDE TO CLOSE
// ========================================

imageLightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === imageLightbox) {

            closeImage();

        }

    }
);



// ========================================
// KEYBOARD CONTROLS
// ========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (!imageLightbox.classList.contains("active")) {
            return;
        }


        if (event.key === "ArrowRight") {

            nextImage();

        }


        if (event.key === "ArrowLeft") {

            previousImage();

        }


        if (event.key === "Escape") {

            closeImage();

        }

    }
);



// ========================================
// REVIEWS SLIDER
// ========================================

const reviewCards =
    document.querySelectorAll(".review-card");


const previousReviewButton =
    document.querySelector(
        ".review-arrow:first-child"
    );


const nextReviewButton =
    document.querySelector(
        ".review-arrow:last-child"
    );


let currentReview = 0;



// ========================================
// SHOW REVIEW
// ========================================

function showReview(index) {

    reviewCards.forEach(function (card) {

        card.style.display = "none";

    });


    if (reviewCards.length > 0) {

        reviewCards[index].style.display = "flex";

    }

}



// ========================================
// NEXT REVIEW
// ========================================

function nextReview() {

    currentReview++;

    if (currentReview >= reviewCards.length) {

        currentReview = 0;

    }

    showReview(currentReview);

}



// ========================================
// PREVIOUS REVIEW
// ========================================

function previousReview() {

    currentReview--;

    if (currentReview < 0) {

        currentReview =
            reviewCards.length - 1;

    }

    showReview(currentReview);

}



// ========================================
// REVIEW BUTTON EVENTS
// ========================================

if (previousReviewButton) {

    previousReviewButton.addEventListener(
        "click",
        previousReview
    );

}


if (nextReviewButton) {

    nextReviewButton.addEventListener(
        "click",
        nextReview
    );

}



// ========================================
// INITIAL REVIEW
// ========================================

if (reviewCards.length > 0) {

    showReview(currentReview);

}

// ========================================
// BOOKING SYSTEM
// ========================================

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

const guestButton = document.getElementById("guestButton");
const guestMenu = document.getElementById("guestMenu");

const adultCount = document.getElementById("adultCount");
const childrenCount = document.getElementById("childrenCount");
const infantCount = document.getElementById("infantCount");

const guestSummary = document.getElementById("guestSummary");
const nightCount = document.getElementById("nightCount");
const totalPrice = document.getElementById("totalPrice");

const reserveButton = document.getElementById("reserveButton");


// PRICE PER NIGHT
const pricePerNight = 1951;


// GUEST COUNTS
let adults = 2;
let children = 0;
let infants = 0;


// ========================================
// SET MINIMUM DATE
// ========================================

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const todayDate = `${year}-${month}-${day}`;

checkin.min = todayDate;
checkout.min = todayDate;


// ========================================
// GUEST MENU OPEN / CLOSE
// ========================================

guestButton.addEventListener("click", function () {

    guestMenu.classList.toggle("show");

});


// ========================================
// CHANGE GUEST COUNT
// ========================================

function changeGuest(type, amount) {

    if (type === "adults") {

        const newAdults = adults + amount;

        // Maximum total guests = 2
        if (newAdults < 1) {
            return;
        }

        if (newAdults + children > 2) {
            alert("Le Cocoon allows a maximum of 2 guests.");
            return;
        }

        adults = newAdults;
    }


    if (type === "children") {

        const newChildren = children + amount;

        if (newChildren < 0) {
            return;
        }

        if (adults + newChildren > 2) {
            alert("Le Cocoon allows a maximum of 2 guests.");
            return;
        }

        children = newChildren;
    }


    if (type === "infants") {

        const newInfants = infants + amount;

        if (newInfants < 0) {
            return;
        }

        // Infants do NOT count toward the 2 guest limit
        infants = newInfants;
    }


    updateGuestDisplay();

}


// ========================================
// UPDATE GUEST DISPLAY
// ========================================

function updateGuestDisplay() {

    adultCount.textContent = adults;
    childrenCount.textContent = children;
    infantCount.textContent = infants;

    const totalGuests = adults + children;

    let guestText = `${totalGuests} guests`;

    if (totalGuests === 1) {
        guestText = "1 guest";
    }

    if (infants > 0) {
        guestText += `, ${infants} infant`;

        if (infants > 1) {
            guestText = `${totalGuests} guests, ${infants} infants`;
        }
    }

    guestSummary.textContent = guestText;

    guestButton.querySelector("span:first-child").textContent = guestText;
}


// ========================================
// CHECK-IN DATE
// ========================================

checkin.addEventListener("change", function () {

    checkout.min = checkin.value;

    // Clear checkout if it is before check-in
    if (checkout.value && checkout.value <= checkin.value) {
        checkout.value = "";
    }

    calculatePrice();

});


// ========================================
// CHECK-OUT DATE
// ========================================

checkout.addEventListener("change", function () {

    calculatePrice();

});


// ========================================
// CALCULATE NIGHTS + PRICE
// ========================================

function calculatePrice() {

    if (!checkin.value || !checkout.value) {

        nightCount.textContent = "0";
        totalPrice.textContent = "₹0";

        return;
    }


    const checkinDate = new Date(checkin.value);
    const checkoutDate = new Date(checkout.value);


    const difference =
        checkoutDate.getTime() - checkinDate.getTime();


    const nights =
        difference / (1000 * 60 * 60 * 24);


    if (nights <= 0) {

        nightCount.textContent = "0";
        totalPrice.textContent = "₹0";

        return;
    }


    const total = nights * pricePerNight;


    nightCount.textContent = nights;

    totalPrice.textContent =
        `₹${total.toLocaleString("en-IN")}`;
}

// ========================================
// RESERVE BUTTON → WHATSAPP
// ========================================

reserveButton.addEventListener("click", function () {

    // Check dates
    if (!checkin.value || !checkout.value) {
        alert("Please select your check-in and check-out dates.");
        return;
    }


    const checkinDate = new Date(checkin.value);
    const checkoutDate = new Date(checkout.value);


    // Check-in cannot be in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkinDate < today) {
        alert("Please select a valid check-in date.");
        return;
    }


    // Check-out must be after check-in
    if (checkoutDate <= checkinDate) {
        alert("Check-out must be after check-in.");
        return;
    }


    // Calculate nights
    const nights =
        (checkoutDate.getTime() - checkinDate.getTime()) /
        (1000 * 60 * 60 * 24);


    // Check nights
    if (nights < 1) {
        alert("Your stay must be at least 1 night.");
        return;
    }


    // Calculate guests
    const totalGuests = adults + children;


    // Maximum 2 guests
    if (totalGuests > 2) {
        alert("Le Cocoon allows a maximum of 2 guests.");
        return;
    }


    // Calculate total price
    const total = nights * pricePerNight;


    // Format dates
    const formattedCheckin =
        checkinDate.toLocaleDateString("en-IN");

    const formattedCheckout =
        checkoutDate.toLocaleDateString("en-IN");


    // WhatsApp message
    const message =
        `Hello Le Cocoon 👋\n\n` +
        `I would like to book a stay.\n\n` +
        `🏡 Le Cocoon\n` +
        `📅 Check-in: ${formattedCheckin}\n` +
        `📅 Check-out: ${formattedCheckout}\n` +
        `🌙 Nights: ${nights}\n` +
        `👥 Guests: ${totalGuests}\n` +
        `👶 Infants: ${infants}\n` +
        `💰 Total: ₹${total.toLocaleString("en-IN")}\n\n` +
        `Please confirm the availability. Thank you!`;


    // Owner WhatsApp
    const whatsappURL =
        `https://wa.me/917339476299?text=${encodeURIComponent(message)}`;


    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});
