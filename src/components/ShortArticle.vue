<template>
  <div class="bigContainer">
    <div class="container"  v-for="item in items" :key="item">
      <h1>{{ item.title }}</h1>
      <p>{{ item.date }}</p>
      <h4>{{ item.author }}</h4>
      <p>{{ item.intro }}</p>
      <div class="buttonDiv">
      <p class="myButton" @="moreAboutThisArticle">Lire plus</p>
      <img class="logo" src="../assets/search-logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortArticle",
  data() {
    return {
        item: "",
      items: [
        {
          id: 0,
          title: "Titre de l'article de beau gosse",
          date: "06/10/2021",
          author: "Alexis Pelissier",
          intro:
            "Il y a longtemps, dans une galaxie lointaine, très lointaine...",
          content: "BLAHBLAHBLAHBLAHBLAH",
        },
        {
          id: 1,
          title: "Les Aventures de Shana",
          date: "06/10/2021",
          author: "Mayel LEGRAND",
          intro:
            "Mon Maitre m'a emmenée en promenade à l'occasion d'un date Tinder...",
          content: "BLAHBLAHBLAHBLAHBLAH",
        },
        {
          id: 2,
          title: "Nouveau Spectacle de Mayel LEGRAND : Tinder Surprise !",
          date: "06/10/2021",
          author: "Sandra Dauger",
          intro:
            "La vie d'un jeune célibataire n'est pas de tout repos...",
          content: "BLAHBLAHBLAHBLAHBLAH",
        },
      ],
      methods: {
          moreAboutThisArticle() {
              console.log("je suis dans la fonction du bouton")
            //   router.push({ name: 'SinglePost', params: { id: id } })
          }
      }
    };
  },
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
