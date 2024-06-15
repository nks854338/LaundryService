let service = [
  {
    serviceName: "Dry cleaning",
    servicePrice: "200",
    serviceImg: "Laundry.png",
  },
  { serviceName: "Ironing", servicePrice: "30", serviceImg: "Laundry.png" },
  {
    serviceName: "Stain removal",
    servicePrice: "550",
    serviceImg: "Laundry.png",
  },
  {
    serviceName: "Wash and fold",
    servicePrice: "150",
    serviceImg: "Laundry.png",
  },
  {
    serviceName: "Dry cleaning",
    servicePrice: "200",
    serviceImg: "Laundry.png",
  },
  {
    serviceName: "Wash and iron",
    servicePrice: "350",
    serviceImg: "Laundry.png",
  },
  {
    serviceName: "Wedding dress cleaning",
    servicePrice: "3000",
    serviceImg: "Laundry.png",
  },
];

let cartItems = [];

let cartBtn1 = document.getElementById("cartBtn1");
let cartBtn2 = document.getElementById("cartBtn2");
let cartBtn3 = document.getElementById("cartBtn3");
let cartBtn4 = document.getElementById("cartBtn4");
let cartBtn5 = document.getElementById("cartBtn5");
let cartBtn6 = document.getElementById("cartBtn6");
let cartBtn7 = document.getElementById("cartBtn7");
let btn1 = true;
let btn2 = true;
let btn3 = true;
let btn4 = true;
let btn5 = true;
let btn6 = true;
let btn7 = true;

function getServices() {
  cartBtn1.addEventListener("click", () => {
    if (btn1 == true) {
      cartBtn1.innerText = "Remove Item";
      cartItems.push(service[0]);
      console.log(cartItems);
      btn1 = false;
    } else {
      cartBtn1.innerText = "Add Item";
      cartItems.pop(service[0]);
      console.log(cartItems);
      btn1 = true;
    }
  });

  cartBtn2.addEventListener("click", () => {
    if (btn2 == true) {
      cartBtn2.innerText = "Remove Item";
      cartItems.push(service[1]);
      console.log(cartItems);
      console.log(cartItems);
      btn2 = false;
    } else {
      cartBtn2.innerText = "Add Item";
      cartItems.pop(service[1]);
      console.log(cartItems);
      btn2 = true;
    }
  });

  cartBtn3.addEventListener("click", () => {
    if (btn3 == true) {
      cartBtn3.innerText = "Remove Item";
      cartItems.push(service[2]);
      console.log(cartItems);
      btn3 = false;
    } else {
      cartBtn3.innerText = "Add Item";
      cartItems.pop(service[2]);
      console.log(cartItems);
      btn3 = true;
    }
  });

  cartBtn4.addEventListener("click", () => {
    if (btn4 == true) {
      cartBtn4.innerText = "Remove Item";
      cartItems.push(service[3]);
      console.log(cartItems);
      btn4 = false;
    } else {
      cartBtn4.innerText = "Add Item";
      cartItems.pop(service[3]);
      console.log(cartItems);
      btn4 = true;
    }
  });

  cartBtn5.addEventListener("click", () => {
    if (btn5 == true) {
      cartBtn5.innerText = "Remove Item";
      cartItems.push(service[4]);
      console.log(cartItems);
      btn5 = false;
    } else {
      cartBtn5.innerText = "Add Item";
      cartItems.pop(service[4]);
      console.log(cartItems);
      btn5 = true;
    }
  });

  cartBtn6.addEventListener("click", () => {
    if (btn6 == true) {
      cartBtn6.innerText = "Remove Item";
      cartItems.push(service[5]);
      console.log(cartItems);
      btn6 = false;
    } else {
      cartBtn6.innerText = "Add Item";
      cartItems.pop(service[5]);
      console.log(cartItems);
      btn6 = true;
    }
  });

  cartBtn7.addEventListener("click", () => {
    if (btn7 == true) {
      cartBtn7.innerText = "Remove Item";
      cartItems.push(service[6]);
      console.log(cartItems);
      btn7 = false;
    } else {
      cartBtn7.innerText = "Add Item";
      cartItems.pop(service[6]);
      console.log(cartItems);
      btn7 = true;
    }
  });
}

function renderServices() {
  let totalAmountValue = document.getElementsByClassName("totalAmountValue");
  let addedItemTable = document.getElementById("addedItemTable");
  let totalAmount = 0;
  for(let i=0;i<cartItems.length;i++){
    const row = addedItemTable.insertRow();
    row.insertCell(0).innerText = i + 1;
    row.insertCell(1).innerText = cartItems.name;
    row.insertCell(2).innerText = `₹${cartItems.price}`;
    totalAmount += cartItems.price;
  };

  totalAmountValue.innerText = `₹${totalAmount}`;

  console.log(cartItems);
}

getServices();
renderServices();



