<template>
  <!-- <div class="nav">
      <div class="nav-left">
          <span class="title">BLOG</span>
      </div>
      <div class="nav-right">
        <div class="links">
            <router-link class="mr-5 hover:text-gray-900" to="/">Home</router-link>
            <router-link class="mr-5 hover:text-gray-900" to="/about">About</router-link>
            <router-link class="mr-5 hover:text-gray-900" to="/admin">Admin</router-link>
        </div>
      </div>
  </div> -->
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="../assets/logo.png" class="w-12 h-12 text-white p-2">
      <span class="ml-3 text-xl font-extrabold">Blog VueJS</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <router-link class="mr-5 hover:text-blue-500 font-bold" to="/">Home</router-link>
            <router-link class="mr-5 hover:text-blue-500 font-bold" to="/about">About</router-link>
            <router-link class="mr-5 hover:text-blue-500 font-bold" to="/admin">Admin</router-link>
    </nav>
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