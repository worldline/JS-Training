import Reveal from 'reveal.js'

const deck = new Reveal()
deck.initialize({  
  history: true,
  transition: 'linear',
  hash: true,
  internation: {
    switchselector: '.langchooser',
    languages: {
      fr: {
        name: 'Français',
        dictionary: './assets/languages/fr.json'
      },
    }
  },
  plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, Internation ]
})