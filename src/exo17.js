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
    // TODO: écouter les événements clic et focus
    return this.elm;
  }
};

const Input = {
  value: null,
  tag: "input",
  render() {
    super.render();
    this.elm.value = this.value;
    // TODO: écouter les événements keypress et focus
    return this.elm;
  }
};

const TextInput = {
  name: "text-input",
  onKey(key) {
    this.value += key;
  }
};

//TODO: établir et coder les relations entre les différents objets: délégation, composition ou encapsulation
// tester le fonctionnel attendu sur la page de test dans src/exo17.html