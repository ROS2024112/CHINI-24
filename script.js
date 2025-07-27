// Show welcome message on page load
window.addEventListener("load", () => {
    alert("👋 Welcome to Manga India!");
});



// Highlight nav link on hover
const setupNavHover = () => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.backgroundColor = "#ffcc00";
            link.style.color = "#000";
        });
        link.addEventListener("mouseout", () => {
            link.style.backgroundColor = "";
            link.style.color = "";
        });
    });
};

// Run all setup functions
createDarkModeToggle();
setupNavHover();
