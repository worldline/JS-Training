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
        elm.addEventListener("click", event => this.onClick(event));
    },
    onClick(event) {
        console.log("click event", event);
    }
};

const Focusable = {
    listenToFocusEvents(elm) {
        elm.addEventListener("focus", event => this.onFocus(event));
        elm.addEventListener("blur", event => this.onBlur(event));
    },
    onFocus(event) {
        console.log("focus event", event);
    },
    onBlur(event) {
        console.log("blur event", event);
    }
};

const Editable = {
    listenToKeyboardEvents(elm) {
        elm.addEventListener("keyup", event => this.onKey(event));
    },
    onKey(event) {
        console.log("key pressed", event);
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

const Input = {
    value: null,
    tag: "input",
    render() {
        console.log("super", super.render);
        super.render();
        this.elm.value = this.value;
        this.listenToFocusEvents(this.elm);
        this.listenToKeyboardEvents(this.elm);
        return this.elm;
    },
    ...Focusable,
    ...Editable
};

Object.setPrototypeOf(Input, Component);

const TextInput = {
    name: "text-input",
    onKey(event) {
        this.value = event.target.value;
    }
};

Object.setPrototypeOf(TextInput, Input);

//TODO: établir et coder les relations entre les différents objets: délégation, composition ou encapsulation

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
