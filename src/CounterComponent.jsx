import { render } from 'preact';
import Counter from './Counter.jsx';

class CounterComponent extends HTMLElement {
    connectedCallback() {
        render(<Counter />, this);
    }
}

customElements.define('x-counter', CounterComponent);