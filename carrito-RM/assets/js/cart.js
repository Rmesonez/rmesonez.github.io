/* Carrito */

// #1 Base de datos
const db = [
  {
    id: 1,
    name: "McBook Pro 11",
    price: 299.99,
    image: "./assets/imagenes/imagen1.webp",
    category: "laptops",
    quantity: 5,
    ref: "Laptops"
  },
  {
    id: 2,
    name: " McBook Pro 11 Special Edition",
    price: 399.99,
    image: "./assets/imagenes/imagen2.webp",
    category: "laptops",
    quantity: 7,
    ref: "Laptops"
  },
  {
    id: 3,
    name: "McBook Pro 12",
    price: 499.99,
    image: "./assets/imagenes/imagen3.webp",
    category: "laptops",
    quantity: 4,
    ref: "Laptops"
  },
  {
    id: 4,
    name: "McBook Pro Desk Power Station",
    price: 599.99,
    image: "./assets/imagenes/imagen5.webp",
    category: "Computers",
    quantity: 5,
    ref: "Computers"
  },
  {
    id: 5,
    name: "Tempest Cataclysm Combo 3 En 1 Gaming Teclado",
    price: 20,
    image: "./assets/imagenes/products/keyboard-1.webp",
    category: "keyboards",
    quantity: 7,
    ref: "Keyboards"
  },
  {
    id: 6,
    name: "Newskill Suiko Ivory Teclado Mecánico Gaming Full RGB",
    price: 35,
    image: "./assets/imagenes/products/keyboard-2.webp",
    category: "keyboards",
    quantity: 4,
    ref: "Keyboards"
  },
  {
    id: 7,
    name: "Razer Huntsman Elite Teclado Mecánico Gaming RGB",
    price: 20.20,
    image: "./assets/imagenes/products/keyboard-4.webp",
    category: "keyboards",
    quantity: 5,
    ref: "Keyboards"
  },
  {
    id: 8,
    name: "Trust GXT 856 Torac Teclado Metálico Gaming RGB",
    price: 19,
    image: "./assets/imagenes/products/keyboard-5.webp",
    category: "keyboards",
    quantity: 7,
    ref: "Keyboards"
  },
  {
    id: 9,
    name: "Apple Watch Pro Edition 8", 
    price: 799.99,
    image: "./assets/imagenes/imagen7.webp",
    category: "watches",
    quantity: 4,
    ref: "Watches"
  },
  {
    id: 10,
    name: " Apple Tablet 10 With Keyboard",
    price: 899.99,
    image: "./assets/imagenes/imagen8.webp",
    category: "tablets",
    quantity: 5,
    ref: "Tablets"
  },
  {
    id: 11,
    name: " Apple Tablet Pro 11 With Keyboard",
    price: 999.99,
    image: "./assets/imagenes/imagen9.webp",
    category: "tablets",
    quantity: 7,
    ref: "Tablets"
  },
  {
    id: 12,
    name:"AlienWare Notebook 18",
    price: 1000.99,
    image:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/alienware_m18.jpg",
    category: "laptops",
    quantity: 7,
    ref: "Alienware"
  },
  {
    id: 13,
    name:"Alienware Extern Case ",
    price: 1599.99,
    image:"https://assets-prd.ignimgs.com/2023/01/19/alienwareroundup-1674153708969.jpg",
    category: "Computers Alienware",
    quantity: 5,
    ref: "Alienware"
  },
  {
    id: 14,
    name:"AlienWare Laptop",
    price: 1299.99,
    image:"https://i.dell.com/das/xa.ashx/global-site-design%20WEB/5e899e9f-c003-db6b-403f-1fa03e97ad29/1/OriginalJPG?id=Dell/Product_Images/Dell_Client_Products/Notebooks/Alienware_Notebooks/Alienware_15/Non_touch/global_spi/laptop-alienware-15-non-touch-hero-504x350-ng.psd",
    category: "laptops",
    quantity: 3,
    ref: "Alienware"
  },
  {
    id: 15,
    name:"AlienWare NoteBook 16",
    price: 899.99,
    image:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/alienware_x16_6.jpg",
    category: "laptops",
    quantity: 7,
    ref: "Alienware",
  } 
];

// const products = window.localStorage.getItem("productsDB")
//   ? JSON.parse(window.localStorage.getItem("productsDB"))
//   : db;
const products = db

// #2 Pintar los productos en el DOM
const productContainer = document.getElementById("products__content");
function printProducts() {
  let html = "";
  for (const product of products) {
    html += `
    <article  class="products__card ${product.category}" id="${product.ref}">
      <div class="products__shape">
        <img src="${product.image}" alt="${product.name}" class="products__img">
      </div>

      <div class="products__data">
        <h2 class="products__name">${product.name}</h2>
        <div class="">
          <h3 class="products__price">$${product.price}</h3>
          <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
        </div>
        <button type="button" class="button products__button addToCart" data-id="${product.id}">
          
          Add
        </button>
      </div>
    </article>
    `;
  }
  productContainer.innerHTML = html;
  window.localStorage.setItem("productsDB", JSON.stringify(products));
}

