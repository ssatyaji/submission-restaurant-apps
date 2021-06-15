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
      <button class="burger" id="hamburgerButton">☰</button>
      <ul class="nav" id="navigationDrawer">
          <li class="navlink"><a href="./index.html">Home</a></li>
          <li class="navlink"><a href="#/like">Favorit</a></li>
          <li class="navlink"><a href="https://www.linkedin.com/in/ssatyaji/" target="_blank">About Us</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
