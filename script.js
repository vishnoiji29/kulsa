function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    const hamburger = document.querySelector(".hamburger");

    // Toggle Menu Visibility
    menu.classList.toggle("active");

    // Animate Hamburger Icon
    hamburger.classList.toggle("toggle");
}

// Close menu when a link is clicked (for better UX)
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        toggleMenu();
    });
});
