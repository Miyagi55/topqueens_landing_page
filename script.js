// Show the modal when "Apply Now" button is clicked
document.getElementById("apply-now").addEventListener("click", function () {
    document.getElementById("form-modal").style.display = "flex";
});

// Close the modal when the close button is clicked
document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("form-modal").style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.onclick = function (event) {
    if (event.target === document.getElementById("form-modal")) {
        document.getElementById("form-modal").style.display = "none";
    }
};
