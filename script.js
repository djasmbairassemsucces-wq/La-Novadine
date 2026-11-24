// La Novadine — 31 visuels de menu : plats, boissons.
// Logo et photo du restaurant sont des images séparées.
// Le script teste plusieurs chemins possibles pour s'adapter aux dossiers images/images ou images.
let cart = [];
const WHATSAPP_NUMBER = "63611776";

const MENU_ITEMS = [
  { id: 1, image: "plat1.jpeg", name: "Assiette Burger et Poulet Frit", category: "Plat", description: "Burger au bœuf, frites dorées et morceaux de poulet frit croustillant. ", price: 6000 },
  { id: 2, image: "plat2.jpeg", name: "Riz Jollof au Poulet Rôti", category: "Plat", description: "Riz rouge à la tomate, cuisse de poulet rôti et œuf, parfumé et généreux. ", price: 5000 },
  { id: 3, image: "plat3.jpeg", name: "Poulet Braisé Sauce Verte", category: "Plat", description: " Poulet braisé au feu de bois avec sauce verte pimentée et sauce blanche douce. ", price: 6500 },
  { id: 4, image: "plat4.jpeg", name: "Wrap au Bœuf Grillé", category: "Plat", description: "Tortilla garnie de bœuf grillé, maïs, légumes frais et sauce maison. ", price: 4000 },
  { id: 5, image: "plat5.jpeg", name: "Poulet Grillé à la Braise", category: "Plat", description: "Morceaux de poulet marinés puis grillés, tendres à l'intérieur et dorés dehors.", price: 5500 },
  { id: 6, image: "plat6.jpeg", name: "Poulet Rôti Doré", category: "Plat", description: "Poulet rôti au four, peau dorée et chair juteuse, à manger seul ou à partager.", price: 5500 },
  { id: 7, image: "plat7.jpeg", name: "Burger Royal et Frites", category: "Plat", description: " Burger au bœuf, tomate et salade, frites en panier et sauce maison.", price: 4500 },
  { id: 8, image: "plat8.jpeg", name: "Cheeseburger Fondu et Frites", category: "Plat", description: "Burger au steak juteux et fromage fondu, frites croustillantes.", price: 5000 },
  { id: 9, image: "plat9.jpeg", name: "Légumes Sautés Croquants", category: "Plat", description: "Poivrons, carottes et haricots verts sautés à l'ail, léger et coloré.", price: 3500 },
  { id: 10, image: "plat10.jpeg", name: " Poulet Braisé et Frites Maison", category: "Plat", description: "Demi poulet braisé, frites dorées, salade fraîche et trio de sauces.", price: 7000 },
  { id: 11, image: "plat11.jpeg", name: "Poisson Braisé et Riz Blanc", category: "Plat", description: "Poisson braisé, riz blanc parfumé, haricots et citron.", price: 8000 },
  { id: 12, image: "plat12.jpeg", name: "Poulet Rôti et Frites", category: "Plat", description: "Poulet rôti doré, frites croustillantes et petite salade fraîche.", price: 6000 },  
  { id: 13, image: "plat13.jpeg", name: "Capitaine Braisé et Plantain", category: "Plat", description: "Poisson capitaine braisé, banane plantain frite, salade et sauce tomate pimentée.", price: 9000 },
  { id: 14, image: "plat14.jpeg", name: "Émincé de Bœuf aux Poivrons et Frites", category: "Plat", description: "Lamelles de bœuf sautées aux poivrons et oignons, servies avec frites.", price: 6500 },
  { id: 15, image: "plat15.jpeg", name: "Frites Croustillantes et Sauce", category: "Plat", description: "Grande portion de frites dorées et croustillantes avec sauce au choix.", price: 2000 },
  { id: 16, image: "plat16.jpeg", name: "Riz au Poisson et Sauce Tomate", category: "Plat", description: "Riz blanc, poisson grillé, sauce tomate, citron et piment.", price: 7500 },
  { id: 17, image: "plat17.jpeg", name: "Riz Jollof au Poulet Braisé", category: "Plat", description: "Riz jollof épicé, morceaux de poulet braisé et légumes de saison.", price: 5500 },
  { id: 18, image: "plat18.jpeg", name: "Ailes de Poulet Grillées et Frites", category: "Plat", description: " Ailes de poulet marinées et grillées, frites dorées et salade.", price: 6000 },
  { id: 19, image: "plat19.jpeg", name: "Poulet Braisé Spécial La Novadine", category: "Plat", description: "Recette signature, poulet braisé, frites, salade et trio de sauces maison.", price: 7500 },
  { id: 20, image: "plat20.jpeg", name: "Cocktail Menthe Citron Vert", category: "Boisson", description: " Boisson verte fraîche à la menthe, au citron vert et à la glace pilée, douce et très rafraîchissante.", price: 4000 },
  { id: 21, image: "plat21.jpeg", name: "Jus d'Orange Frais", category: "Boisson", description: "Jus d'orange frais servi bien glacé, pressé à la minute, sans sucre ajouté.", price: 2500 },
  { id: 22, image: "plat22.jpeg", name: "Coca-Cola Glacé", category: "Boisson", description: "Bouteille et canette de Coca-Cola servies très froides avec des glaçons.", price: 1500 },
  { id: 23, image: "plat23.jpeg", name: "Amarula", category: "Boisson", description: "Liqueur crémeuse Amarula servie avec des glaçons, douce et onctueuse.", price: 5000 },
  { id: 24, image: "plat24.jpeg", name: "Vin Rouge", category: "Boisson", description: "Verre de vin rouge, servi à température ambiante, idéal avec les grillades.", price: 4000 },
  { id: 25, image: "plat25.jpeg", name: "Whisky avec Glaçons", category: "Boisson", description: "Verre de whisky ambré servi avec des glaçons, pour les amateurs de boissons fortes.", price: 5000 },
  { id: 26, image: "plat26.jpeg", name: "Trio de Jus de Fruits Frais", category: "Boisson", description: " Trio de jus frais : orange, mangue et fruits rouges, servis bien glacés avec menthe et citron.", price: 3500 },
  { id: 27, image: "plat27.jpeg", name: "Jus d'Orange Pressé", category: "Boisson", description: "Jus d'orange 100% naturel, pressé devant toi, riche en vitamine C et très frais.", price: 2500 },
  { id: 28, image: "plat28.jpeg", name: "Citronnade Maison au Citron Vert", category: "Boisson", description: "Limonade maison au citron vert, menthe fraîche et glaçons, légère et désaltérante.", price: 2500 },
  { id: 29, image: "plat29.jpeg", name: " Cognac sur Glace", category: "Boisson", description: "Verre de cognac ambré servi sur glace, fort et parfumé, à déguster doucement.", price: 6000 },
  { id: 30, image: "plat30.jpeg", name: "Soda Cola avec Glaçons", category: "Boisson", description: "Soda cola bien frais servi dans un grand verre avec beaucoup de glaçons.", price: 1500 },
  { id: 31, image: "plat31.jpeg", name: "Thé Glacé au Citron", category: "Boisson", description: "Thé glacé au citron, servi  citron et menthe fraîche.", price: 2500 }
 ];

