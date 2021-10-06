<template>
  <div>
    <div id="titleBlock">
      <h1 id="title">{{ storage[index].title }}</h1>
      <h6 id="subtitle">
        Publié le {{ storage[index].date }} par {{ storage[index].author }}
      </h6>
    </div>
    <div id="content">
      <h5>
        {{ storage[index].intro }} <br /><br />
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
      index: 1
    };
  },
  computed: {
    storage() {
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