const cartProducts = document.getElementById("cart-content")
const carth1 = document.getElementById("carth1")
const cartButtons = document.getElementById("cart-subtotal-div")

function cartproduct() {
    cartProducts.innerHTML ="";
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;


    function removeFromCart(productToRemove) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const remove = cart.findIndex(
        (item) => item.id === productToRemove.id
      );
      if (remove > -1) {
        cart.splice(remove, 1)
      }
      localStorage.setItem("cart", JSON.stringify(cart))
      cartproduct();
    }


    cart.forEach((item) => {
        const productContainer = document.createElement("div")
        const image = document.createElement("img")
        const content = document.createElement("div")
        const title = document.createElement("h2")
        const price = document.createElement("p")
        const removeBtn = document.createElement("button")
        const quantity = document.createElement("span")
        const quantityMinus = document.createElement("span")
        const quantityPluss = document.createElement("span")

        productContainer.className = 'product-cart-container'
        image.classname = 'cart-image'
        content.className = 'cart-content'
        title.classname = 'cart-title'
        price.className = 'cart-price'
        removeBtn.className = 'cart-remove-btn'
        quantity.className = 'cart-quantity'
        quantityMinus.className = 'cart-quantity-minus'
        quantityPluss.className = 'cart-quantity-pluss'


        image.src = item.image.url
        image.alt = item.image.alt
        title.textContent = item.title
        price.textContent = `$${item.price}`
        removeBtn.textContent = "Remove Item"
        quantityMinus.textContent = "<"
        quantity.textContent = "0"
        quantityPluss.textContent = ">"


    removeBtn.addEventListener("click", () => {
          removeFromCart(item)
      });

        content.appendChild(image)
        content.appendChild(title)
        content.appendChild(price)
        content.appendChild(quantityMinus)
        content.appendChild(quantity)
        content.appendChild(quantityPluss)
        content.appendChild(removeBtn)
        productContainer.appendChild(content)
        cartProducts.appendChild(productContainer)
        total += parseFloat(item.price)    
})


const buttonDiv = document.createElement("div")
const backToHome = document.createElement("button")
const goToCheckout = document.createElement("button")


backToHome.classname = 'checkout-home-btn'
goToCheckout.className = 'proceed-to-checkout-btn'


goToCheckout.textContent = 'Proceed to Checkout'
backToHome.textContent = 'Home'


buttonDiv.appendChild(goToCheckout)
buttonDiv.appendChild(backToHome)
cartButtons.appendChild(buttonDiv)

backToHome.addEventListener ("click", () => {
          location.href = "../index.html";
});

goToCheckout.addEventListener ("click", () => {
          location.href = "payment.html"
});


document.querySelector(".total-amount").textContent = `Total Price: $${total.toFixed(
      2
    )}`
}

cartproduct();

function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const CartItemContainer = document.querySelector(".cart-items-2");
    const CartGrandtotal = document.querySelector(".cart-total");
    const CartButtons = document.querySelector(".cart-btn");

    CartItemContainer.innerHTML ="";

    if (cart.length === 0) {
        CartItemContainer.innerHTML = "<p>Your cart is empty</p>";
        CartGrandtotal.textContent = "$0";
        return;
    }

    cart.forEach(item, index => {
        const itemTotal = parseFloat(item.price.replace("$")) * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item-2")
        cartItem.innerHTML = `
            <div class="cart-items-2" id="cart-items-2">
                    <div class="cart-img-2">
                        <img src="${cart.image}" alt="">
                    </div>
                    <div class="cart-name-2">
                       <p>${cart.title}</p>
                    </div>
                    <div class="cart-price-2">
                        <p>$${cart.price}</p>
                    </div>
                    <div class="cart-cuantity">
                        <span class="cart-minus-2"><</span>
                        <span>1</span>
                        <span class="cart-pluss-2">></span>
                    </div>
                </div>
        `;
        CartItemContainer.appendChild(cartItem);
    });
}