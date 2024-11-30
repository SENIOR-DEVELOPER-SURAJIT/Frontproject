

const boxes = document.querySelectorAll('.offer-box.expandable');

// Handle box expansion
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    // Close other boxes
    boxes.forEach((b) => {
      if (b !== box) b.classList.remove('expanded');
    });

    // Toggle the clicked box
    box.classList.toggle('expanded');
  });
});

// Prevent dropdown clicks from toggling the box
const dropdowns = document.querySelectorAll('.offer-box select');
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the parent
  });
});
