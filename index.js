const firebaseConfig = {
    apiKey: "AIzaSyBFnhi1-Jke3BvshwF-znX8aXG_geaDgPM",
    authDomain: "landingpage-minihackatho-d22d6.firebaseapp.com",
    databaseURL: "https://landingpage-minihackatho-d22d6-default-rtdb.firebaseio.com",
    projectId: "landingpage-minihackatho-d22d6",
    storageBucket: "landingpage-minihackatho-d22d6.firebasestorage.app",
    messagingSenderId: "422656795364",
    appId: "1:422656795364:web:b4307396c07c5e41e802f1"
  };

firebase.initializeApp(firebaseConfig);
var contactformDB = firebase.database().ref('contactForm');
document.getElementById("contactForm").addEventListener("submit",submitform);
function submitform(e){
  e.preventDefault();

  var name = getElementVal ('name');
  var emailid = getElementVal ('emailid');
  var message = getElementVal ('message');
  saveMessages(name,emailid,message);
  document.querySelector('.alert').style.display ="block";

  setTimeout(
    ()=>{
      document.querySelector('.alert').style.display ="none";
    },3000);
    document.getElementById('contactForm').reset();
}
const saveMessages = (name,emailid,message)=>{
  var newContactForm = contactformDB.push();
  newContactForm.set({ 
    name: name,
    emailid: emailid,
    message: message
  });
}
const getElementVal = (id) =>{
  return document.getElementById(id).Value;
}
document.addEventListener("DOMContentLoaded", () => {
  let cartCount = 0;


  const updateCartCount = () => {
      const cartCounter = document.querySelector('.addnumber');
      cartCounter.textContent = cartCount;
  };

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const productId = button.getAttribute('data-product-id');
          console.log(`Product ID ${productId} added to cart.`);
          cartCount += 1;
          updateCartCount();
          alert("Product added to cart!");
      });
  });
});
