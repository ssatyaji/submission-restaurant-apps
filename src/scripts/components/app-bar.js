class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="navigationDrawer">
      <div class="logo">
          <h1>RestorApps</h1>
      </div>
      <a href="#" class="burger" id="hamburgerButton"><span class="fa fa-bars"></span></a>
      <ul class="nav" id="navigationDrawer">
          <li class="navlink"><a href="./index.html">Home</a></li>
          <li class="navlink"><a href="#">Favorit</a></li>
          <li class="navlink"><a href="https://www.linkedin.com/in/ssatyaji/" target="_blank">About Us</a></li>
          <li class="navlink"><a href="#"><span class="fa fa-search"></span></a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);