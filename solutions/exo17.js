const Component = {
    name: "generic-component",
    tag: "div",
    render() {
        this.elm = document.createElement(this.tag);
        this.elm.className = this.name;
        document.body.appendChild(this.elm);
    }
};

const Clickable = {
    listenToClickEvents(elm) {
        elm.addEventListener("click", this.onClick);
    },
    onClick(e) {
        console.log("click event", e);
    }
};

const Focusable = {
    listenToFocusEvents(elm) {
        elm.addEventListener("focus", this.onFocus);
        elm.addEventListener("blur", this.onBlur);
    },
    onFocus(e) {
        console.log("focus event", e);
    },
    onBlur(e) {
        console.log("blur event", e);
    }
};

const KeyboardObserver = {
    listenToKeyboardEvents(elm) {
        elm.addEventListener("keypress", e => this.onKey(e.key));
    },
    onKey(keyName) {
        console.log("key pressed", keyName);
    }
};

const Button = {
    text: "Button",
    tag: "button",
    name: "button",
    render() {
        super.render();
        this.elm.textContent = this.text;
        this.listenToClickEvents(this.elm);
        this.listenToFocusEvents(this.elm);
        return this.elm;
    }
};

Object.setPrototypeOf(Button, Component);
Object.assign(Button, Clickable, Focusable);

const Input = Object.assign(Object.create(Component),
    {
        value: null,
        tag: "input",
        render() {
            super.render();
            this.elm.value = this.value;
            this.listenToFocusEvents(this.elm);
            this.listenToKeyboardEvents(this.elm);
            return this.elm;
        },
    },
    KeyboardObserver,
    Focusable
);

const TextInput = {
    name: "text-input",
    onKey(key) {
        this.value += key;
    }
};

Object.setPrototypeOf(TextInput, Input);


/**
 * Exemple d'utilisation
 * Décommenter la partie Exo 17 dans index.html pour tester le fonctionnel attendu
 */

let text = Object.create(TextInput);
text.value = "Bob";
text.render();

let btn = Object.create(Button);
btn.text = "Salut !";
btn.onClick = () => alert(`Salut ${text.value} !`);
btn.render();
