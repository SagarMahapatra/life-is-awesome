import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import theme from './theme';


export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(Vuetify);
    options.vuetify = new Vuetify({
        theme: theme,
    });
};