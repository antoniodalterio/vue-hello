const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "L'amichevole Spider-Man di quartiere",
      img: 'marvel.jpg',
      classImg: 'sizing',
      classText: 'red',
    };
  },
}).mount('#app');
