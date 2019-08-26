import Vue from "vue";
import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/VueWebComponent';



const CustomElement = wrap(Vue, VueWebComponent);
// The API for registering a web component is customElements.define()
// "custom element" = "web component" 
window.customElements.define('my-custom-element', CustomElement);


// vue-cli-service build--target wc--name SafaGridView/SafaGridView "./src/main.js"


// new Vue({
//     render: h => h(App)
// }).$mount("#app");