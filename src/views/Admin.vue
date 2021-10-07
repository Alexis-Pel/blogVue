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
                <a
                  href="#"
                  class="text-indigo-600 font-bold hover:text-indigo-900 mr-2"
                  >Edit</a
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
  </section>
</template>

<script>
export default {
  name: "Admin",
  computed: {
    load() {
      return this.$store.state.articles;
    },
  },
  methods: {
    suppr(index) {
      this.$store.dispatch("removeTodoByID", index);
    },
  },
};
</script>