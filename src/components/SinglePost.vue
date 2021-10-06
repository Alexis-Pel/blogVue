<template>
  <div>
    <div id="titleBlock">
      <h1 id="title">{{ article.title }}</h1>
      <h6 id="subtitle">
        Publié le {{ article.date }} par {{ article.author }}
      </h6>
    </div>
    <div id="content">
      <h5>
        {{ article.intro }} <br /><br />
        {{ article.content }}
      </h5>
      {{ todos }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  data() {
    return {
      article: {
        id: 0,
        title: "Titre de l'article",
        date: "06/10/2021",
        author: "Alexis Pelissier",
        intro:
          "Il y a longtemps, dans une galaxie lointaine, très lointaine...",
        content: "BLAHBLAHBLAHBLAHBLAH",
      },
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
};
</script>

<style scoped>
#titleBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
#title {
  border-bottom: 2px solid;
}
#subtitle {
display: flex;
}

#title,
#subtitle {
  margin-top: 0%;
  margin-bottom: 0%;
}

#content {
  margin-top: 5rem;
  padding-bottom: 30%;
  background-color: beige;
  border: 1px solid;
  border-radius: 10px;
}
</style>