import Vue from 'vue'
import App from './App.vue'
import './css/tictactoe.scss';
import './js/tictactoe.js';

window.$ = window.jQuery = require('jquery');

new Vue({
  el: '#app',
  render: h => h(App)
})
