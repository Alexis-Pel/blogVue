
<template>
  <div class="home">
    <div class="logoAndGreetings">
     
      <p>Salut toi!</p>
    </div>
    <div class="button-start" @click="redirectToSigninF">
      <!-- <router-link to="/signin">Démarrer</router-link> -->
      <p class="start">Démarrer</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    redirectToSigninF() {
      this.$router.push({ name: "SignIn" });
    },
  },
};
</script>

<style lang="scss" scoped>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
.home {
  background-color: #7d65a9;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.home img {
  width: 311px;
  height: 198px;
}
.logoAndGreetings {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    height: 27px;
    color: white;
    font-weight: bold;
  }
}

.button-start {
  width: 348px;
  height: 48px;
  background-color: #50bcbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .start {
    width: 348px;
    text-decoration: none;
    color: white;
    font-family: Poppins;
    // font-style: semiBold;
    font-size: 14px;
    line-height: 21px;
    line-height: 100%;
    text-align: Center;
  }
}
</style>
