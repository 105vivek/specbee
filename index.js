// Open the Speaker Detail Modal
function openSpeakerDetail(speakerId) {
  const modal = document.getElementById("speaker-modal");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  const btn = document.createElement("button");
  btn.textContent = "x";
  btn.classList.add("speaker-modal");
  const img = document.createElement("img");
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWm4woEJIoo2ICpyegi7ugjemX8euLDpflQ&s";
  const name = document.createElement("h2");
  name.textContent = "John Doe";
  const about = document.createElement("p");
  about.textContent =
    "you might fetch additional data or use an array of speaker data";
  modal.append(img, name, about);
}

// Close the Speaker Detail Modal
function closeSpeakerDetail() {
  const modal = document.getElementById("speaker-modal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSpeakerDetail();
  }
});

// Select the container and define the step size (width of one card plus the gap)
const sliderContainer = document.getElementById("sliderContainer");
const cardWidth = 220; // Adjust according to the card's width + margin

// Move the slider left or right by the specified step
function moveSlider(direction) {
  const maxScrollLeft =
    sliderContainer.scrollWidth - sliderContainer.clientWidth;

  // Calculate the new scroll position
  let newScrollPosition = sliderContainer.scrollLeft + direction * cardWidth;

  // Prevent scrolling beyond the content
  if (newScrollPosition < 0) {
    newScrollPosition = 0;
  } else if (newScrollPosition > maxScrollLeft) {
    newScrollPosition = maxScrollLeft;
  }

  // Scroll the container to the new position
  sliderContainer.scrollTo({
    left: newScrollPosition,
    behavior: "smooth",
  });
}
