<template>
  <div class="nav">
      <div class="nav-left">
          <span class="title">BLOG</span>
      </div>
      <div class="nav-right">
        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/admin">Admin</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
    .nav{
        display:flex;
        height:10%;
        width: 100%;
    }
    .nav-left{
        display:flex;
        height:100%;
        width: 30%;
        justify-content: center;
        align-items: center;
    }
    .nav-right{
        display:flex;
        height:100%;
        width: 70%;
        justify-content: flex-end;
    }
    .title{
        display:flex;
        font-size: 2em;
    }
    .links{
        display:flex;
        justify-content:space-evenly;
        align-items: center;
        height:100%;
        width: 40%;
    }
    .nav a {
        font-weight: bold;
        color: #2c3e50;

    }

    .nav a.router-link-exact-active {
        color: #42b983;
    }
</style>