
/* BIGZERO KUKU — script.js */
"use strict";

const WHATSAPP_NUMBER = "255654929267";

const categories = [
  { id: "nyama", name: "Nyama ya Kuku", description: "Kuku mzima, nusu na mix.", icon: "🍗", products: ["whole", "half", "mix-quarter", "mix-half"] },
  { id: "vipande", name: "Mapaja na Vipande", description: "Mapaja madogo na makubwa.", icon: "🍖", products: ["small-thighs", "large-thighs"] },
  { id: "ndani", name: "Maini na Firigisi", description: "Bidhaa za ndani ya kuku.", icon: "🥩", products: ["liver", "gizzards"] },
  { id: "nyingine", name: "Miguu, Utumbo na Mayai", description: "Bidhaa nyingine za kuku.", icon: "🥚", products: ["intestines", "feet", "eggs"] },
  { id: "bigzero", name: "Bigzero Zagga", description: "Chagua kifurushi cha Zagga.", icon: "📦", products: ["zagga-half", "zagga-quarter"] }
];

const products = {
  whole: { id: "whole", name: "Kuku Mzima", price: 12000, unit: "Kg", icon: "🍗", image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=900&q=85", description: "Kuku mzima. Bei kwa kilo." },
  half: { id: "half", name: "Kuku Nusu", price: 6000, unit: "kipande", icon: "🍗", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85", description: "Kifurushi cha kuku nusu." },
  "mix-quarter": { id: "mix-quarter", name: "Kuku Mix Robo", price: 4500, unit: "kifurushi", icon: "🍗", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85", description: "Kifurushi cha Kuku Mix robo." },
  "mix-half": { id: "mix-half", name: "Kuku Mix Nusu", price: 9000, unit: "kifurushi", icon: "🍗", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=85", description: "Kifurushi cha Kuku Mix nusu." },
  "small-thighs": { id: "small-thighs", name: "Mapaja Madogo", price: 10000, unit: "Kg", icon: "🍖", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85", description: "Mapaja madogo ya kuku." },
  "large-thighs": { id: "large-thighs", name: "Mapaja Makubwa", price: 10000, unit: "Kg", icon: "🍖", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85", description: "Mapaja makubwa ya kuku." },
  liver: { id: "liver", name: "Maini", price: 12000, unit: "Kg", icon: "🥩", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=85", description: "Maini ya kuku. Bei kwa kilo." },
  gizzards: { id: "gizzards", name: "Firigisi", price: 7000, unit: "Kg", icon: "🥩", image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&w=900&q=85", description: "Firigisi za kuku. Bei kwa kilo." },
  intestines: { id: "intestines", name: "Utumbo", price: 5000, unit: "Kg", icon: "🍲", image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=85", description: "Utumbo wa kuku. Bei kwa kilo." },
  feet: { id: "feet", name: "Miguu", price: 5000, unit: "Kg", icon: "🍗", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85", description: "Miguu ya kuku. Bei kwa kilo." },
  eggs: { id: "eggs", name: "Mayai", price: null, unit: "trei", icon: "🥚", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=900&q=85", description: "Uliza bei na ukubwa wa trei kupitia WhatsApp." },
  "zagga-half": { id: "zagga-half", name: "Bigzero Zagga Nusu", price: 6000, unit: "kifurushi", icon: "📦", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85", description: "Kifurushi cha Bigzero Zagga nusu." },
  "zagga-quarter": { id: "zagga-quarter", name: "Bigzero Zagga Robo", price: 3000, unit: "kifurushi", icon: "📦", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85", description: "Kifurushi cha Bigzero Zagga robo." }
};

let cart = [];
let currentProduct = null;

const $ = id => document.getElementById(id);
const money = amount => "TSh " + Number(amount).toLocaleString("en-US");

function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active", page.id === id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function productImage(product) {
  return `<img src="${product.image}" alt="${product.name}" loading="lazy"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
    <span class="fallback-emoji" style="display:none">${product.icon}</span>`;
}

function renderCategories() {
  const grid = $("categoryGrid");
  if (!grid) return;

  grid.innerHTML = categories.map(category => `
    <button type="button" class="category-card" data-category="${category.id}">
      <div class="category-visual">${category.icon}</div>
      <div class="category-info">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
        <span class="open-label">Fungua kundi →</span>
      </div>
    </button>
  `).join("");
}

function openCategory(id) {
  const category = categories.find(item => item.id === id);
  if (!category) return;

  if ($("categoryTitle")) $("categoryTitle").textContent = category.name;
  if ($("categoryDescription")) {
    $("categoryDescription").textContent = category.description;
  }

  const grid = $("productGrid");
  if (!grid) {
    alert("Sehemu ya bidhaa haijapatikana kwenye index.html.");
    return;
  }

  grid.innerHTML = category.products.map(productId => {
    const product = products[productId];

    return `
      <article class="product-card" data-product="${product.id}" tabindex="0">
        <div class="product-visual">${productImage(product)}</div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="price">
            ${product.price === null ? "Uliza bei" : money(product.price) + " / " + product.unit}
          </div>
          <p>${product.description}</p>
          <button type="button" class="small-btn" data-open-product="${product.id}">
            Tazama bidhaa →
          </button>
        </div>
      </article>
    `;
  }).join("");

  showPage("categoryPage");
}

function openProduct(id) {
  const product = products[id];
  if (!product) return;

  currentProduct = product;

  const detail = $("productDetail");
  if (!detail) {
    alert("Sehemu ya maelezo ya bidhaa haijapatikana.");
    return;
  }

  detail.innerHTML = `
    <div class="detail-layout">
      <div class="detail-art">${productImage(product)}</div>
      <div class="detail-copy">
        <span class="eyebrow">BIGZERO KUKU</span>
        <h2>${product.name}</h2>
        <p class="detail-price">
          ${product.price === null ? "Bei: Uliza WhatsApp" : money(product.price) + " / " + product.unit}
        </p>
        <p class="muted">${product.description}</p>
        <label for="detailQty">Kiasi unachohitaji</label>
        <div class="qty-row">
          <input id="detailQty" type="number" min="1" step="1" value="1">
          <span>${product.unit}</span>
        </div>
        <div class="total-box">
          <span>Jumla ya bidhaa hii</span>
          <strong id="detailTotal">${product.price === null ? "Thibitisha bei" : money(product.price)}</strong>
        </div>
        <button type="button" id="addToCartBtn" class="btn yellow full">
          WEKA KWENYE KIKAPU
        </button>
        <button type="button" id="buyNowBtn" class="btn dark full">
          ENDELEA NA ODA →
        </button>
      </div>
    </div>
  `;

  showPage("detailPage");

  $("detailQty").addEventListener("input", updateDetailTotal);
  $("addToCartBtn").addEventListener("click", () => addToCart(false));
  $("buyNowBtn").addEventListener("click", () => addToCart(true));
}

function quantity() {
  const input = $("detailQty");
  const value = Number(input ? input.value : 1);
  return Number.isInteger(value) && value > 0 ? value : 1;
}

function updateDetailTotal() {
  if (!currentProduct || !$("detailTotal")) return;

  $("detailTotal").textContent = currentProduct.price === null
    ? "Thibitisha bei"
    : money(currentProduct.price * quantity());
}

function addToCart(goToCheckout) {
  if (!currentProduct) return;

  const product = currentProduct;
  const qty = quantity();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }

  renderCart();

  if (goToCheckout) {
    updateCheckoutTotal();
    showPage("checkoutPage");
  } else {
    alert(product.name + " imeongezwa kwenye kikapu.");
    showPage("categoryPage");
  }
}

function cartTotal() {
  return cart.reduce((sum, product) => {
    return sum + (product.price === null ? 0 : product.price * product.qty);
  }, 0);
}

function renderCart() {
  if ($("cartCount")) {
    $("cartCount").textContent = cart.reduce((sum, product) => sum + product.qty, 0);
  }

  if ($("cartTotal")) $("cartTotal").textContent = money(cartTotal());

  const items = $("cartItems");
  if (!items) return;

  if (!cart.length) {
    items.innerHTML = `
      <p class="muted">Kikapu chako bado hakina bidhaa.</p>
      <button type="button" class="btn yellow full" id="emptyCartBrowse">
        Chagua bidhaa
      </button>
    `;
    return;
  }

  items.innerHTML = cart.map(product => `
    <div class="cart-line">
      <div class="cart-thumb">${product.icon}</div>
      <div class="cart-line-info">
        <strong>${product.name}</strong>
        <small>Kiasi: ${product.qty} ${product.unit}</small><br>
        <small>${product.price === null ? "Bei itathibitishwa" : money(product.price * product.qty)}</small>
      </div>
      <button type="button" class="remove-btn" data-remove="${product.id}" aria-label="Ondoa bidhaa">✕</button>
    </div>
  `).join("");
}

function updateCheckoutTotal() {
  if ($("checkoutTotal")) $("checkoutTotal").textContent = money(cartTotal());
}

function submitOrder(event) {
  event.preventDefault();

  if (!cart.length) {
    alert("Tafadhali chagua bidhaa kwanza.");
    showPage("homePage");
    return;
  }

  const form = $("orderForm");
  if (!form || !form.reportValidity()) return;

  const data = new FormData(form);
  const value = key => String(data.get(key) || "").trim();

  const lines = cart.map(product => {
    if (product.price === null) {
      return `• ${product.name}: ${product.qty} ${product.unit} — BEI ITHIBITISHWE`;
    }

    return `• ${product.name}: ${product.qty} ${product.unit} × ${money(product.price)} = ${money(product.price * product.qty)}`;
  });

  const hasUnpriced = cart.some(product => product.price === null);
  const total = money(cartTotal()) +
    (hasUnpriced ? " (bila bidhaa ambazo bei zake hazijathibitishwa)" : "");

  const message = [
    "🛒 ODA MPYA — BIGZERO KUKU",
    "",
    `Jina: ${value("customerName")}`,
    `Simu: ${value("customerPhone")}`,
    "",
    "BIDHAA ZILIZOAGIZWA:",
    ...lines,
    "",
    `Jumla ya bidhaa: ${total}`,
    "",
    "ENEO LA KUFIKISHIWA:",
    `Mkoa/Jiji: ${value("region")}`,
    `Wilaya/Mtaa: ${value("district")}`,
    `Anwani: ${value("address")}`,
    "",
    `Tarehe ya kupokea: ${value("deliveryDate")}`,
    `Muda unaopendelewa: ${value("deliveryTime")}`,
    `Njia ya malipo: ${value("payment")}`,
    `Maelezo ya ziada: ${value("notes") || "Hakuna"}`,
    "",
    "Tafadhali thibitisha upatikanaji, gharama ya usafirishaji na muda wa kufikisha.",
    "Asante kwa kuchagua BIGZERO KUKU!"
  ].join("\n");

  window.location.href =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function initBigzero() {
  const enterButton = $("enterBtn");

  if (enterButton) {
    enterButton.addEventListener("click", () => {
      if ($("splash")) $("splash").classList.add("hide");
      showPage("homePage");
    });
  }

  const browseButton = $("browseBtn");
  if (browseButton) {
    browseButton.addEventListener("click", () => showPage("homePage"));
  }

  const homeLogo = $("homeLogo");
  if (homeLogo) {
    homeLogo.addEventListener("click", () => {
      if ($("splash")) $("splash").classList.add("hide");
      showPage("homePage");
    });
  }

  const cartButton = $("cartBtn");
  if (cartButton) {
    cartButton.addEventListener("click", () => {
      renderCart();
      showPage("cartPage");
    });
  }

  const checkoutButton = $("checkoutBtn");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", () => {
      if (!cart.length) {
        alert("Kikapu chako bado hakina bidhaa. Tafadhali chagua bidhaa kwanza.");
        showPage("homePage");
        return;
      }

      updateCheckoutTotal();
      showPage("checkoutPage");
    });
  }

  const form = $("orderForm");
  if (form) form.addEventListener("submit", submitOrder);

  if ($("year")) $("year").textContent = new Date().getFullYear();

  renderCategories();
  renderCart();

  document.addEventListener("click", event => {
    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      openCategory(categoryButton.dataset.category);
      return;
    }

    const productButton = event.target.closest("[data-open-product]");
    if (productButton) {
      event.stopPropagation();
      openProduct(productButton.dataset.openProduct);
      return;
    }

    const productCard = event.target.closest("[data-product]");
    if (productCard && !event.target.closest("button")) {
      openProduct(productCard.dataset.product);
      return;
    }

    const backButton = event.target.closest("[data-back]");
    if (backButton) {
      showPage(backButton.dataset.back);
      return;
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      cart = cart.filter(product => product.id !== removeButton.dataset.remove);
      renderCart();
      updateCheckoutTotal();
      return;
    }

    if (event.target.closest("#emptyCartBrowse")) {
      showPage("homePage");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBigzero);
} else {
  initBigzero();
}
