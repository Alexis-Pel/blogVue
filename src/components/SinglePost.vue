<template>
  <div id="page">
    <transition name="fade">
      <div v-if="!show" id="titleBlock">
        <h1 id="title">{{ storage[index].title }}</h1>
        <h6 id="subtitle">
          Publié le {{ storage[index].date }} par {{ storage[index].author }}
        </h6>
      </div>
    </transition>
    <div id="content">
      <h4>{{ storage[index].intro }}</h4>
      <img
        v-if="storage[index].alt != ''"
        :src="storage[index].alt"
        id="img"
        alt="Image"
      /><br />
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
      show: true,
      index: 1,
      intervalID: null,
    };
  },
  computed: {
    storage() {
      return this.$store.state.articles;
    },
  },
  beforeMount() {
    (this.intervalID = setInterval),
      setTimeout(() => {
        this.show = !this.show;
      }, 1000);
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
  padding-right: 2em;
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

#img {
  height: 180px;
  width: 250px;
  margin-left: 65em;
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>