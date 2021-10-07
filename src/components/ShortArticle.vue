<template>
  <div class="bigContainer">
    <div class="contain flex flex-col bg-white items-center justify-evenly sm:w-1/3 h-96 text-green-700 mb-10 p-12 rounded-lg"  v-for="(item, index) in storage" :key="item.id">
      <h1>{{ item.title }} {{ index + 1 }} </h1>
      <p>{{ item.date }}</p>
      <h4>{{ item.author }}</h4>
      <p>{{ item.intro }}</p>
      <div class="buttonDiv">
      <router-link :to="`/singlepost/${index}`"><p class="myButton">Lire plus</p></router-link>
      <img class="logo" src="../assets/search-logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortArticle",
  computed: {
    storage() {
      return this.$store.state.articles;
    },
  }
};
</script>

<style scoped>
.bigContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    background-color: teal;
}
.contain{
   box-shadow: 12px 13px 25px 1px rgba(0, 0, 0, 0.51);
}
p{
    color: black;
}

.myButton {
    font-size: 20px;
    color: #2A8387;
    font-weight: 600;
}
.myButton:hover {
    color: teal;
    font-weight: 800;
    cursor: pointer;
}
.logo{
    width: 20px;
}
.buttonDiv{
    display: flex;
    width: 150px;
    justify-content: space-evenly;
    align-items: center;
}
</style>
