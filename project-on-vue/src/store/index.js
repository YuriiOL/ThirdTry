import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // pics: add all information about pictures. Take img from assets img pics
    pics: [{
        id: 1,
        name: "Картина 1",
        img: require("@/assets/img/pics/01.jpg"),
        price: 500
      },
      {
        id: 2,
        name: "Картина 2",
        img: require("@/assets/img/pics/02.jpg"),
        price: 600
      },
      {
        id: 3,
        name: "Картина 3",
        img: require("@/assets/img/pics/03.jpg"),
        price: 700
      },
      {
        id: 4,
        name: "Картина 4",
        img: require("@/assets/img/pics/04.jpg"),
        price: 800
      },
      {
        id: 5,
        name: "Картина 5",
        img: require("@/assets/img/pics/05.jpg"),
        price: 900
      },
      {
        id: 6,
        name: "Картина 6",
        img: require("@/assets/img/pics/06.jpg"),
        price: 1000
      },
      {
        id: 7,
        name: "Картина 7",
        img: require("@/assets/img/pics/07.jpg"),
        price: 1100
      },
      {
        id: 8,
        name: "Картина 8",
        img: require("@/assets/img/pics/08.jpg"),
        price: 1200
      },
      {
        id: 9,
        name: "Картина 9",
        img: require("@/assets/img/pics/09.jpg"),
        price: 1300
      },
      {
        id: 10,
        name: "Картина 10",
        img: require("@/assets/img/pics/10.jpg"),
        price: 1400
      },
      {
        id: 11,
        name: "Картина 11",
        img: require("@/assets/img/pics/11.jpg"),
        price: 1500
      }
    ],
    // borders: all info about Borders, Take img from assets borders
    borders: [{
        id: 1,
        name: "Рама 1",
        img: require("@/assets/img/borders/rama-01.png"),
        price: 100
      },
      {
        id: 2,
        name: "Рама 2",
        img: require("@/assets/img/borders/rama-02.png"),
        price: 200
      },
      {
        id: 3,
        name: "Рама 3",
        img: require("@/assets/img/borders/rama-03.png"),
        price: 300
      },
      {
        id: 4,
        name: "Рама 4",
        img: require("@/assets/img/borders/rama-04.png"),
        price: 400
      },
      {
        id: 5,
        name: "Рама 5",
        img: require("@/assets/img/borders/rama-05.png"),
        price: 500
      },
      {
        id: 6,
        name: "Рама 6",
        img: require("@/assets/img/borders/rama-06.png"),
        price: 600
      },
      {
        id: 7,
        name: "Рама 7",
        img: require("@/assets/img/borders/rama-07.png"),
        price: 700
      },
      {
        id: 8,
        name: "Рама 8",
        img: require("@/assets/img/borders/rama-08.png"),
        price: 800
      },
      {
        id: 9,
        name: "Рама 9",
        img: require("@/assets/img/borders/rama-09.png"),
        price: 900
      },
      {
        id: 10,
        name: "Рама 10",
        img: require("@/assets/img/borders/rama-10.png"),
        price: 1000
      },
      {
        id: 11,
        name: "Рама 11",
        img: require("@/assets/img/borders/rama-11.png"),
        price: 1100
      },
      {
        id: 12,
        name: "Рама 12",
        img: require("@/assets/img/borders/rama-12.png"),
        price: 1200
      },
      {
        id: 13,
        name: "Рама 13",
        img: require("@/assets/img/borders/rama-13.png"),
        price: 1300
      },
      {
        id: 14,
        name: "Рама 14",
        img: require("@/assets/img/borders/rama-14.png"),
        price: 1400
      },
      {
        id: 15,
        name: "Рама 15",
        img: require("@/assets/img/borders/rama-15.png"),
        price: 1500
      }
    ],
    // colors: all info about Colors, Take img from assets colors
    colors: [{
        id: 1,
        name: "BahamaBlue",
        img: require("@/assets/img/marks/BahamaBlue.jpg"),
        color: require("@/assets/img/marks/colors/1.png"),
        select: false
      },
      {
        id: 2,
        name: "BambooLeaves",
        img: require("@/assets/img/marks/BambooLeaves.jpg"),
        color: require("@/assets/img/marks/colors/2.png"),
        select: false
      },
      {
        id: 3,
        name: "Cottagelvy",
        img: require("@/assets/img/marks/CottageIvy.jpg"),
        color: require("@/assets/img/marks/colors/3.png"),
        select: false
      },
      {
        id: 4,
        name: "LilacPosies",
        img: require("@/assets/img/marks/LilacPosies.jpg"),
        color: require("@/assets/img/marks/colors/4.png"),
        select: false
      },
      {
        id: 5,
        name: "PearTart",
        img: require("@/assets/img/marks/PearTart.jpg"),
        color: require("@/assets/img/marks/colors/5.jpg"),
        select: false
      },
      {
        id: 6,
        name: "PottersClay",
        img: require("@/assets/img/marks/PottersClay.jpg"),
        color: require("@/assets/img/marks/colors/6.jpg"),
        select: false
      },
      {
        id: 7,
        name: "RhubarbStalk",
        img: require("@/assets/img/marks/RhubarbStalk.jpg"),
        color: require("@/assets/img/marks/colors/7.png"),
        select: false
      },
      {
        id: 8,
        name: "Tangelo",
        img: require("@/assets/img/marks/Tangelo.jpg"),
        color: require("@/assets/img/marks/colors/8.png"),
        select: false
      }
    ],
    //chosenBorder: Save info about chosen border after select
    chosenBorder: [],
    //chosenPics: Save info about chosen picture after select
    chosenPics: [],
    //chosenColors: Save info about chosen colors after select
    chosenColors: [],
    //titles: Save info about titles after custumer writen down 
    titles: {
      title1: "",
      title2: "",
      title3: ""
    },
    //font: variable change the fonts of input titles
    font: 0,
    //price: variable change the price depend from selections
    price: [],
    //Information about selecting items, will go to Payload
    order: [],
    //variable make visual selected picture
    selectPics: 0,
    //variable make visual selected border
    selectBorders: 0,
    sum: 0
  },
  getters: {
    pics: state => state.pics,
    borders: state => state.borders,
    colors: state => state.colors,
    chosenPics: state => state.chosenPics,
    chosenBorder: state => state.chosenBorder,
    titles: state => state.titles,
    font: state => state.font,
    chosenColors: state => state.chosenColors,
    order: state => state.order,
    price: state => state.price,
    selectPics: state => state.selectPics,
    selectBorders: state => state.selectBorders,
    sum: state => state.sum
  },
  mutations: {
    //add only one picture to array chosenPics, also add price, and order info to order array
    addpics(state, value) {
      state.chosenPics.splice(0, 1, value);
      state.price.splice(0, 1, value.price);
      state.order.splice(0, 1, value.name);
      state.sum = state.price.reduce(function (a, b) {
        return a + b;
      }, 0);
    },

    //add only one border to array chosenBorder, also add price, and order info to order array
    addborder(state, value) {
      state.chosenBorder.splice(0, 1, value);
      state.price.splice(1, 1, value.price);
      state.order.splice(1, 1, value.name);
      state.sum = state.price.reduce(function (a, b) {
        return a + b;
      }, 0);
    },
    //add titles in side bar, save information about titles and font
    addFontAriston: state => {
      state.font = 1;
      state.order.splice(
        2,
        1,
        `Titles: ${Object.values(state.titles)} Font: Ariston`
      );
    },
    //add titles in side bar, save information about titles and font
    addFontDavinci: state => {
      state.font = 2;
      state.order.splice(
        2,
        1,
        `Titles: ${Object.values(state.titles)} Font: DaVinci`
      );
    },
    //add titles in side bar, save information about titles and font
    addFontBrody: state => {
      state.font = 3;
      state.order.splice(
        2,
        1,
        `Titles: ${Object.values(state.titles)} Font: Brody`
      );
    },
    // add colors to order info, add price if in order more than 3 element and the same for 6 element
    addColors(state, value) {
      if (state.chosenColors.length < 8) {
        state.order.push(value.name);
        state.chosenColors.push(value.color);
        if (state.chosenColors.length == 3) {
          state.price.push(30);
          state.sum = state.price.reduce(function (a, b) {
            return a + b;
          }, 0);
        }
        if (state.chosenColors.length == 6) {
          state.price.push(30)
          state.sum = state.price.reduce(function (a, b) {
            return a + b;
          }, 0);
        }
      } else {
        return;
      }
    },
    //save price info to order list 
    orderPrice(state) {
      state.order.push(`Price: ${state.sum}`);
    },
    //highlight select picture
    selectPicss(state, value) {
      state.selectPics = value;
    },
    //highlight select border
    selectBorder(state, value) {
      state.selectBorders = value;
    },
  },
  actions: {},
  modules: {}
});