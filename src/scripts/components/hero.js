class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-image">
      <div class="hero-text">
          <h1>.are you hungry?</h1>
          <p>let's find out with us!</p>
          <a href="#explore-restauran"><button><span class="fa fa-check-circle"></span> Explore Restaurant</button></a>
      </div>
    </div>
    `;
  }
}

customElements.define('self-hero', Hero);
