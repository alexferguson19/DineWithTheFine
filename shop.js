let basket = [];

function addToBasket(name, price) {
  basket.push({ name, price });
  updateBasketCount();
}

function updateBasketCount() {
  document.getElementById("basketCount").textContent = basket.length;
}

function openBasket() {
  document.getElementById("basketModal").style.display = "flex";
  displayBasketItems();
}

function closeBasket() {
  document.getElementById("basketModal").style.display = "none";
}

function displayBasketItems() {
  const basketItemsDiv = document.getElementById("basketItems");
  basketItemsDiv.innerHTML = "";
  let total = 0;

  basket.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - £${item.price.toFixed(2)}`;
    basketItemsDiv.appendChild(div);
    total += item.price;
  });

  document.getElementById("totalPrice").textContent = `Total: £${total.toFixed(2)}`;
}

function submitOrder(event) {
  event.preventDefault();
  
  if (basket.length === 0) {
    alert("Your basket is empty!");
    return;
  }

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const postcode = document.getElementById("postcode").value;
  const city = document.getElementById("city").value;

  if (!name || !address || !postcode || !city) {
    alert("Please fill in all delivery fields.");
    return;
  }

  alert(`Thank you ${name}! Your books will be delivered to ${address}, ${city}, ${postcode}.`);
  basket = []; // Clear basket after order
  updateBasketCount();
  closeBasket();
}





function subscribe(event) {
  event.preventDefault();
  
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value.trim();

  if (email) {
    alert(`Thank you for subscribing, ${email}! 🎉`);
    emailInput.value = ""; // Clear the input
  } else {
    alert("Please enter a valid email address.");
  }
}



const modal = document.getElementById('newsletter-modal');
const closeButton = document.querySelector('.close-button');
const form = document.getElementById('popup-newsletter-form');
const message = document.getElementById('popup-form-message');

// Replace with your real Google Form URL
const formURL = "https://docs.google.com/forms/u/1/d/1V_TAT58zATeb_xXFT6I48Kp-5KWGCIdIVIM0sv9gkBM/previewResponse";

// Show modal after 5 seconds
setTimeout(() => {
  modal.style.display = "block";
}, 5000);

// Close modal when X button clicked
closeButton.addEventListener('click', () => {
  modal.style.display = "none";
});

// Close modal if clicked outside of the modal content
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Submit form
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData();
  const email = document.getElementById('popup-email').value;

  formData.append('entry.1291416596', email); // <-- your entry number here

  fetch(formURL, {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  }).then(() => {
    message.textContent = "Thanks for subscribing!";
    form.reset();
  }).catch(() => {
    message.textContent = "Something went wrong.";
  });
});

