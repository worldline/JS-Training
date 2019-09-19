module.exports = {
  base: "/JS-training/",
  locales: {
    "/": {
      lang: "en-US",// this will be set as the lang attribute on <html>
      title: "Advanced JavaScript Training",
      description: "Advanced JavaScript Training support material"
    },

    "/fr/": {
      lang: "fr-FR",
      title: "JavaScript Avancé",
      description: "Une formation avancée au langage JavaScript"
    }
  },

  themeConfig: {
    locales: {
      "/": {
        selectText: "Language",
        label: "English",
        sidebar: [
          "/",
          "/preamble/",
          "/reintroduction/"/*,
          "/es2015/",
          "/asynchronicity/",
          "/object-oriented/",
          "/functional-programing/",
          "/beyond-js/"*/
        ]
      },

      "/fr/": {
        selectText: "Langue",
        label: "Français",
        sidebar: [
          /* "/fr/",
           "/fr/preambule/",
           "/fr/reintroduction/",
           "/fr/es2015/",
           "/fr/asynchronicite/",
           "/fr/oriente-objet/",
           "/fr/oriente-fonctionnel/",
           "/fr/au-dela-du-js/"*/
        ]
      }
    }
  },

  plugins: [
    require('./plugins/copy-code/'),
    'vuepress-plugin-global-toc',
    //require('./plugins/global-toc/'),
  ]
}