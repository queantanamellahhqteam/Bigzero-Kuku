/* BIGZERO KUKU — script.js */
"use strict";

const WHATSAPP_NUMBER = "255654929267";

const categories = [
  {
    id: "nyama",
    name: "Nyama ya Kuku",
    description: "Kuku nyama, kuku mzima, kuku wa kienyeji na mix.",
    icon: "🍗",
    products: [
      "whole", "half", "chicken-meat",
      "layers-chicken", "kienyeji-chicken",
      "mix-quarter", "mix-half"
    ]
  },
  {
    id: "vipande",
    name: "Mapaja na Vipande",
    description: "Mapaja, migongo, shingo na vidari.",
    icon: "🍖",
    products: [
      "small-thighs", "large-thighs",
      "backs", "necks", "breasts"
    ]
  },
  {
    id: "ndani",
    name: "Maini na Firigisi",
    description: "Maini na firigisi za kuku.",
    icon: "🥩",
    products: ["liver", "gizzards"]
  },
  {
    id: "nyingine",
    name: "Miguu, Utumbo na Mayai",
    description: "Miguu ya kuku, utumbo na mayai ya kienyeji.",
    icon: "🥚",
    products: ["intestines", "feet", "eggs", "eggs-tray"]
  },
  {
    id: "bigzero",
    name: "Bigzero Zagga",
    description: "Chagua kifurushi cha Zagga.",
    icon: "📦",
    products: ["zagga-half", "zagga-quarter"]
  }
];

const products = {
  whole: {
    id: "whole",
    name: "Kuku Mzima",
    price: 12000,
    unit: "Kg",
    icon: "🍗",
    image: "images/kuku-mzima.PNG",
    description: "Kuku mzima. Bei ni TSh 12,000 kwa kilo."
  },

  half: {
    id: "half",
    name: "Kuku Nusu",
    price: 6000,
    unit: "kipande",
    icon: "🍗",
    image: "images/kuku-nusu.jpg",
    description: "Kifurushi cha kuku nusu."
  },

  "chicken-meat": {
    id: "chicken-meat",
    name: "Kuku Nyama (1.3 kg)",
    price: 12000,
    unit: "kuku",
    icon: "🍗",
    image: "images/kuku-nyama1.jpg",
    description: "Kuku nyama wa takribani kilo 1.3. TSh 12,000 kwa kuku mmoja."
  },

  "mix-quarter": {
    id: "mix-quarter",
    name: "Kuku Mix Robo",
    price: 4500,
    unit: "kifurushi",
    icon: "🍗",
    image: "images/mix1.JPG",
    description: "Kifurushi cha Kuku Mix robo."
  },

  "mix-half": {
    id: "mix-half",
    name: "Kuku Mix Nusu",
    price: 9000,
    unit: "kifurushi",
    icon: "🍗",
    image: "images/mix2.JPG",
    description: "Kifurushi cha Kuku Mix nusu."
  },

  "small-thighs": {
    id: "small-thighs",
    name: "Mapaja Madogo",
    price: 10000,
    unit: "Kg",
    icon: "🍖",
    image: "images/mapaja-madogo.jpg",
    description: "Mapaja madogo ya kuku. TSh 10,000 kwa kilo."
  },

  "large-thighs": {
    id: "large-thighs",
    name: "Mapaja Makubwa",
    price: 10000,
    unit: "Kg",
    icon: "🍖",
    image: "images/mapaja-makubwa.jpg",
    description: "Mapaja makubwa ya kuku. TSh 10,000 kwa kilo."
  },

  backs: {
    id: "backs",
    name: "Migongo",
    price: 7000,
    unit: "Kg",
    icon: "🍗",
    image: "images/migongo.JPG",
    description: "Migongo ya kuku. TSh 7,000 kwa kilo."
  },

  necks: {
    id: "necks",
    name: "Shingo",
    price: 7000,
    unit: "Kg",
    icon: "🍗",
    image: "images/shingo.JPG",
    description: "Shingo za kuku. TSh 7,000 kwa kilo."
  },

  breasts: {
    id: "breasts",
    name: "Vidari",
    price: 10000,
    unit: "Kg",
    icon: "🍖",
    image: "images/kidari.JPG",
    description: "Vidari vya kuku. TSh 10,000 kwa kilo."
  },

  liver: {
    id: "liver",
    name: "Maini",
    price: 7500,
    unit: "Kg",
    icon: "🥩",
    image: "images/maini.jpg",
    description: "Maini ya kuku. TSh 7,500 kwa kilo; unaweza kununua kuanzia nusu kilo.",
    minQty: 0.5,
    step: 0.5
  },

  gizzards: {
    id: "gizzards",
    name: "Firigisi",
    price: 7000,
    unit: "Kg",
    icon: "🥩",
    image: "images/firigisi.jpg",
    description: "Firigisi za kuku. TSh 7,000 kwa kilo."
  },

  intestines: {
    id: "intestines",
    name: "Utumbo",
    price: 5000,
    unit: "Kg",
    icon: "🍲",
    image: "images/utumbo.JPG",
    description: "Utumbo wa kuku. TSh 5,000 kwa kilo."
  },

  feet: {
    id: "feet",
    name: "Miguu ya Kuku",
    price: 5000,
    unit: "Kg",
    icon: "🍗",
    image: "images/miguu.JPG",
    description: "Miguu ya kuku. TSh 5,000 kwa kilo."
  },

  eggs: {
    id: "eggs",
    name: "Yai la Kienyeji",
    price: 800,
    unit: "yai",
    icon: "🥚",
    image: "images/yai.jpg",
    description: "Yai moja la kienyeji ni TSh 800."
  },

  "eggs-tray": {
    id: "eggs-tray",
    name: "Trei ya Mayai ya Kienyeji",
    price: 24000,
    unit: "trei (mayai 30)",
    icon: "🥚",
    image: "images/trei.jpg",
    description: "Trei moja ina mayai 30. Bei ni TSh 24,000."
  },

  "layers-chicken": {
    id: "layers-chicken",
    name: "Kuku wa Mayai",
    price: 18000,
    unit: "kuku",
    icon: "🐔",
    image: "images/kuku-mayai.JPG",
    description: "Kuku wa mayai. TSh 18,000 kwa kuku mmoja."
  },

  "kienyeji-chicken": {
    id: "kienyeji-chicken",
    name: "Kuku wa Kienyeji",
    price: 30000,
    unit: "kuku",
    icon: "🐔",
    image: "images/kuku-kienyeji.jpg",
    description: "Kuku wa kienyeji. TSh 30,000 kwa kuku mmoja."
  },

  "zagga-half": {
    id: "zagga-half",
    name: "Bigzero Zagga Nusu",
    price: 6000,
    unit: "kifurushi",
    icon: "📦",
    image: "images/zagga1.JPG",
    description: "Kifurushi cha Bigzero Zagga nusu inakuwa na mchanganyiko wa nyama za kuku kubwa."
  },

  "zagga-quarter": {
    id: "zagga-quarter",
    name: "Bigzero Zagga Robo",
    price: 3000,
    unit: "kifurushi",
    icon: "📦",
    image: "images/zagga2.JPG",
    description: "Kifurushi cha Bigzero Zagga robo inakuwa na mchanganyiko wa nyama za kuku kubwa."
  }
};

