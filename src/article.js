import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /*
  La state est uniquement modifiable via les mutations,
  elle contient toute la donnée du Store,
  accessible de puis n'importe ou sur votre App
  Accessible depuis un composant Vue, via les computed:
  "this.$store.state.todos"
  */
  state: {
    todos: [
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
      state.todos.push(data)
    },
    suprr(state, index) {
      state.todos.splice(index, 1)
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
      const index = context.state.todos.findIndex((todo) => { return todo.id == id })
      context.commit('suprr', index)
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