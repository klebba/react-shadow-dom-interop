// 2024-08-08 - workaround for `vite` which currently does not support static import syntax:
// e.g.: import stylesheet from './demo-badge.css' with { type: 'css' };

const { default: stylesheet } = await import('./demo-badge.css', { with: { type: 'css' } });

const template = document.createElement('template');
template.innerHTML = `
  <div id="container">
    <div id="icon">
      <slot name="icon"></slot>
    </div>
    <div id="label">
      <slot></slot>
    </div>
  </div>
`;

class DemoBadgeElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.adoptedStyleSheets = [stylesheet];
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('demo-badge', DemoBadgeElement);
