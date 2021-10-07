<template>
  <div>
    <div class="bg-white rounded p-4 px-4 md:p-8 mb-6">
      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
        <div class="lg:col-span-2">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div class="md:col-span-2">
              <label for="author">Author</label>
              <input
                type="text"
                name="author"
                id="author"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value=""
                v-model="auteur"
              />
            </div>

            <div class="md:col-span-3">
              <label for="title">Title</label>
              <input
                type="text"
                name="title"
                id="articleTitle"
                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                placeholder=""
                v-model="titre"
              />
            </div>

            <div class="md:col-span-2">
              <label for="intro">Intro</label>
              <textarea
                type="text"
                name="intro"
                id="intro"
                class="h-10 border mt-1 rounded px-4 py-2 w-full bg-gray-50"
                value=""
                placeholder=""
                v-model="intro"
              />
            </div>

            <div class="md:col-span-3">
              <label for="content">Content</label>
              <textarea
                type="text"
                name="content"
                id="article"
                class="h-10 border mt-1 rounded px-4 py-2 w-full bg-gray-50"
                value=""
                placeholder=""
                v-model="article"
              />
            </div>

            <div class="md:col-span-5 text-right">
              <div class="inline-flex items-end">
                <button
                  @click="annuler()"
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    mr-2
                    rounded
                  "
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="page">
      <transition name="fade">
        <div id="titleBlock">
          <h1 id="title" v-html="markTotitle"></h1>
          <h6>Publié par</h6>
          <h6 id="subtitle" v-html="markToauthor"></h6>
        </div>
      </transition>
      <div id="articleContent">
        <h4 v-html="markToIntro"></h4>
        <br />
        <h5 v-html="markToContent"></h5>
      </div>
    </div>
  </div>
</template>

<script>
import Marked from "marked";
const marked = Marked.default;

export default {
  components: {},
  data() {
    return {
      content: this.article,
      title: this.titre,
      author: this.auteur,
      intron: this.intro,
    };
  },
  methods: {
    annuler() {
      this.$store.commit("setContent", this.article);
      this.$store.commit("setTitle", this.title);
      this.$store.commit("setAuthor", this.author);
      this.$store.commit("setIntro", this.intron);
    },
  },
  mounted() {
    this.content = this.article;
    this.title = this.titre;
    this.author = this.auteur;
    this.intron = this.intro;
  },
  computed: {
    markToContent() {
      return marked(
        this.$store.state.articles[this.$store.state.editMark].content
      );
    },
    markTotitle() {
      return marked(
        this.$store.state.articles[this.$store.state.editMark].title
      );
    },
    markToauthor() {
      return marked(
        this.$store.state.articles[this.$store.state.editMark].author
      );
    },
    markToIntro() {
      return marked(
        this.$store.state.articles[this.$store.state.editMark].intro
      );
    },
    titre: {
      get() {
        return this.$store.state.articles[this.$store.state.editMark].title;
      },
      set(value) {
        this.$store.commit("setTitle", value);
      },
    },
    auteur: {
      get() {
        return this.$store.state.articles[this.$store.state.editMark].author;
      },
      set(value) {
        this.$store.commit("setAuthor", value);
      },
    },
    article: {
      get() {
        return this.$store.state.articles[this.$store.state.editMark].content;
      },
      set(value) {
        this.$store.commit("setContent", value);
      },
    },
    intro: {
      get() {
        return this.$store.state.articles[this.$store.state.editMark].intro;
      },
      set(value) {
        this.$store.commit("setIntro", value);
      },
    },
  },
};
</script>

<style scoped>
#articleContent {
  text-align: left;
}
#title {
  padding-left: 2em;
  padding-right: 2em;
  border-bottom: 2px solid;
  font-size: 2em;
}
#subtitle {
  font-size: 50%;
}

#title,
#subtitle {
  margin-top: 0%;
  margin-bottom: 0%;
}

#content {
  border-radius: 20px;
  box-shadow: 12px 13px 25px 1px rgba(0, 0, 0, 0.51);
  padding: 1%;
}
</style>
