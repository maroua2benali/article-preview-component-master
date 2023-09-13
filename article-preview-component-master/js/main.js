const shareButton = document.querySelector(".share-button button");
const popover = document.querySelector(".popover");

shareButton.addEventListener("click", (event) => {
  // Toggle the 'active' class on the popover to show/hide it
  popover.classList.toggle("active");

  // Prevent the click event from propagating to the document click event
  event.stopPropagation();
});

// Add a click event listener to the document
document.addEventListener("click", (event) => {
  // Check if the clicked element is not inside the popover
  if (!popover.contains(event.target)) {
    // Close the popover by removing the 'active' class
    popover.classList.remove("active");
  }
});

// Add a click event listener to the popover to prevent closing when clicking inside it
popover.addEventListener("click", (event) => {
  // Prevent the click event from propagating to the document click event
  event.stopPropagation();
});
