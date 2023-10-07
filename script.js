// DOM Elements
const slider = document.getElementById("price-slider");
const toggle = document.getElementById("discount-toggle");
const priceDisplay = document.getElementById("price-display");
const pageviewsDisplay = document.getElementById("pageviews-display");

// Object containing pageviews and prices
const pageviewsPrices = {
  0: {
    pageviews: "10K",
    price: 8,
  },
  25: {
    pageviews: "50K",
    price: 12,
  },
  50: {
    pageviews: "100K",
    price: 16,
  },
  75: {
    pageviews: "500K",
    price: 24,
  },
  100: {
    pageviews: "1M",
    price: 36,
  },
};

// Sets the display to the correct values
const setDisplay = (value) => {
  let content = pageviewsPrices[value];
  priceDisplay.innerHTML =
    "$" + (content.price - content.price * discount()).toFixed(2);
  pageviewsDisplay.innerHTML = content.pageviews;
};

// Returns discount if checked, else returns 0
const discount = () => (toggle.checked ? 0.25 : 0);

// Event listeners
slider.oninput = () => {
  const value = slider.value;
  setDisplay(slider.value);
  slider.style.background = `linear-gradient(to right, var(--soft-cyan) ${value}%, var(--light-gray-blue) ${value}%)`;
};

toggle.onclick = () => {
  setDisplay(slider.value);
};

// Initial display
setDisplay(slider.value);

//