// document.addEventListener("DOMContentLoaded", function () {
//   // Define the services object
//   const services = {
//     "Dry cleaning": { price: 200.0 },
//     Ironing: { price: 30.0 },
//     "Stain removal": { price: 550.0 },
//     "Wash and fold": { price: 150.0 },
//     "Wash and iron": { price: 350.0 },
//     "Wedding dress cleaning": { price: 3000.0 },
//   };

//   let cartbtn1 = document.getElementById("cartBtn1");
//   let cartbtn2 = document.getElementById("cartBtn2");
//   let cartbtn3 = document.getElementById("cartBtn3");
//   let cartbtn4 = document.getElementById("cartBtn4");
//   let cartbtn5 = document.getElementById("cartBtn5");
//   let cartbtn6 = document.getElementById("cartBtn6");
//   let cartbtn7 = document.getElementById("cartBtn7");

//   let addedCart = false;

//   let cart = [];
//   let addedItemTable = document.getElementById("addedItemTable");
//   let totalAmountValue = document.querySelector(".totalAmountValue");

//   function updateAddedItem() {
//     let totalAmount = 0;
//     cart.forEach((item, index) => {
//       const row = addedItemTable.insertRow();
//       row.insertCell(0).innerText = index + 1;
//       row.insertCell(1).innerText = item.name;
//       row.insertCell(2).innerText = `₹${item.price}`;
//       totalAmount += item.price;
//     });

//     totalAmountValue.innerText = `₹${totalAmount}`;

//     console.log(cart);
//   }

//   function updateRemovedItem() {
//     let totalAmount = totalAmountValue.innerText;
//     cart.forEach((item, index) => {
//       totalAmount -= item.price;
//     });

//     totalAmountValue.innerText = `₹${totalAmount}`;

//     console.log(cart);
//   }

//   cartbtn1.addEventListener("click", function () {
//     const serviceName =
//       this.closest("tr").querySelector(".serviceName").innerText;
//     const service = services[serviceName];
//     if (service) {
//       cart.push({ name: serviceName, price: service.price });
//       updateAddedItem();
//       document.querySelector(".updateCartToggleBtn").innerHtml =
//         '<div class="addToCartBtn" id="cartBtn2"> RemoveItem <i class="fa-solid fa-circle-plus"></i></div>';
//     } else if (service) {
//       cart.pop({ name: serviceName, price: service.price });
//       updateRemovedItem();
//     }
//   });

//   cartbtn2.addEventListener("click", function () {
//     const serviceName =
//       this.closest("tr").querySelector(".serviceName").innerText;
//     const service = services[serviceName];
//     if (service) {
//       cart.push({ name: serviceName, price: service.price });
//       updateAddedItem();
//     }
//     if (service) {
//       cart.pop({ name: serviceName, price: service.price });
//       updateRemovedItem();
//     }
//   });

//   cartbtn3.addEventListener("click", function () {
//     const serviceName =
//       this.closest("tr").querySelector(".serviceName").innerText;
//     const service = services[serviceName];
//     if (service) {
//       cart.push({ name: serviceName, price: service.price });
//       updateAddedItem();
//     }
//     if (service) {
//       cart.pop({ name: serviceName, price: service.price });
//       updateRemovedItem();
//     }
//   });

//   cartbtn4.addEventListener("click", function () {
//     const serviceName =
//       this.closest("tr").querySelector(".serviceName").innerText;
//     const service = services[serviceName];
//     if (service) {
//       cart.push({ name: serviceName, price: service.price });
//       updateAddedItem();
//     }
//     if (service) {
//       cart.pop({ name: serviceName, price: service.price });
//       updateRemovedItem();
//     }
//   });

//   cartbtn5.addEventListener("click", function () {
//     const serviceName =
//       this.closest("tr").querySelector(".serviceName").innerText;
//     const service = services[serviceName];
//     if (service) {
//       cart.push({ name: serviceName, price: service.price });
//       updateAddedItem();
//     }
//     if (service) {
//       cart.pop({ name: serviceName, price: service.price });
//       updateRemovedItem();
//     }
//   });

//   cartbtn6.addEventListener("click", function () {
//     const serviceName =
//       this.closest("tr").querySelector(".serviceName").innerText;
//     const service = services[serviceName];
//     if (service) {
//       cart.push({ name: serviceName, price: service.price });
//       updateAddedItem();
//     }
//     if (service) {
//       cart.pop({ name: serviceName, price: service.price });
//       updateRemovedItem();
//     }
//   });

//   cartbtn7.addEventListener("click", function () {
//     const serviceName =
//       this.closest("tr").querySelector(".serviceName").innerText;
//     const service = services[serviceName];
//     if (service) {
//       cart.push({ name: serviceName, price: service.price });
//       updateAddedItem();
//     }
//     if (service) {
//       cart.pop({ name: serviceName, price: service.price });
//       updateRemovedItem();
//     }
//   });
// });
