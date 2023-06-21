'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        id: 1,
        name: "Skol Lata 250ml",
        price: "2.20",
        "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg",
      },
      {
        id: 2,
        name: "Heineken 600ml",
        price: "7.50",
        "url_image": "http://localhost:3001/images/heineken_600ml.jpg",
      },
      {
        id: 3,
        name: "Antarctica Pilsen 300ml",
        price: "2.49",
        "url_image": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
      },
      {
        id: 4,
        name: "Brahma 600ml",
        price: "7.50",
        "url_image": "http://localhost:3001/images/brahma_600ml.jpg",
      },
      {
        id: 5,
        name: "Skol 269ml",
        price: "2.19",
        "url_image": "http://localhost:3001/images/skol_269ml.jpg",
      },
      {
        id: 6,
        name: "Skol Beats Senses 313ml",
        price: "4.49",
        "url_image": "http://localhost:3001/images/skol_beats_senses_313ml.jpg",
      },
      {
        id: 7,
        name: "Becks 330ml",
        price: "4.99",
        "url_image": "http://localhost:3001/images/becks_330ml.jpg",
      },
      {
        id: 8,
        name: "Brahma Duplo Malte 350ml",
        price: "2.79",
        "url_image": "http://localhost:3001/images/brahma_duplo_malte_350ml.jpg",
      },
      {
        id: 9,
        name: "Becks 600ml",
        price: "8.89",
        "url_image": "http://localhost:3001/images/becks_600ml.jpg",
      },
      {
        id: 10,
        name: "Skol Beats Senses 269ml",
        price: "3.57",
        "url_image": "http://localhost:3001/images/skol_beats_senses_269ml.jpg",
      },
      {
        id: 11,
        name: "Stella Artois 275ml",
        price: "3.49",
        "url_image": "http://localhost:3001/images/stella_artois_275ml.jpg",
      },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
