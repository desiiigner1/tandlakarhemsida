// Ladda in header och footer dynamiskt
document.addEventListener("DOMContentLoaded", () => {
    // Ladda header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").outerHTML = data;
        });

    // Ladda footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").outerHTML = data;
        });
});
