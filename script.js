let userName = document.getElementsByClassName("userName")[0];
let email = document.getElementsByClassName("email")[0];
let phoneNo = document.getElementsByClassName("phoneNo")[0];
const addToCartButtons = document.querySelectorAll('.addToCartBtn');

let serviceName = document.getElementsByClassName("serviceName")[0];
let serviceImg = document.getElementsByClassName("servicimg")[0];
let servicePrice = document.getElementsByClassName("servicePrice")[0];

let addBtn = document.getElementById("addItem");
let skip = document.getElementById("skip");

let cartItems = [];
let cartBtn1 = document.getElementById("cartBtn1");
let cartBtn2 = document.getElementById("cartBtn2");
let cartBtn3 = document.getElementById("cartBtn3");
let cartBtn4 = document.getElementById("cartBtn4");
let cartBtn5 = document.getElementById("cartBtn5");
let cartBtn6 = document.getElementById("cartBtn6");
let cartBtn7 = document.getElementById("cartBtn7");
let remove = document.querySelectorAll("addToCartBtn");
let btn1 = true;
let btn2 = true;
let btn3 = true;
let btn4 = true;
let btn5 = true;
let btn6 = true;
let btn7 = true;

let service = [
  {
    name: "Dry cleaning",
    Price: "200",
    img: "image/dryCleaning.jpg",
  },
  { name: "Ironing", Price: "30", img: "image/ironing.jpg" },
  {
    name: "Stain removal",
    Price: "550",
    img: "image/strainRemoval.jpg",
  },
  {
    name: "Wash and fold",
    Price: "150",
    img: "image/washAndFold.jpg",
  },
  {
    name: "QuickClean Laundry",
    Price: "500",
    img: "image/quickclean.jpg",
  },
  {
    name: "Wash and iron",
    Price: "350",
    img: "image/wash-and-iron.jpg",
  },
  {
    name: "Wedding dress cleaning",
    Price: "3000",
    img: "image/weddingDressCleaning.jpg",
  },
];

function getFacilities() {
  let i = 1;
  console.log(serviceImg.src);
  addBtn.addEventListener("click", () => {
    serviceName.innerText = service[i].name;
    serviceImg.src = service[i].img;
    servicePrice.innerText = `₹${service[i].Price}`;
    i++;
    if (i > service.length - 1) {
      i = 0;
    }
    cartItems.push({
      name: service[i].name,
      Price: service[i].Price,
    });
    console.log(cartItems);
    renderServices() 
  });

  skip.addEventListener("click", () => {
    serviceName.innerText = service[i].name;
    serviceImg.src = service[i].img;
    servicePrice.innerText = `₹${service[i].Price}`;
    i++;
    if (i > service.length - 1) {
      i = 0;
    }
  });
}

