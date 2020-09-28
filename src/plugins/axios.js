import Vue from 'vue';
import axios from 'axios'

Vue.prototype.$http = axios
// vue라는 클래스에 $http 변수 하나 추가 
// this.$http this는 vue객체?