printProducts();

// #3 Carrito
let cart = window.localStorage.getItem("cartDB")
  ? JSON.parse(window.localStorage.getItem("cartDB"))
  : [];
const cartContainer = document.getElementById("cart__container");
const cartCount = document.getElementById("cart-count");
const itemsCount = document.getElementById("items-count");
const cartTotal = document.getElementById("cart-total");

function printCart() {
  let html = "";
  for (const article of cart) {
    const product = products.find((p) => p.id === article.id);
    html += `
    <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">${product.name} <span class="cart__price">$${
      product.price
    }</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${
                product.id
              }">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${product.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${
              product.id
            }"></i>
            </div>
            
            <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${
              product.quantity - article.qty
            } unidades</span>
            <span class="cart__subtotal-price">${
              product.price * article.qty
            }</span>
            </span>
            </div>
            </article>
            `;
  }
  cartContainer.innerHTML = html;
  cartCount.innerHTML = totalArticles();
  itemsCount.innerHTML = totalArticles();
  cartTotal.innerHTML = numberToCurrency(totalAmount());
  checkButtons();
  window.localStorage.setItem('cartDB', JSON.stringify(cart))
}

printCart();
// #4 Agragar al carrito
function addToCart(id, qty = 1) {
  const product = products.find((p) => p.id === id);
  if (product && product.quantity > 0) {
    const article = cart.find((a) => a.id === id);

    if (article) {
      if (checkStock(id, qty + article.qty)) {
        article.qty++;
      } else {
        window.alert("No hay stock suficiente");
      }
    } else {
      cart.push({ id, qty });
    }
  } else {
    window.alert("Producto agotado");
  }
  printCart();
}

function checkStock(id, qty) {
  const product = products.find((p) => p.id === id);
  return product.quantity - qty >= 0;
}

// #5 Remover articulos
function removeFromCart(id, qty = 1) {
  const article = cart.find((a) => a.id === id);

  if (article && article.qty - qty > 0) {
    article.qty--;
  } else {
    const confirm = window.confirm("Estás Seguro??");
    if (confirm) {
      cart = cart.filter((a) => a.id !== id);
    }
  }
  printCart();
}

// #6 Eliminar del carrito
function deleteFromCart(id) {
  const article = cart.find((a) => a.id === id);
  cart.splice(cart.indexOf(article), 1);
  printCart();
}

// #7 Contar Artículos
function totalArticles() {
  return cart.reduce((acc, article) => acc + article.qty, 0);
}

// #8 El total
function totalAmount() {
  return cart.reduce((acc, article) => {
    /* Primero recorre los productos, la base de datos para traer las propiedades y luego busca al producto por su id y lo hace coincidir con el articulo, si lo encuntra multiplica el precio del producto por la cantidad de artículos del carrito*/
    const product = products.find((p) => p.id === article.id);
    return acc + product.price * article.qty;
  }, 0);
}

// #9 Limpiar Carrito
function clearCart() {
  cart = [];
  printCart();
}

// #10 Comprar
function checkout() {
  cart.forEach((article) => {
    const product = products.find((p) => p.id === article.id);

    product.quantity -= article.qty;
  });
  clearCart();
  printProducts();
  printCart();
  window.alert("Gracias por su compra");
}

function checkButtons() {
  if (cart.length > 0) {
    document.getElementById("cart-checkout").removeAttribute("disabled");
    document.getElementById("cart-empty").removeAttribute("disabled");
  } else {
    document
      .getElementById("cart-checkout")
      .setAttribute("disabled", "disabled");
    document.getElementById("cart-empty").setAttribute("disabled", "disabled");
  }
}

function numberToCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/* Agregando eventos a nuestros botones */
productContainer.addEventListener("click", function (e) {
  const add = e.target.closest(".addToCart");

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }
});

cartContainer.addEventListener("click", function (e) {
  const remove = e.target.closest(".removeToCart");
  const add = e.target.closest(".addToCart");
  const deleteCart = e.target.closest(".deleteToCart");

  if (remove) {
    const id = +remove.dataset.id;
    removeFromCart(id);
  }

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }

  if (deleteCart) {
    const id = +deleteCart.dataset.id;
    deleteFromCart(id);
  }
});

const actionButtons = document.getElementById("action-buttons");

actionButtons.addEventListener("click", function (e) {
  const clear = e.target.closest("#cart-empty");
  const buy = e.target.closest("#cart-checkout");

  if (clear) {
    clearCart();
  }

  if (buy) {
    checkout();
  }
});
