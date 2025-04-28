const recipes = [
  { name: "Spicy Prawn Ramen", link: "SpicyPrawnRamen.html" },
  { name: "White Chocolate Raspberry Cheesecake", link: "WhiteChocolateRaspberryCheesecake.html" },
  { name: "Lemon Grass Chili Prawns", link: "LemonGrassChiliPrawns.html" },
  { name: "Apollo Chicken Ramen", link: "ApolloChickenRamen.html" },
  { name: "Classic Chocolate Cake", link: "ClassicChocolateCake.html" },
];

const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions');

searchInput.addEventListener('input', function() {
  const query = this.value.trim().toLowerCase();
  suggestionsContainer.innerHTML = '';

  if (query.length === 0) return;

  const filteredRecipes = recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(query)
  );

  filteredRecipes.forEach(recipe => {
    const div = document.createElement('div');
    div.classList.add('suggestion-item');
    div.textContent = recipe.name;
    div.addEventListener('click', function() {
      window.location.href = recipe.link;
    });
    suggestionsContainer.appendChild(div);
  });
});








<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
</script>

<form id="newsletterForm">
  <input type="email" id="userEmail" placeholder="Your email" required>
  <button type="submit">Subscribe</button>
</form>

<script>
  document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      user_email: document.getElementById('userEmail').value,
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Thank you for subscribing!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Oops, something went wrong!');
    });
  });
</script>







const showSignUp = document.getElementById('showSignUp');
const showLogin = document.getElementById('showLogin');
const signUpForm = document.getElementById('signUpForm');
const loginForm = document.getElementById('loginForm');

showSignUp.addEventListener('click', () => {
  signUpForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

showLogin.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  signUpForm.classList.add('hidden');
});

// Handle Sign Up
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signUpName').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  console.log('Signed Up:', { name, email, password });
  alert(`Welcome, ${name}! Your account has been created.`);
  signUpForm.reset();
});

// Handle Log In
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  console.log('Logged In:', { email, password });
  alert(`Logged in as ${email}`);
  loginForm.reset();
});









// 1. Create a list of available recipes and their links
const recipes = [
  { name: "Spicy Prawn Ramen", link: "SpicyPrawnRamen.html" },
  { name: "Almond Croissant Cookies", link: "AlmondCroissantCookies.html" },
  { name: "Cinnamon Blondies", link: "CinnamonBlondies.html" },
  { name: "Bagels", link: "Bagels.html" },
  { name: "White Chocolate Raspberry Cake", link: "WhiteChocolateRaspberryCake.html" },
  { name: "Carrot Cake", link: "CarrotCake.html" },
  { name: "Lemon Tart", link: "LemonTart.html" },
  { name: "Monkey Bread", link: "MonkeyBread.html" },
  { name: "Korean Beef Ramen", link: "KoreanBeefRamen.html" },
  { name: "Chicken Ratatouille Pasta", link: "ChickenRatatouillePasta.html" },
  { name: "Carbonara", link: "Carbonara.html" }
];

// 2. Listen for when the search button is clicked
document.getElementById("searchBtn").addEventListener("click", function() {
  const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();

  // 3. Search for matching recipes
  const foundRecipe = recipes.find(recipe => recipe.name.toLowerCase().includes(searchInput));

  if (foundRecipe) {
    // 4. If found, redirect to that recipe page
    window.location.href = foundRecipe.link;
  } else {
    // 5. If not found, show an alert
    alert("Sorry, no matching recipe found.");
  }
});

