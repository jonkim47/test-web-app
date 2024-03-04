import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div />
            <header>
                <h1>Hello World</h1>
            </header>
            <span>
                <nav>
                    <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                    <a href="/about">About</a> | <a href="/contact">Contact Us</a>
                </nav>
                <button>Button</button>
            </span>
        </div>
    );
}

export default App;
