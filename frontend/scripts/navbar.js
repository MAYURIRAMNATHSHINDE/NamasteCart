export const navbar = () => {
  return `
       <div class="empty">
            <p>Members lace up our newest run-to-train shoe first, starting January 2—only on the app.<u>Download the
                    App</u></p>
        </div>
    
        <div class="logo">
            <img src="./assets/Edited_Namaste Cart_just_logo.png" alt="logo image">
            <h1><span style="color: rgb(195,100,119);">Namaste</span><span style="color: rgb(33,133,131);">Cart</span></h1>
        </div>
    
        <nav class="navbar">
    
            <ul class="menu">
                <li class="menu-item">Women</li>
                <li class="menu-item">Men</li>
                <li class="menu-item">Accessories</li>
                <li class="menu-item">Kids</li>
                <li class="menu-item">What's New</li>
                <li class="menu-item" style="color: red;">New Year Scores</li>
            </ul>
    
            <div class="search-bar">
                <input type="text" placeholder="  Search on NamasteCart...">
            </div>
             <div class="icons">
        <div class="dropdown-container">
            <img id="login-icon" src="./assets/Login1.png" alt="login image" style="width: 25px; height:25px;" onclick="redirectToLogin()">
            <div class="dropdownofProfile" id="dropdown-menu">
                <a href="./profile.html">Profile</a>
                <a href="./orders.html">Orders</a>
                <a href="./wishlist.html">Wishlist</a>
                <a href="./gift-cards.html">Gift Cards</a>
                <a href="./contact-us.html">Contact Us</a>
                <a href="./saved-addresses.html">Saved Addresses</a>
                <a href="./edit-profile.html">Edit Profile</a>
                <a href="./logout.html">Logout</a>
            </div>
        </div>
        <img src="./assets/wishlist.png" alt="wishlist image" style="width: 25px; height:25px;">
        <img src="./assets/AddToCart.png" alt="add to cart image" style="width: 25px; height:25px;">
    </div>
    
        </nav>
        <div class="dropdown">
            <div class="section">
              <h3>New Year Scores</h3>
              <ul>
                <li>What's New</li>
                <li>Bestsellers</li>
                <li>Align Shop</li>
                <li>Travel Clothes</li>
              </ul>
            </div>
            <div class="section">
              <h3>Women's Clothes</h3>
              <ul>
                <li>Bras & Underwear</li>
                <li>Bodysuits</li>
                <li>Joggers</li>
                <li>Leggings</li>
              </ul>
            </div>
            <div class="section">
              <h3>Accessories</h3>
              <ul>
                <li>Backpacks</li>
                <li>Bags</li>
                <li>Belt Bags</li>
                <li>Yoga Mats</li>
              </ul>
            </div>
          </div>`;
}
navbar()

  