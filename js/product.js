const container = document.querySelector(".single-product-grid")
const URL = 'https://v2.api.noroff.dev/online-shop'

async function products() {
    try {
            const parmas = new URLSearchParams(window.location.search)
            const id = parmas.get("id")

        if (!id) {
            container.textContent = "No Product Id Provided"
            return;
        }

        const response = await fetch(`${URL}/${id}`)
        const data = await response.json()
        const product = data.data

        const productcontainer = document.createElement("div")
        const productimg = document.createElement("img")
        const producttitle = document.createElement("h1")
        const productdescription = document.createElement("p")
        const productprice = document.createElement("p")
        const addtocart = document.createElement("button")
        const gotoCart = document.createElement("button")
        const rating = document.createElement("p")
        const tags = document.createElement("p")
        const discountedPrice = document.createElement("p")
        



        productcontainer.className = 'product-container'
        productimg.className = 'product-img'
        producttitle.className = 'product-title'
        productdescription.className = 'product-description'
        productprice.className = 'product-price'
        addtocart.className = 'add-to-cart'
        gotoCart.className = 'go-to-cart'
        rating.className ='product-rating'
        tags.className = 'product-tags'
        discountedPrice.className = 'product-discountedPrice'
        


        productimg.src = product.image.url
        productimg.alt = product.image.alt
        producttitle.textContent = product.title
        productprice.textContent = `$${product.price}`
        productdescription.textContent = product.description
        addtocart.textContent = 'Add to Cart'
        gotoCart.textContent = 'My Cart'
        rating.textContent = `Rating: ${product.rating} *`
        tags.textContent = `Tag: ${product.tags}`
        discountedPrice.textContent = ""

        if (product.discountedPrice) {
          const discount = document.createElement("p")
          discount.className = 'product-discountprice'
          discount.textContent = `Sale Price: $${product.discountedPrice}`
          discountedPrice.appendChild(discount)
        }


        gotoCart.addEventListener("click", () => {
        addToCart(product);



    });


    function addToCart(product) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    //   function addToCart(product) {
    //   let cart = JSON.parse(localStorage.getItem("cart")) || [];

    //   const existingItem = cart.find(item => item.id === product.id);

    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     cart.push({
    //       id: product.title,
    //       title: product.title,
    //       price: product.price,
    //       image: product.image.url,
    //       quantity: 1
    //     });
    //   }
      
    //   localStorage.setItem("cart", JSON.stringify(cart));
    // }

    gotoCart.addEventListener("click", () => {
      location.href = "../pages/cart2.html";
      });


        productcontainer.appendChild(productimg)
        productcontainer.appendChild(producttitle)
        productcontainer.appendChild(tags)
        productcontainer.appendChild(productdescription)
        productcontainer.appendChild(rating)
        productcontainer.appendChild(productprice)
        productcontainer.appendChild(discountedPrice)

        productcontainer.appendChild(addtocart)
        productcontainer.appendChild(gotoCart)
        
        container.appendChild(productcontainer)

        } catch (error) {
        console.error("Failed to Fetch", error)
    }





}

products();
