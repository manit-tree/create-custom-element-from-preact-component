# Create custom element from Preact component

Mini project for learning how to create custom element from Preact's component

### Counter.jsx

```js
import { useState } from 'preact/hooks';
import './counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    let increase = () => {
        setCount(count + 1);
    }

    return (
        <div class="counter">
            <h1>Counter : <span>{count}</span></h1>
            <button onclick={increase}>+ INCREASE</button>
        </div>
    )
}
```

### Counter.css

```css
.counter {
    font-family: sans-serif, tahoma;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    h1 {
        span {
            color: red;
        }
    }

    button {
        padding: 0.5em 0.75em;
    }
}
```

### CounterComponent.jsx

```js
import { render } from 'preact';
import Counter from './Counter.jsx';

class CounterComponent extends HTMLElement {
    connectedCallback() {
        render(<Counter />, this);
    }
}

customElements.define('x-counter', CounterComponent);
```

### index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="./favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create custom element from Preact Component</title>
    <style>
      #app {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        display: grid;
        place-content: center;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <x-counter></x-counter>
    </div>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script src="./dist/CounterComponent.iife.js?v=1.0.1"></script>
  </body>
</html>
```
