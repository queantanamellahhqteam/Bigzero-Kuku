
/* BIGZERO KUKU — picha za bidhaa pekee */
const BIGZERO_PRODUCT_IMAGES = {
  whole: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=900&q=85",
  half: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85",
  "chicken-meat": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=900&q=85",
  "mix-quarter": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
  "mix-half": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=85",
  "small-thighs": "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85",
  "large-thighs": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
  backs: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85",
  necks: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85",
  breasts: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85",
  liver: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=85",
  gizzards: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&w=900&q=85",
  intestines: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=85",
  feet: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85",
  eggs: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=900&q=85",
  "eggs-tray": "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=900&q=85",
  "layers-chicken": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=900&q=85",
  "kienyeji-chicken": "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=900&q=85",
  "zagga-half": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85",
  "zagga-quarter": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85"
};

Object.keys(BIGZERO_PRODUCT_IMAGES).forEach(id => {
  if (typeof products !== "undefined" && products[id]) {
    products[id].image = BIGZERO_PRODUCT_IMAGES[id];
  }
});
