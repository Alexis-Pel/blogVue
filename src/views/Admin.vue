<template>
  <section class="container mx-auto p-6 font-mono flex items-center flex-col">
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr
              class="
                text-md
                font-semibold
                tracking-wide
                text-left text-gray-100
                bg-gray-900
                uppercase
                border-b border-gray-600
              "
            >
              <th class="px-4 py-3">Author</th>
              <th class="px-4 py-3">Title</th>
              <th class="px-4 py-3">Intro</th>
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr
              v-for="(todo, index) in load"
              :key="todo.id"
              class="text-gray-700"
            >
              <td class="px-4 py-3 border">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold text-black">{{ todo.author }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-ms font-semibold border">
                {{ todo.title }}
              </td>
              <td class="px-4 py-3 text-xs border">
                <span
                  class="px-2 py-1 font-semibold leading-tight text-gray-700"
                >
                  {{ todo.intro }}
                </span>
              </td>
              <td class="px-4 py-3 text-sm border">{{ todo.date }}</td>
              <td class="px-4 py-3 text-xs border">
                <router-link :to="`/editpost`"
                  ><a @click="edit(index)"
                    class="text-indigo-600 font-bold hover:text-indigo-900 mr-2"
                    >Edit</a
                  ></router-link
                >
                <span
                  @click="suppr(index)"
                  class="
                    select-none
                    cursor-pointer
                    text-red-400
                    font-bold
                    hover:text-red-600
                  "
                  >Delete</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <div class="bg-white rounded p-4 px-4 md:p-8 mb-6">
        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-2">
                <label for="author">Author</label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  v-model="author"
                />
              </div>

              <div class="md:col-span-3">
                <label for="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                  v-model="title"
                />
              </div>

              <div class="md:col-span-2">
                <label for="intro">Intro</label>
                <textarea
                  type="text"
                  name="intro"
                  id="intro"
                  class="h-10 border mt-1 rounded px-4 py-2 w-full bg-gray-50"
                  value=""
                  placeholder=""
                  v-model="intro"
                />
              </div>

              <div class="md:col-span-3">
                <label for="content">Content</label>
                <textarea
                  type="text"
                  name="content"
                  id="content"
                  class="h-10 border mt-1 rounded px-4 py-2 w-full bg-gray-50"
                  placeholder=""
                  v-model="content"
                />
              </div>

              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button
                    class="
                      bg-blue-500
                      hover:bg-blue-700
                      text-white
                      font-bold
                      py-2
                      px-4
                      rounded
                    "
                    @click="add(title, author, intro, content)"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      author: this.$slots.default ? this.$slots.default[0].text : "",
      title: this.$slots.default ? this.$slots.default[0].text : "",
      intro: this.$slots.default ? this.$slots.default[0].text : "",
      content: this.$slots.default ? this.$slots.default[0].text : "",
    };
  },
  computed: {
    load() {
      return this.$store.state.articles;
    },
  },
  methods: {
    suppr(index) {
      this.$store.dispatch("removeTodoByID", index);
    },
    add(title, author, intro, content) {
      let data = {
        title: title,
        author: author,
        intro: intro,
        content: content,
        id: this.load.length,
        date: `${
          new Date().getDate() < 10
            ? `0${new Date().getDate()}`
            : new Date().getDate()
        }/${
          new Date().getMonth() + 1 < 10
            ? `0${new Date().getMonth() + 1}`
            : `${new Date().getMonth() + 1}`
        }/${new Date().getFullYear()}`,
      };
      if (
        data.title == "" ||
        data.author == "" ||
        data.intro == "" ||
        data.content == ""
      ) {
        alert("Veuillez remplir tous les champs s'il vous plaît");
      } else {
        this.$store.dispatch("addTodoByID", data);
        this.title = "";
        this.author = "";
        this.intro = "";
        this.content = "";
      }
    },
    edit(index) {
      this.$store.state.editMark = index;
    },
  },
};
</script>