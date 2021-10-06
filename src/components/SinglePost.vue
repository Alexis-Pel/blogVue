<template>
  <div>
    <div id="titleBlock">
      <h1 id="title">{{ storage[index].title }}</h1>
      <h6 id="subtitle">
        Publié le {{ storage[index].date }} par {{ storage[index].author }}
      </h6>
    </div>
    <div id="content">
      <h4>
        {{ storage[index].intro }} <br /><br />
      </h4>
      <h5>
        {{ storage[index].content }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    storage() {
      return this.$store.state.todos;
    },
  },
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
  background-color: beige;
  text-align: start;
  position: absolute;
  top: 5em;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>