let cart = [];
let currentProduct = null;

const $ = id => document.getElementById(id);

const money = amount =>
  "TSh " + Number(amount).toLocaleString("en-US");

function formatQty(value) {
  return Number(value).toLocaleString("en-US", {
    maximumFractionDigits: 2
  });
}

function showPage(id) {
  const target = $(id);

  if (!target) {
    console.error("BIGZERO KUKU: Ukurasa haujapatikana:", id);
    return;
  }

  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active", page.id === id);
  });

  window.scrollTo({ top: 0, behavior: "auto" });
}

function enterShop() {
  const splash = $("splash");
  const home = $("homePage");

  if (!home) {
    alert("Ukurasa wa homePage haujapatikana. Hakikisha index.html ina id=\"homePage\".");
    return;
  }

  if (splash) splash.classList.add("hide");

  showPage("homePage");
}

function productImage(product) {
  return `
    <img
      src="${product.image}"
      alt="${product.name}"
      loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
    >
    <span class="fallback-emoji" style="display:none">${product.icon}</span>
  `;
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

  if ($("categoryTitle")) {
    $("categoryTitle").textContent = category.name;
  }

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
    if (!product) return "";

    return `
      <article class="product-card" data-product="${product.id}" tabindex="0">
        <div class="product-visual">${productImage(product)}</div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="price">${money(product.price)} / ${product.unit}</div>
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

  const minQty = product.minQty || 1;
  const step = product.step || 1;

  detail.innerHTML = `
    <div class="detail-layout">
      <div class="detail-art">${productImage(product)}</div>

      <div class="detail-copy">
        <span class="eyebrow">BIGZERO KUKU</span>
        <h2>${product.name}</h2>

        <p class="detail-price">
          ${money(product.price)} / ${product.unit}
        </p>

        <p class="muted">${product.description}</p>

        <label for="detailQty">Kiasi unachohitaji</label>

        <div class="qty-row">
          <input
            id="detailQty"
            type="number"
            min="${minQty}"
            step="${step}"
            value="${minQty}"
            inputmode="decimal"
            required
          >
          <span>${product.unit}</span>
        </div>

        <div class="total-box">
          <span>Jumla ya bidhaa hii</span>
          <strong id="detailTotal">${money(product.price * minQty)}</strong>
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

  $("addToCartBtn").addEventListener("click", () => {
    addToCart(false);
  });

  $("buyNowBtn").addEventListener("click", () => {
    addToCart(true);
  });
}

