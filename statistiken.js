// JavaScript-Code für die Arda Güler - Karriere-Seite mit Animationen

// Funktion zur Animation des Seitentitels
function animatePageTitle() {
    const titleElement = document.querySelector("h1");
    if (titleElement) {
        titleElement.style.transition = "transform 1s ease-in-out";
        titleElement.style.transform = "rotate(360deg)";
    }
}

// Funktion zur Animation der einzelnen Abschnitte
function animateSections() {
    const sections = document.querySelectorAll(".container p");
    sections.forEach((section, index) => {
        section.style.opacity = "0";  // Setze die Anfangsopazität auf 0
        section.style.transition = `opacity 1s ease ${index * 0.5}s`;  // Füge Verzögerung für jeden Abschnitt hinzu
        section.addEventListener("mouseover", function() {
            section.style.opacity = "1";  // Beim Hovern den Abschnitt einblenden
        });
    });
}

// Rufe die Animationsfunktionen auf, wenn das DOM geladen ist
document.addEventListener("DOMContentLoaded", function() {
    animatePageTitle();
    animateSections();
});