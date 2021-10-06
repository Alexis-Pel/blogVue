<template>
  <div id="page">
    <div id="titleBlock">
      <h1 id="title">{{ storage[$route.params.id].title }}</h1>
      <h6 id="subtitle">
        Publié le {{ storage[$route.params.id].date }} par {{ storage[$route.params.id].author }}
      </h6>
    </div>
    <div id="content">
      <h4>{{ storage[$route.params.id].intro }} <br /><br /></h4>
      <h5>
        {{ storage[$route.params.id].content }}
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
#page {
  display: flex;
  justify-content: center;
}
#titleBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2em;
  margin: auto;
}
#title {
  padding-left: 2em;
  padding-right: 2em;
  border-bottom: 2px solid;
}
#subtitle {
  display: flex;
  font-size: 50%;
}

#title,
#subtitle {
  margin-top: 0%;
  margin-bottom: 0%;
}

#content {
  margin-top: 5rem;
  text-align: start;
  position: absolute;
  top: 5em;
  left: 2%;
  right: 2%;
  bottom: 0;
  border-radius: 20px;
  box-shadow: 12px 13px 25px 1px rgba(0, 0, 0, 0.51);
  padding: 1%;
}

.image {
  display: flex;
  height: 30%;
  width: 100%;
  background-image: url("../assets/bg-about.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
}
</style>