function imageCandidates(filename) {
  const base = filename.replace(/^\/+/, "");
  const names = [base, base.replace(/\.jpeg$/i, ".jpg"), base.replace(/\.jpeg$/i, ".png")];
  return [...new Set(names.flatMap(name => [`images/${name}`, `images/images/${name}`]))];
}
function setImageWithFallback(img, filename, onFail, onSuccess) {
  const candidates = imageCandidates(filename);
  let index = 0;
  const tryNext = () => {
    if (index >= candidates.length) { if (onFail) onFail(); return; }
    img.onload = () => { img.hidden = false; if (onSuccess) onSuccess(); };
    img.onerror = () => { index++; tryNext(); };
    img.src = candidates[index++];
  };
  tryNext();
}
function setBackgroundWithFallback(element, filename) {
  if (!element) return;
  const probe = new Image();
  const candidates = imageCandidates(filename);
  let index = 0;
  const tryNext = () => {
    if (index >= candidates.length) return;
    probe.onload = () => { element.style.backgroundImage = `url("${probe.src}")`; };
    probe.onerror = () => { index++; tryNext(); };
    probe.src = candidates[index++];
  };
  tryNext();
}
function formatMoney(amount) { return Number(amount).toLocaleString("fr-FR") + " FCFA"; }
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[character]));
}
function renderMenu() {
  const grid = document.getElementById("menu-grid");
  if (!grid) return;
  const food = MENU_ITEMS.filter(item => item.id <= 19);
  const drinks = MENU_ITEMS.filter(item => item.id >= 20);
  const renderGroup = (title, subtitle, items) => `<h3 class="menu-group-title">${title}<small>${subtitle}</small></h3>` + items.map(item => {
    const priceSet = Number(item.price) > 0;
    return `<article class="menu-card">
      <div class="menu-card-image"><img data-menu-image="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" loading="lazy"><span class="missing-image-label" hidden>Photo non trouvée : ${escapeHTML(item.image)}</span></div>
      <div class="menu-card-content"><p class="dish-category">${escapeHTML(item.category)}</p><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.description)}</p>
      <div class="menu-card-footer"><strong>${priceSet ? formatMoney(item.price) : "Prix à renseigner"}</strong><button type="button" class="add-to-cart" ${priceSet ? `onclick="addToCart(${item.id})"` : "disabled"}>${priceSet ? "+ Ajouter" : "En attente du prix"}</button></div></div></article>`;
  }).join("");
  grid.innerHTML = renderGroup("Nos plats", "PHOTOS 1 À 19", food) + renderGroup("Nos boissons", "PHOTOS 20 À 31", drinks);
  grid.querySelectorAll("img[data-menu-image]").forEach(img => setImageWithFallback(img, img.dataset.menuImage, () => { img.style.display="none"; img.parentElement.classList.add("image-missing"); img.parentElement.querySelector(".missing-image-label").hidden=false; }));
}
function renderGroup(title, subtitle, items) {
  return `<div class="menu-group-title"><h3>${title}</h3><span>${subtitle}</span></div>` + items.map(item => {
    const priceSet = Number(item.price) > 0;
    return `<article class="menu-card"><div class="menu-card-image"><img data-menu-image="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" loading="lazy"><span class="missing-image-label" hidden>Photo non trouvée : ${escapeHTML(item.image)}</span></div><div class="menu-card-content"><p class="dish-category">${escapeHTML(item.category)}</p><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.description)}</p><div class="menu-card-footer"><strong>${priceSet ? formatMoney(item.price) : "Prix à renseigner"}</strong><button type="button" class="add-to-cart" ${priceSet ? `onclick="addToCart(${item.id})"` : "disabled"}>${priceSet ? "+ Ajouter" : "En attente du prix"}</button></div></div></article>`;
  }).join("");
}
function addToCart(id) {
  const item = MENU_ITEMS.find(product => product.id === id);
  if (!item || Number(item.price) <= 0) return;
  const existing = cart.find(product => product.id === id);
  if (existing) existing.quantity += 1; else cart.push({id, name:item.name, price:Number(item.price), quantity:1});
  renderCart();
  document.getElementById("panier")?.scrollIntoView({behavior:"smooth"});
}
function changeQuantity(index, amount) { if (!cart[index]) return; cart[index].quantity += amount; if (cart[index].quantity <= 0) cart.splice(index,1); renderCart(); }
function removeFromCart(index) { if (index < 0 || index >= cart.length) return; cart.splice(index,1); renderCart(); }
function renderCart() {
  const list = document.getElementById("cart-list"); if (!list) return;
  const count = cart.reduce((sum,item)=>sum+item.quantity,0);
  const total = cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
  document.getElementById("cart-count")?.replaceChildren(document.createTextNode(count));
  document.getElementById("cart-count-label")?.replaceChildren(document.createTextNode(count + (count>1 ? " articles" : " article")));
  document.getElementById("cart-total")?.replaceChildren(document.createTextNode("Total : " + formatMoney(total)));
  if (!cart.length) { list.textContent="Votre panier est vide."; return; }
  list.innerHTML=cart.map((item,index)=>`<div class="cart-row"><div><strong>${escapeHTML(item.name)}</strong><p>${formatMoney(item.price)} × ${item.quantity}</p></div><div class="cart-row-controls"><button type="button" onclick="changeQuantity(${index},-1)" aria-label="Diminuer">−</button><span>${item.quantity}</span><button type="button" onclick="changeQuantity(${index},1)" aria-label="Augmenter">+</button><button type="button" onclick="removeFromCart(${index})" aria-label="Retirer">×</button></div></div>`).join("");
}
function commanderWhatsApp() {
  if (!cart.length) { alert("Votre panier est vide."); return; }
  if (WHATSAPP_NUMBER === "REMPLACER_PAR_LE_NUMERO") { alert("Veuillez d'abord configurer le numéro WhatsApp dans script.js."); return; }
  let message="Bonjour La Novadine, je souhaite passer cette commande :\n\n", total=0;
  cart.forEach(item=>{const subtotal=item.price*item.quantity;total+=subtotal;message+=`${item.name} × ${item.quantity} = ${formatMoney(subtotal)}\n`;});
  message+=`\nTOTAL : ${formatMoney(total)}\n\nMerci !`;
  window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message),"_blank","noopener,noreferrer");
}
const navToggle=document.getElementById("nav-toggle"), mainNav=document.getElementById("main-nav");
if(navToggle&&mainNav){navToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");navToggle.setAttribute("aria-expanded",String(open));});mainNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mainNav.classList.remove("open");navToggle.setAttribute("aria-expanded","false");}));}
const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
setBackgroundWithFallback(document.getElementById("hero-photo"), "restaurant.jpeg");
const restaurantImg=document.getElementById("restaurant-photo"); if(restaurantImg) setImageWithFallback(restaurantImg,"restaurant.jpeg",()=>{restaurantImg.style.display="none";restaurantImg.parentElement.classList.add("image-placeholder");const fallback=restaurantImg.parentElement.querySelector(".image-fallback"); if(fallback) fallback.hidden=false;});
const logo=document.getElementById("brand-logo"); const brandMark=document.getElementById("brand-mark"); if(logo) setImageWithFallback(logo,"logo.jpeg",()=>{logo.hidden=true;},()=>{if(brandMark) brandMark.hidden=true;});
renderMenu(); renderCart();
