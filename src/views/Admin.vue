<template>
  <div class="fond">
    <div>
      <table>
        <tr v-for="(todo, index) in load" :key="todo.id" class="row">
          <th class="article" :id="todo.title">{{todo.title}}</th>
          <th class="article" :id="todo.intro">{{todo.intro}}</th>
          <th class="article" :id="todo.author">{{todo.author}}</th>
          <button class="edit" @click="edit(index)">editer</button>
          <button class="edit" @click="suppr(index)">supprimer</button>
        </tr>
        <tr>
          <th><input type="text" name="title" id="title" placeholder="titre"></th>
          <th><input type="text" name="intro" id="intro" placeholder="introduction"></th>
          <th><input type="text" name="author" id="author" placeholder="auteur"></th>
          <th><button>ajouter</button></th>
        </tr>
      </table>
      <textarea name="content" id="" cols="137" rows="10" placeholder="Écris le contenu de l'article..."></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  methods:{
    suppr(index){
      this.$store.dispatch('removeTodoByID', index)
    },
  },
  computed:{
    load(){
      return this.$store.state.todos
    }
  }
}
</script>

<style scoped>
table{
  width: 100%;
  border-width: none;
}
th{
  border: 2px solid black;
  border-radius: 2.5px;
}
button{
  margin-left: 10%;
  border: 2px solid black;
  border-radius: 5px;
}
button.edit{
  margin-left: 10%;
}
input{
  text-align: center;
  width: 100%;
  border-width: 0;
  padding: 0;
}
textarea{
  margin-top: 25px;
  border: 2px solid black;
  border-radius: 5px;
  color: black;
}
</style>