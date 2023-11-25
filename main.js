const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "L'amichevole Spider-Man di quartiere",
      classText: 'red',
      img: {
        class: 'sizing',
        src: 'marvel.jpg',
        alt: 'Immagine di Spider-Man',
      },
    };
  },
}).mount('#app');
