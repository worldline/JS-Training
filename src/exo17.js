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
    return this.elm;
  }
};

const Input = {
  value: null,
  tag: "input",
  render() {
    super.render();
    this.elm.value = this.value;
    return this.elm;
  }
};

const TextInput = {
  name: "text-input",
  onKey(key) {
    this.value += key;
  }
};
