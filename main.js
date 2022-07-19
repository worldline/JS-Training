import Reveal from 'reveal.js'

const deck = new Reveal()
deck.initialize({  
  history: true,
  transition: 'linear',
  hash: true,

  // Learn about plugins: https://revealjs.com/plugins/
  plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
})