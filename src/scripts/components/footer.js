class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
      <p>Copyright &copy; 2021 - RestorApps</p>
    </footer>
    `;
  }
}

customElements.define('self-footer', Footer);
