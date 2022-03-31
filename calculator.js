var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      n1: 0,
      n2: 0,
      n3: 0,
      sum: 0,
      total: 0,
      squared: 0,
      showInfo: true,
    };
  },
  methods: {
    computeSum: function () {
      this.sum = parseInt(this.n1) + parseInt(this.n2) + parseInt(this.n3);
    },
    multiplySum: function () {
      this.total = parseInt(this.n1) * parseInt(this.n2) * parseInt(this.n3);
    },
    squareNumber1: function () {
      this.squared = parseInt(this.n1) * parseInt(this.n1);
    },
  },
};

Vue.createApp(App).mount("#app");
