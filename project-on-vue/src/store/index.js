import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pics: [{
        id: 1,
        name: 'Картина 1',
        img: require("@/assets/img/pics/01.jpg"),
        price: 500
      },
      {
        id: 2,
        name: 'Картина 2',
        img: require("@/assets/img/pics/02.jpg"),
        price: 600
      },
      {
        id: 3,
        name: 'Картина 3',
        img: require("@/assets/img/pics/03.jpg"),
        price: 700
      },
      {
        id: 4,
        name: 'Картина 4',
        img: require("@/assets/img/pics/04.jpg"),
        price: 800
      },
      {
        id: 5,
        name: 'Картина 5',
        img: require("@/assets/img/pics/05.jpg"),
        price: 900
      },
      {
        id: 6,
        name: 'Картина 6',
        img: require("@/assets/img/pics/06.jpg"),
        price: 1000
      },
      {
        id: 7,
        name: 'Картина 7',
        img: require("@/assets/img/pics/07.jpg"),
        price: 1100
      },
      {
        id: 8,
        name: 'Картина 8',
        img: require("@/assets/img/pics/08.jpg"),
        price: 1200
      },
      {
        id: 9,
        name: 'Картина 9',
        img: require("@/assets/img/pics/09.jpg"),
        price: 1300
      },
      {
        id: 10,
        name: 'Картина 10',
        img: require("@/assets/img/pics/10.jpg"),
        price: 1400
      },
      {
        id: 11,
        name: 'Картина 11',
        img: require("@/assets/img/pics/11.jpg"),
        price: 1500
      },
    ],
    borders: [{
        id: 1,
        name: 'Рама 1',
        img: require("@/assets/img/borders/rama-01.png"),
        price: 100
      },
      {
        id: 2,
        name: 'Рама 2',
        img: require("@/assets/img/borders/rama-02.png"),
        price: 200
      },
      {
        id: 3,
        name: 'Рама 3',
        img: require("@/assets/img/borders/rama-03.png"),
        price: 300
      },
      {
        id: 4,
        name: 'Рама 4',
        img: require("@/assets/img/borders/rama-04.png"),
        price: 400
      },
      {
        id: 5,
        name: 'Рама 5',
        img: require("@/assets/img/borders/rama-05.png"),
        price: 500
      },
      {
        id: 6,
        name: 'Рама 6',
        img: require("@/assets/img/borders/rama-06.png"),
        price: 600
      },
      {
        id: 7,
        name: 'Рама 7',
        img: require("@/assets/img/borders/rama-07.png"),
        price: 700
      },
      {
        id: 8,
        name: 'Рама 8',
        img: require("@/assets/img/borders/rama-08.png"),
        price: 800
      },
      {
        id: 9,
        name: 'Рама 9',
        img: require("@/assets/img/borders/rama-09.png"),
        price: 900
      },
      {
        id: 10,
        name: 'Рама 10',
        img: require("@/assets/img/borders/rama-10.png"),
        price: 1000
      },
      {
        id: 11,
        name: 'Рама 11',
        img: require("@/assets/img/borders/rama-11.png"),
        price: 1100
      },
      {
        id: 12,
        name: 'Рама 12',
        img: require("@/assets/img/borders/rama-12.png"),
        price: 1200
      },
      {
        id: 13,
        name: 'Рама 13',
        img: require("@/assets/img/borders/rama-13.png"),
        price: 1300
      },
      {
        id: 14,
        name: 'Рама 14',
        img: require("@/assets/img/borders/rama-14.png"),
        price: 1400
      },
      {
        id: 15,
        name: 'Рама 15',
        img: require("@/assets/img/borders/rama-15.png"),
        price: 1500
      },
    ],
    colors: [{
        id: 1,
        name: 'BahamaBlue',
        img: require("@/assets/img/marks/BahamaBlue.jpg"),
      },
      {
        id: 2,
        name: 'BambooLeaves',
        img: require("@/assets/img/marks/BambooLeaves.jpg"),
      },
      {
        id: 3,
        name: 'Cottagelvy',
        img: require("@/assets/img/marks/CottageIvy.jpg"),
      },
      {
        id: 4,
        name: 'LilacPosies',
        img: require("@/assets/img/marks/LilacPosies.jpg"),
      },
      {
        id: 5,
        name: 'PearTart',
        img: require("@/assets/img/marks/PearTart.jpg"),
      },
      {
        id: 6,
        name: 'PottersClay',
        img: require("@/assets/img/marks/PottersClay.jpg"),
      },
      {
        id: 7,
        name: 'RhubarbStalk',
        img: require("@/assets/img/marks/RhubarbStalk.jpg"),
      },
      {
        id: 8,
        name: 'Tangelo',
        img: require("@/assets/img/marks/Tangelo.jpg"),
      },
    ],
    chosenItems: []
  },
  getters: {
    pics: state => state.pics,
    borders: state => state.borders,
    colors: state => state.colors,
    chosenItems: state => state.chosenItems
  },
  mutations: {
    addItem(state, value) {
      console.log(state.chosenItems)
      return state.chosenItems.splice(0, 1, value)
    }
  },
  actions: {},
  modules: {}
});