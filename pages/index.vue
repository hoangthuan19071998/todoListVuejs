<template>
  <div class="container">
    <div class="addNewTask border">
      <add-todo />
    </div>
    <div
      class="toDoList border"
      style="margin-left: 5px; position: relative; padding-bottom: 60px"
    >
      <toDoList />
    </div>
  </div>
</template>
<script>
import addTodo from "~/components/addTodo.vue";
import toDoList from "~/components/todoList.vue";
export default {
  data() {
    return {
      addTodo: false,
    };
  },

  components: {
    addTodo,
    toDoList,
  },
  methods: {},
};
</script>
