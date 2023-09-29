// DOM Elements
const slider = document.getElementById("price-slider");
const toggle = document.getElementById("discount-toggle");
const priceDisplay = document.getElementById("price-display");
const pageviewsDisplay = document.getElementById("pageviews-display");

// Object containing pageviews and prices
const pageviewsPrices = {
  1: {
    pageviews: "10k",
    price: 8,
  },
  2: {
    pageviews: "50k",
    price: 12,
  },
  3: {
    pageviews: "100k",
    price: 16,
  },
  4: {
    pageviews: "500k",
    price: 24,
  },
  5: {
    pageviews: "1M",
    price: 36,
  },
};

// Sets the display to the correct values
const setDisplay = (value) => {
  let content = pageviewsPrices[value];
  priceDisplay.innerHTML = content.price - content.price * discount();
  pageviewsDisplay.innerHTML = content.pageviews;
};

// Returns discount if checked, else returns 0
const discount = () => (toggle.checked ? 0.25 : 0);

// Event listeners
slider.oninput = () => {
  setDisplay(slider.value);
};

toggle.onclick = () => {
  setDisplay(slider.value);
};

// Initial display
setDisplay(slider.value);
