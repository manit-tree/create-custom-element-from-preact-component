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