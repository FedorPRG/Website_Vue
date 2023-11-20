import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSlider: 0,
    title: 'Minimal Look Bedrooms',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
    slider: [require('../assets/projectDetailsSlider1.png'), require('../assets/projectDetailsSlider2.png'), require('../assets/projectDetailsSlider3.png')],
    projects: [{
      img: require('../assets/index-item1.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture'
    }, {
      img: require('../assets/index-item2.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture'
    }, {
      img: require('../assets/index-item3.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture'
    }, {
      img: require('../assets/index-item4.png'),
      name: 'Minimal Bedroom',
      discription: 'Decor / Artchitecture'
    }],
    indicators: [{
      quantity: '12',
      name: 'Years Of Experiance'
    }, {
      quantity: '85',
      name: 'Success Project'
    }, {
      quantity: '15',
      name: 'Active Project'
    }, {
      quantity: '95',
      name: 'Happy CUstomers'
    }],
    articlesIndex: [{
      img: require('../assets/index-article1.png'),
      imgTag: require('../assets/tag1.png'),
      name: 'Let’s Get Solution For Building Construction Work',
      data: '26 December,2022'
    }, {
      img: require('../assets/index-article2.png'),
      imgTag: require('../assets/tag2.png'),
      name: 'Low Cost Latest Invented Interior Designing Ideas.',
      data: '22 December,2022'
    }, {
      img: require('../assets/index-article3.png'),
      imgTag: require('../assets/tag3.png'),
      name: 'Best For Any Office & Business Interior Solution',
      data: '25 December,2022'
    }],
    articles: [
      {
        img: require('../assets/blog-article1.png'),
        tag: require('../assets/tag1.png'),
        name: 'Let’s Get Solution For Building Construction Work',
        data: '26 December,2022'
      },
      {
        img: require('../assets/blog-article2.png'),
        tag: require('../assets/tag1.png'),
        name: 'Low Cost Latest Invented Interior Designing <br> Ideas.',
        data: '22 December,2022'
      },
      {
        img: require('../assets/blog-article3.png'),
        tag: require('../assets/tag1.png'),
        name: 'Best For Any Office & Business Interior Solution',
        data: '25 December,2022'
      },
      {
        img: require('../assets/blog-article4.png'),
        tag: require('../assets/tag1.png'),
        name: 'Let’s Get Solution For Building Construction Work',
        data: '26 December,2022'
      },
      {
        img: require('../assets/blog-article5.png'),
        tag: require('../assets/tag1.png'),
        name: 'Low Cost Latest Invented Interior Designing <br> Ideas.',
        data: '22 December,2022'
      },
      {
        img: require('../assets/blog-article6.png'),
        tag: require('../assets/tag1.png'),
        name: 'Best For Any Office & Business Interior Solution',
        data: '25 December,2022'
      }
    ]
  },
  mutations: {
    NEXT_SLIDER (state) {
      if (state.currentSlider !== 2) {
        state.currentSlider += 1
      } else { state.currentSlider = 0 }
    }
  },
  getters: {
    getSlider: (state) => {
      return state.slider[state.currentSlider]
    },
    getProjects: (state) => {
      return state.projects
    },
    getIndicators: (state) => {
      return state.indicators
    },
    getArticlesIndex: (state) => {
      return state.articlesIndex
    },
    getArticles: (state) => {
      return state.articles
    }
  }
})
