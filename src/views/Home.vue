<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ShortArticle/>
    <!-- <admin-test/> -->
  </div>
</template>

<script>
// import AdminTest from '../components/AdminTest.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ShortArticle from '../components/ShortArticle.vue'

export default {
  name: 'Home',
  components: {
    // AdminTest
    // HelloWorld,
    ShortArticle
  }
}
</script>
