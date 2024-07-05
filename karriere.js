// JavaScript-Code für die Arda Güler - Karriere-Seite mit Animationen

// Funktion zur Animation des Seitentitels
function animatePageTitle() {
    const titleElement = document.querySelector("h1");
    if (titleElement) {
        titleElement.style.transition = "transform 1s ease-in-out";
        titleElement.style.transform = "rotate(360deg)";
    }
}

// Funktion zur Hervorhebung der Karrieredetails
function highlightCareerDetails() {
    const careerDetailsElements = document.querySelectorAll("p");
    careerDetailsElements.forEach((element) => {
        element.addEventListener("mouseover", function() {
            element.style.backgroundColor = "#C6E2FF";
        });
        element.addEventListener("mouseout", function() {
            element.style.backgroundColor = ""; // Zurücksetzen auf Standardfarbe
        });
    });
}

// Rufe die Animationsfunktionen auf, wenn das DOM geladen ist
document.addEventListener("DOMContentLoaded", function() {
    animatePageTitle();
    highlightCareerDetails();
});