function quantity() {
  const input = $("detailQty");
  const value = Number(input ? input.value : 1);

  if (!currentProduct) return 1;

  const step = currentProduct.step || 1;
  const minQty = currentProduct.minQty || 1;

  if (!Number.isFinite(value) || value < minQty) {
    return minQty;
  }

  const rounded = Math.round(value / step) * step;

  return Number(Math.max(minQty, rounded).toFixed(2));
}

function updateDetailTotal() {
  if (!currentProduct || !$("detailTotal")) return;

  const qty = quantity();

  $("detailTotal").textContent =
    money(currentProduct.price * qty);
}

function addToCart(goToCheckout) {
  if (!currentProduct) return;

  const product = currentProduct;
  const qty = quantity();

  const input = $("detailQty");

  if (input) {
    input.value = qty;
  }

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty = Number((existing.qty + qty).toFixed(2));
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
    return sum + product.price * product.qty;
  }, 0);
}

function renderCart() {
  if ($("cartCount")) {
    $("cartCount").textContent = cart.reduce(
      (sum, product) => sum + product.qty,
      0
    );
  }

  if ($("cartTotal")) {
    $("cartTotal").textContent = money(cartTotal());
  }

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
        <small>
          Kiasi: ${formatQty(product.qty)} ${product.unit}
        </small>
        <br>
        <small>${money(product.price * product.qty)}</small>
      </div>

      <button
        type="button"
        class="remove-btn"
        data-remove="${product.id}"
        aria-label="Ondoa bidhaa"
      >✕</button>
    </div>
  `).join("");
}

function updateCheckoutTotal() {
  if ($("checkoutTotal")) {
    $("checkoutTotal").textContent = money(cartTotal());
  }
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

      const phoneInput = $("customerPhone");
  const phoneDigits = phoneInput ? phoneInput.value.replace(/\D/g, "") : "";

  if (!/^0[67][0-9]{8}$/.test(phoneDigits)) {
    alert("Namba ya simu lazima iwe na tarakimu 10 na ianze na 06 au 07. Mfano: 0712345678");
    if (phoneInput) phoneInput.focus();
    return;
  }


  const data = new FormData(form);
  const value = key => String(data.get(key) || "").trim();

  const lines = cart.map(product => {
    const qty = formatQty(product.qty);
    const amount = money(product.price * product.qty);

    return `• ${product.name}: ${qty} ${product.unit} × ${money(product.price)} = ${amount}`;
  });

  const message = [
    "🛒 ODA MPYA — BIGZERO KUKU",
    "",
    `Jina: ${value("customerName")}`,
    `Simu: ${value("customerPhone")}`,
    "",
    "BIDHAA ZILIZOAGIZWA:",
    ...lines,
    "",
    `Jumla ya bidhaa: ${money(cartTotal())}`,
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

function initPayment() {
  const pay = $("payment");
  const box = $("mobileMoneyBox");

  if (!pay || !box) return;

  const toggle = () => {
    box.style.display = pay.value.indexOf("Simu") === 0 ? "block" : "none";
  };

  pay.addEventListener("change", toggle);
  toggle();
}

function initBigzero() {
  const enterButton = $("enterBtn");

  if (enterButton) {
    enterButton.addEventListener("click", function (event) {
      event.preventDefault();
      enterShop();
    });
  }

  const browseButton = $("browseBtn");

  if (browseButton) {
    browseButton.addEventListener("click", enterShop);
  }

  const homeLogo = $("homeLogo");

  if (homeLogo) {
    homeLogo.addEventListener("click", enterShop);
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
        enterShop();
        return;
      }

      updateCheckoutTotal();
      showPage("checkoutPage");
    });
  }

  const form = $("orderForm");

  if (form) {
    form.addEventListener("submit", submitOrder);
  }

  initPayment();

  if ($("year")) {
    $("year").textContent = new Date().getFullYear();
  }

  renderCategories();
  renderCart();

  document.addEventListener("click", event => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const categoryButton = target.closest("[data-category]");

    if (categoryButton) {
      openCategory(categoryButton.dataset.category);
      return;
    }

    const productButton = target.closest("[data-open-product]");

    if (productButton) {
      event.stopPropagation();
      openProduct(productButton.dataset.openProduct);
      return;
    }

    const productCard = target.closest("[data-product]");

    if (productCard && !target.closest("button")) {
      openProduct(productCard.dataset.product);
      return;
    }

    const backButton = target.closest("[data-back]");

    if (backButton) {
      showPage(backButton.dataset.back);
      return;
    }

    const removeButton = target.closest("[data-remove]");

    if (removeButton) {
      cart = cart.filter(
        product => product.id !== removeButton.dataset.remove
      );

      renderCart();
      updateCheckoutTotal();
      return;
    }

    if (target.closest("#emptyCartBrowse")) {
      enterShop();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBigzero);
} else {
  initBigzero();
}

document.addEventListener("input", function (e) {
  if (e.target && e.target.id === "customerPhone") {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
  }
});
