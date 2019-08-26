import Vue from 'vue'
import SafaGridView from './SafaGridView';

if (process.env.VUE_APP_E2E) {
    Vue.component('SafaGridView', SafaGridView)
} else {
    // Install the plugin directly from src in development
    Vue.use(require('./src').default)
}

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')