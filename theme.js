// src/theme.js
import colors from 'vuetify/es5/util/colors'

const MY_ICONS = {
    academy: 'mdi-school',
    search: 'mdi-search'
};

export default {
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
        values: MY_ICONS,
    },
    theme: {
        dark: false,
    },
    themes: {
        light: {
            primary: '#ab400f', //brick color
            secondary: '#b0bec5',
            anchor: '#8c9eff',
        },
    },
}