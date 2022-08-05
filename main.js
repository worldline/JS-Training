import Reveal from './assets/lib/reveal.esm.js'

Reveal.initialize({  
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
  plugins: [ RevealHighlight, RevealNotes, Internation ]
})