function getServices() {
  cartBtn1.addEventListener("click", () => {
    if (btn1 == true) {
      cartBtn1.innerText = "Remove Item";
      cartBtn1.classList.add('remove');
      cartItems.push({
        name: service[0].name,
        Price: service[0].Price,
      });
      btn1 = false;
      renderServices();
    } else {
      cartBtn1.innerText = "Add Item";
      cartBtn1.classList.remove("remove");
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name == service[0].name) {
          cartItems.splice(i, 1);
        }
      }
      btn1 = true;
      renderServices();
    }
  });

  cartBtn2.addEventListener("click", () => {
    if (btn2 == true) {
      cartBtn2.innerText = "Remove Item";
      cartBtn2.classList.add('remove');
      cartItems.push({
        name: service[1].name,
        Price: service[1].Price,
      });
      btn2 = false;
      renderServices();
    } else {
      cartBtn2.innerText = "Add Item";
      cartBtn2.classList.remove("remove");
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name == service[1].name) {
          cartItems.splice(i, 1);
        }
      }
      btn2 = true;
      renderServices();
    }
  });

  cartBtn3.addEventListener("click", () => {
    if (btn3 == true) {
      cartBtn3.innerText = "Remove Item";
      cartBtn3.classList.add('remove');
      cartItems.push({
        name: service[2].name,
        Price: service[2].Price,
      });
      btn3 = false;
      renderServices();
    } else {
      cartBtn3.innerText = "Add Item";
      cartBtn3.classList.remove("remove");
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name == service[2].name) {
          cartItems.splice(i, 1);
        }
      }
      btn3 = true;
      renderServices();
    }
  });

  cartBtn4.addEventListener("click", () => {
    if (btn4 == true) {
      cartBtn4.innerText = "Remove Item";
      cartBtn4.classList.add('remove');
      cartItems.push({
        name: service[3].name,
        Price: service[3].Price,
      });
      btn4 = false;
      renderServices();
    } else {
      cartBtn4.innerText = "Add Item";
      cartBtn4.classList.remove("remove");
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name == service[3].name) {
          cartItems.splice(i, 1);
        }
      }
      btn4 = true;
      renderServices();
    }
  });

  cartBtn5.addEventListener("click", () => {
    if (btn5 == true) {
      cartBtn5.innerText = "Remove Item";
      cartBtn5.classList.add('remove');
      cartItems.push({
        name: service[4].name,
        Price: service[4].Price,
      });
      btn5 = false;
      renderServices();
    } else {
      cartBtn5.innerText = "Add Item";
      cartBtn5.classList.remove("remove");
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name == service[4].name) {
          cartItems.splice(i, 1);
        }
      }
      btn5 = true;
      renderServices();
    }
  });


  cartBtn6.addEventListener("click", () => {
    if (btn6 == true) {
      cartBtn6.innerText = "Remove Item";
      cartBtn6.classList.add('remove');
      cartItems.push({
        name: service[5].name,
        Price: service[5].Price,
      });
      btn6 = false;
      renderServices();
    } else {
      cartBtn6.innerText = "Add Item";
      cartBtn6.classList.remove("remove");
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name == service[5].name) {
          cartItems.splice(i, 1);
        }
      }
      btn6 = true;
      renderServices();
    }
  });


  cartBtn7.addEventListener("click", () => {
    if (btn7 == true) {
      cartBtn7.innerText = "Remove Item";
      cartBtn7.classList.add('remove');
      cartItems.push({
        name: service[6].name,
        Price: service[6].Price,
      });
      btn7 = false;
      renderServices();
    } else {
      cartBtn7.innerText = "Add Item";
      cartBtn7.classList.remove("remove");
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name == service[6].name) {
          cartItems.splice(i, 1);
        }
      }
      btn7 = true;
      renderServices();
    }
  });
}


//render the carts in added item box
function renderServices() {
  let totalAmountValue = document.getElementById("totalAmountValue");
  let addedItemTable = document
    .getElementById("addedItemTable")
    .getElementsByTagName("tbody")[0];
  addedItemTable.innerHTML = "";
  let totalAmount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const row = addedItemTable.insertRow();
    row.insertCell(0).innerText = i + 1;
    row.insertCell(1).innerText = cartItems[i].name;
    row.insertCell(2).innerText = `₹${cartItems[i].Price}`;
    totalAmount += parseInt(cartItems[i].Price);
  }

  totalAmountValue.innerText = `₹${totalAmount}`;
  cheakAnyItemInCart();
}


//Chreak any item is present in cart or not
function cheakAnyItemInCart() {
  if (cartItems.length === 0) {
    let addedItemTable = document
      .getElementById("addedItemTable")
      .getElementsByTagName("tbody")[0];
    addedItemTable.innerHTML = "<div class=noItem><i class='fa-solid fa-circle-info' style='color: #111;'></i> No Item is present</div>";
    cartBtn1.innerText = "Add Item";
    cartBtn2.innerText = "Add Item";
    cartBtn3.innerText = "Add Item";
    cartBtn4.innerText = "Add Item";
    cartBtn5.innerText = "Add Item";
    cartBtn6.innerText = "Add Item";
    cartBtn7.innerText = "Add Item";
    cartBtn1.classList.remove("remove");
    cartBtn2.classList.remove("remove");
    cartBtn3.classList.remove("remove");
    cartBtn4.classList.remove("remove");
    cartBtn5.classList.remove("remove");
    cartBtn6.classList.remove("remove");
    cartBtn7.classList.remove("remove");


  }
}



//js to book services

function bookNow() {
  if (
    userName.value !== "" &&
    email.value !== "" &&
    phoneNo.value !== "" &&
    cartItems.length > 0
  ) {
    cartItems = [];
    renderServices();
    alert("Items booked successfully!");
    userName.value = "";
    email.value = "";
    phoneNo.value = "";
  } else {
    alert("Please fill in all details and add items to the cart!");
  }
}


if(addToCartButtons.innerText==="Remove Item"){
document.addEventListener("DOMContentLoaded", function() {
  // Select all elements with the class 'addToCartBtn'
  
  // Loop through each button and add the 'remove' class
  addToCartButtons.forEach(button => {
    button.classList.add('remove');
  });
});
}

getServices();
getFacilities();
cheakAnyItemInCart();