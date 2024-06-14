document.addEventListener("DOMContentLoaded", function () {
  // Define the services object
  const services = {
    "Dry cleaning": { price: 200.0},
    Ironing: { price: 30.0},
    "Stain removal": { price: 550.0},
    "Wash and fold": { price: 150.0},
    "Wash and iron": { price: 350.0},
    "Wedding dress cleaning": { price: 3000.0},
  };

  let cartbtn1 = document.getElementById("cartBtn1");
  let cartbtn2 = document.getElementById("cartBtn2");
  let cartbtn3 = document.getElementById("cartBtn3");
  let cartbtn4 = document.getElementById("cartBtn4");
  let cartbtn5 = document.getElementById("cartBtn5");
  let cartbtn6 = document.getElementById("cartBtn6");
  let cartbtn7 = document.getElementById("cartBtn7");

  let addedCart = false;

  let cart = [];
  let addedItemTable = document.getElementById("addedItemTable");
  let totalAmountValue = document.querySelector(".totalAmountValue");

  function updateAddedItem() {
    let totalAmount = 0;
    cart.forEach((item, index) => {
      const row = addedItemTable.insertRow();
      row.insertCell(0).innerText = index + 1;
      row.insertCell(1).innerText = item.name;
      row.insertCell(2).innerText = `₹${item.price}`;
      totalAmount += item.price;
    });

    totalAmountValue.innerText = `₹${totalAmount}`;

    console.log(cart);
  }


  function updateRemovedItem() {
    let totalAmount = totalAmountValue.innerText ;
    cart.forEach((item, index) => {
      totalAmount -= item.price;
    });

    totalAmountValue.innerText = `₹${totalAmount}`;

    console.log(cart);
  }




    cartbtn1.addEventListener("click", function () {
      const serviceName = this.closest("tr").querySelector(".serviceName").innerText;
      const service = services[serviceName];
      if (service) {
        cart.push({ name: serviceName, price: service.price });
        updateAddedItem();
        document.querySelector(".updateCartToggleBtn").innerHtml= '<div class="addToCartBtn" id="cartBtn2"> RemoveItem <i class="fa-solid fa-circle-plus"></i></div>';
      }
      else if (service) {
        cart.pop({ name: serviceName, price: service.price });
        updateRemovedItem();
      }
    });

    cartbtn2.addEventListener("click", function () {
      const serviceName =
        this.closest("tr").querySelector(".serviceName").innerText;
      const service = services[serviceName];
      if (service) {
        cart.push({ name: serviceName, price: service.price });
        updateAddedItem();
      }
      if (service) {
        cart.pop({ name: serviceName, price: service.price });
        updateRemovedItem();
      }
    });

    cartbtn3.addEventListener("click", function () {
      const serviceName =
        this.closest("tr").querySelector(".serviceName").innerText;
      const service = services[serviceName];
      if (service) {
        cart.push({ name: serviceName, price: service.price });
        updateAddedItem();
      }
      if (service) {
        cart.pop({ name: serviceName, price: service.price });
        updateRemovedItem();
      }
    });

    cartbtn4.addEventListener("click", function () {
      const serviceName =
        this.closest("tr").querySelector(".serviceName").innerText;
      const service = services[serviceName];
      if (service) {
        cart.push({ name: serviceName, price: service.price });
        updateAddedItem();
      }
      if (service) {
        cart.pop({ name: serviceName, price: service.price });
        updateRemovedItem();
      }
    });

    cartbtn5.addEventListener("click", function () {
      const serviceName =
        this.closest("tr").querySelector(".serviceName").innerText;
      const service = services[serviceName];
      if (service) {
        cart.push({ name: serviceName, price: service.price });
        updateAddedItem();
      }
      if (service) {
        cart.pop({ name: serviceName, price: service.price });
        updateRemovedItem();
      }
    });

    cartbtn6.addEventListener("click", function () {
      const serviceName =
        this.closest("tr").querySelector(".serviceName").innerText;
      const service = services[serviceName];
      if (service) {
        cart.push({ name: serviceName, price: service.price });
        updateAddedItem();
      }
      if (service) {
        cart.pop({ name: serviceName, price: service.price });
        updateRemovedItem();
      }
    });

    cartbtn7.addEventListener("click", function () {
      const serviceName =
        this.closest("tr").querySelector(".serviceName").innerText;
      const service = services[serviceName];
      if (service) {
        cart.push({ name: serviceName, price: service.price });
        updateAddedItem();
      }
      if (service) {
        cart.pop({ name: serviceName, price: service.price });
        updateRemovedItem();
      }
    });
});
