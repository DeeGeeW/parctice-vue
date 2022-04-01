/* global Vue */

var App = {
  data: function () {
    return {
      message: "How many will you complete?",
      todos: [],
    };
  },
  methods: {
    // ...
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
  },
};

Vue.createApp(App).mount("#app");
