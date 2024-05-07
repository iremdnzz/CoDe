// Sepetin tutulacağı dizi
var cartItems = [];

// Ürünleri sepete ekleme işlemi
function addToCart(event) {
  var productBox = event.target.closest(".product_box");
  var productName = productBox.querySelector(".bursh_text").textContent;
  cartItems.push(productName);
  updateCart();
}

// Sepetin güncellenmesi ve görüntülenmesi
function updateCart() {
  var cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  if (cartItems.length === 0) {
    var emptyCartMessage = document.createElement("li");
    emptyCartMessage.textContent = "Henüz ürün eklenmedi.";
    cartElement.appendChild(emptyCartMessage);
  } else {
    for (var i = 0; i < cartItems.length; i++) {
      var cartItem = document.createElement("li");
      cartItem.textContent = cartItems[i];
      cartElement.appendChild(cartItem);
    }
  }
}

// "Sepete Ekle" butonlarına tıklama olayı
var addToCartButtons = document.getElementsByClassName("add-to-cart");
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCart);
}
