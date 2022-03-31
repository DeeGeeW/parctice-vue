var App = {
  data: function () {
    return {
      message: "Hello from JavaScript",
      name: "D.J.",
      count: 0,
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "It Changed!";
    },
  },
};

Vue.createApp(App).mount("#app");
