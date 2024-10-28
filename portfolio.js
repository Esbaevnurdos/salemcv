const webProjectsBtn = document.getElementById("webProjectsBtn");
const graphicDesignBtn = document.getElementById("graphicDesignBtn");

const webProjectsSection = document.querySelector(".image1");
const graphicDesignSection = document.querySelector(".image2");

function showSection(sectionToShow, sectionToHide) {
    sectionToHide.classList.remove("show"); // Remove show effect
    sectionToHide.classList.add("hidden");  // Hide completely
    
    sectionToShow.classList.remove("hidden"); // Unhide for animation
    setTimeout(() => {
        sectionToShow.classList.add("show"); // Apply show effect with animation
    }, 50); // Slight delay for smooth animation
}

// Event listeners for buttons
webProjectsBtn.addEventListener("click", () => {
    if (!webProjectsBtn.classList.contains("active")) {
        webProjectsBtn.classList.add("active");
        graphicDesignBtn.classList.remove("active");
        showSection(webProjectsSection, graphicDesignSection);
    }
});

graphicDesignBtn.addEventListener("click", () => {
    if (!graphicDesignBtn.classList.contains("active")) {
        graphicDesignBtn.classList.add("active");
        webProjectsBtn.classList.remove("active");
        showSection(graphicDesignSection, webProjectsSection);
    }
});
