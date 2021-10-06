import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /*
  La state est uniquement modifiable via les mutations,
  elle contient toute la donnée du Store,
  accessible de puis n'importe ou sur votre App
  Accessible depuis un composant Vue, via les computed:
  "this.$store.state.articles"
  */
  state: {
    articles: [
      {
        id: 0,
        title: "Titre de l'article",
        date: "06/10/2021",
        author: "Alexis Pelissier",
        intro:
          "Il y a longtemps, dans une galaxie lointaine, très lointaine...",
        content: "BLAHBLAHBLAHBLAHBLAH",
        alt:""
      },
      {
        id: 1,
        title: "Titre de l'article 2",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 2,
        title: "Titre de l'article 3",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 3,
        title: "Titre de l'article 4",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 4,
        title: "Titre de l'article 5",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 5,
        title: "Titre de l'article 6",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 6,
        title: "Titre de l'article 7",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 7,
        title: "Titre de l'article 8",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 8,
        title: "Titre de l'article 9",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 9,
        title: "Titre de l'article 10",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 10,
        title: "Titre de l'article 11",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 11,
        title: "Titre de l'article 12",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 12,
        title: "Titre de l'article 13",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 13,
        title: "Titre de l'article 14",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 14,
        title: "Titre de l'article 15",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 15,
        title: "Titre de l'article 16",
        date: "06/10/2021",
        author: "Alexis Rabiller",
        intro:
          "Pour combien d'euros...",
        content: "EN BAS LA",
        alt:""
      },
      {
        id: 16,
        title: "Titre de l'article de beau gosse",
        date: "06/10/2021",
        author: "Alexis Pelissier",
        intro:
          "Il y a longtemps, dans une galaxie lointaine, très lointaine...",
        content: "BLAHBLAHBLAHBLAHBLAH",
      },
      {
        id: 17,
        title: "Les Aventures de Shana",
        date: "06/10/2021",
        author: "Mayel LEGRAND",
        intro:
          "Mon Maitre m'a emmenée en promenade à l'occasion d'un date Tinder...",
        content: "BLAHBLAHBLAHBLAHBLAH",
      },
      {
        id: 18,
        title: "Nouveau Spectacle de Mayel LEGRAND : Tinder Surprise !",
        date: "06/10/2021",
        author: "Sandra Dauger",
        intro:
          "La vie d'un jeune célibataire n'est pas de tout repos...",
        content: "BLAHBLAHBLAHBLAHBLAH",
      }
    ]
  },
  /*
  Les mutations permettent de modifier la donnée contenue dans la "state"
  On appelle une mutation via un ` commit('nomMutation', data) `
  */
  mutations: {
    /* Les mutations ont 2 params: state, et la data que vous lui envoyez */
    addTodo(state, data) {
      state.articles.push(data)
    },
    suprr(state, index) {
      state.articles.splice(index, 1)
    },
  },
  /*
  Les actions sont commes des méthodes, un peu plus générales, qui peuvent lire
  la state et "commit" des mutations pour modifier la state.
  On peut y mettre des call API, du traitement, etc...
  */
  actions: {
    /* Les actions ont 2 params: context, et la data que vous lui envoyez */
    removeTodoByID(context, id) {
      id = parseInt(id)
      context.commit('suprr', id)
    }
  },

  /* Getters:
  Similaires aux computed, ce sont des fonctions utilisées comme des variables
  Ils peuvent lire la state
  et retourner de la donnée modifiée (sans la modifier dans la state!!)
  */
  getters: {

  },
  /* Nous ne verrons pas les modules tout de suite */
  modules: {

  }
})