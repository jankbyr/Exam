const isCartPage = document.querySelector(".cart")

if (isCartPage) {
    displayCart();
}

function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItemContainer = document.querySelector(".cart-items2");
    const grandTotalEl = document.querySelector(".grand-total");

    cartItemContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemContainer.innerHTML = "<p>Your cart is empty.</p>";
        grandTotalEl.textContent = "$0"
        return;
    }

    let grandtotal = 0;

    cart.forEach((item, index) => {
        // const itemTotal = parseFloat(item.price.replace("$", "")) * item.quantity;
        // grandtotal += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item2");
        cartItem.innerHTML = `
            <div class="product">
                    <img src="${item.image.url}" alt="">
                    <div class="item-detail">
                        <p>${item.title}</p>
                    </div>
            </div>
                <span class="price">$${item.price}</span>
                <div class="quantity"><input type="number" value="1" min="1" data-index="${index}"></div>
                <button class="remove" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
        
        `;
        cartItemContainer.appendChild(cartItem);
        
    });
    grandTotalEl.textContent = `$${grandtotal.toFixed(2)}`
    removeCartItem();


    let checkoutButton = document.querySelectorAll(".checkout");
    for(let i = 0; i < checkoutButton.length; i++) {
        checkoutButton[i].addEventListener("click", function(){
            location.href = "payment.html";
        });
    }
   

}

function removeCartItem() {
    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", function() {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const index = this.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
            
        });
    });

}




