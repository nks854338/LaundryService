document.addEventListener('DOMContentLoaded', function () {
    // Define the services object
    const services = {
      "Dry cleaning": { price: 200.00, img: "image/drying.png" },
      "Ironing": { price: 30.00, img: "image/ironing-board.png" },
      "Stain removal": { price: 550.00, img: "image/stain-remover.png" },
      "Wash and fold": { price: 150.00, img: "image/laundry.png" },
      "Wash and iron": { price: 350.00, img: "image/iron.png" },
      "Wedding dress cleaning": { price: 3000.00, img: "image/wedding.png" }
    };
  
    let cart = [];
    const addToCartButtons = document.querySelectorAll('.addToCartBtn');
    const addedItemTable = document.getElementById('addedItemTable');
    const totalAmountValue = document.querySelector('.totalAmountValue');
    const bookNowButton = document.querySelector('.submit');
  
    // Function to update the cart table and total amount
    function updateCart() {
      // Clear the table except for the header row
      while (addedItemTable.rows.length > 1) {
        addedItemTable.deleteRow(1);
      }
  
      // Add each item to the table
      let totalAmount = 0;
      cart.forEach((item, index) => {
        const row = addedItemTable.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = item.name;
        row.insertCell(2).innerText = `₹${item.price.toFixed(2)}`;
        totalAmount += item.price;
      });
  
      // Update the total amount
      totalAmountValue.innerText = `₹${totalAmount.toFixed(2)}`;
    }
  
    // Event listener for adding items to the cart
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const serviceName = this.closest('tr').querySelector('.serviceName').innerText;
        const service = services[serviceName];
        if (service) {
          cart.push({ name: serviceName, price: service.price });
          updateCart();
        }
      });
    });
  
    // Function to send email using email.js
    function sendEmail(details) {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', details, 'YOUR_PUBLIC_KEY')
        .then(response => {
          alert('Email sent successfully!');
        }, error => {
          alert('Failed to send email: ' + JSON.stringify(error));
        });
    }
  
    // Event listener for the Book Now button
    bookNowButton.addEventListener('click', function (event) {
      event.preventDefault();
      const userName = document.querySelector('.userName').value;
      const userEmail = document.querySelector('.inputEmail .inputUserDetails').value;
      const userPhone = document.querySelector('.inputPhone .inputUserDetails').value;
  
      if (userName && userEmail && userPhone && cart.length > 0) {
        const details = {
          user_name: userName,
          user_email: userEmail,
          user_phone: userPhone,
          services: cart.map(item => `${item.name} - ₹${item.price.toFixed(2)}`).join(', '),
          total_amount: totalAmountValue.innerText
        };
  
        sendEmail(details);
      } else {
        alert('Please fill in all details and add at least one service to the cart.');
      }
    });
  });
  
  // Initialize email.js with your user ID
  (function () {
    emailjs.init('YOUR_PUBLIC_KEY');
  })();
  
















  let cartbtn1 = document.getElementById("cartBtn1");
let cartbtn2 = document.getElementById("cartBtn2");
let cartbtn3 = document.getElementById("cartBtn3");
let cartbtn4 = document.getElementById("cartBtn4");
let cartbtn5 = document.getElementById("cartBtn5");
let cartbtn6 = document.getElementById("cartBtn6");
let cartbtn7 = document.getElementById("cartBtn7");


let addedItem = [];


// An Object that store laundry services 
let services = [
["Dry cleaning", 200.00],
["Ironing", 30.00],
["Stain removal", 550.00],
["Wash and fold", 150.00],
["Dry cleaning", 200.00],
["Wash and iron", 350.00],
["Wedding dress cleaning", 3000.00],
];

console.log(services[0]);










