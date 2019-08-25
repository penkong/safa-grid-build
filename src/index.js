// Import vue component

import SafaGridVue from './SafaGridVue.vue';

const Components = {
    SafaGridVue
};
// Declare install function executed by Vue.use()
export function install(Vue, options) {
    if (install.installed) return;
    install.installed = true;
    Object.keys(Components).forEach(name => {
        Vue.component(name, Components[name]);
    });
}

// Create module definition for Vue.use()
const plugin = {
    install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export SafaGridVue
export default Components;



// packaging-sfc-for-npm
// import Components from '@flockos/vue-components';

// // Global registration in your main.js/App.vue file
// Object.entried(Components).forEach((name, component) => {
//   Vue.component(name, component);
// });


// vue-cli-service build--target lib --name myLib [entry]

//check picture for commands
// npm run build - bundle
// npm publish--access public