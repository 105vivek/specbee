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
    "https://s3-alpha-sig.figma.com/img/d6a6/fffd/2100d987b5946aa1df33cf0f6c34a418?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0ozEGQKCEzpMDFiGB0WI7e3Jy5hs~XAzkQEmXckRff9Yql3RG4oZ3qz7U-lmzlgN5l~VSp88OF3WSEHLG8hewYzujk8BfcrkQvmBJSeDEvGfDm6uDq5Hsx9cQ1cfgLQHZz10fHEBoS7H8kb73P-hWtJj2qYrDYGdR5YhEHfHT9EQehf5C90C4PZkDVQRu6FZWCVcxHr7FcTZGWaNC-LSjOSmA4KZaKs1FIk-OEuIlV9fK7KSQoo-7pSIHsF2dGTfhxvY4s8ywp-UY0qcUPSa7BHmFJKLlpd~NhfU2JEvdZGid5XK-F6O7RbD4CLUF1cc6yaUuh1WrCdQ9fM~aRMJQ__";
  const name = document.createElement("h2");
  name.textContent = "John Doe";
  const about = document.createElement("p");

  // Display the modal
  modal.style.display = "block";
  // const left = document.querySelector("speaker-modal__content__left");
  // const l=document.querySelector("speaker-modal__content__left_l");
  // const r=document.querySelector("speaker-modal__content__left_r");
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
