const listing = document.querySelector(".listing")
const URL = 'https://v2.api.noroff.dev/online-shop'

let products = [];

function listproducts(product) {
  listing.innerHTML ="";

  product.forEach((item) => {
      const card = document.createElement("div");
      const img = document.createElement("img");
      const content = document.createElement("div");
      const title = document.createElement("h2");
      const price = document.createElement("p");
      const anchor = document.createElement("a");

      card.className = "index-cardlist"
      img.className = "cardlist-img"
      content.className = "cardlist-content"
      title.className = "cardlist-title"
      price.className = "cardlist-price, #cardlist-price"
      anchor.className = "cardlist-anchor"

       

      img.src = item.image.url;
      img.alt = item.image.alt;
      title.textContent = item.title;
      price.textContent = `$${item.price}`
      anchor.href = `pages/product.html?id=${item.id}`

      card.appendChild(img);
      content.appendChild(title);
      content.appendChild(price);
      card.appendChild(content);
      anchor.appendChild(card);
      listing.appendChild(anchor);
   

    });
}

async function cardproduct() {
  try{
    const respond = await fetch(URL)
    const data = await respond.json()
    const products = data.data
    listproducts(products);
  }
  catch(error) {
    console.error("Error loading data", error)
  }
}

cardproduct();



