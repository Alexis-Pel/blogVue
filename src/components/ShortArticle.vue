<template>
  <div class="bigContainer">
    <div class="container"  v-for="item in storage" :key="item">
      <h1>{{ item.title }}</h1>
      <p>{{ item.date }}</p>
      <h4>{{ item.author }}</h4>
      <p>{{ item.intro }}</p>
      <div class="buttonDiv">
      <router-link :to="`/singlepost/${item.id}`"><p class="myButton">Lire plus</p></router-link>
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
.container{
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   width: 600px;
   color: teal;
   background-color: white;
   box-shadow: 12px 13px 25px 1px rgba(0, 0, 0, 0.51);
   margin-bottom: 30px;
   padding: 20px;
   border-radius: 20px;
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
