import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const rootElement = document.createElement("div");
rootElement.id = "jan-rabek-app";

const style = document.createElement("style");
style.innerHTML = `


`;

function waitForElement(
    selector: string,
    callback: (element: Element) => void
): void {
    function checkForElement(): void {
        const element = document.querySelector(selector);

        if (element) {
            callback(element);
        } else {
            requestAnimationFrame(checkForElement);
        }
    }

    checkForElement();
}

waitForElement("#player-container-outer", (element) => {
   element.prepend(rootElement);
    document.body.appendChild(style);
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
});