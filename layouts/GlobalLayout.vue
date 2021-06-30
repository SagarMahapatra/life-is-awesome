<template>
    <v-app id="inspire" style="background-color: white;">
        <v-navigation-drawer width="800px" v-model="searchDrawer" :clipped="$vuetify.breakpoint.lgAndUp" right flat absolute temporary style="position:fixed; top:0; left:auto; overflow-y:scroll;right: 0; ">
            <v-row mt-5>
                <v-col>
                    <SearchBox></SearchBox>
                </v-col>
            </v-row>
        </v-navigation-drawer>
        <v-navigation-drawer width="400px" v-model="rightDrawer" :clipped="$vuetify.breakpoint.lgAndUp" right flat absolute temporary style="position:fixed; top:0; left:auto; overflow-y:scroll;right: 0;">
            <v-list-item two-line>
                <v-list-item-avatar width="200" height="auto" tile>
                    <v-img :src="$site.themeConfig.logo"></v-img>
                </v-list-item-avatar>
                <!-- <v-list-item-content>
                    <v-list-item-title>{{$site.title}}</v-list-item-title>
                    <v-list-item-subtitle>and shine bright</v-list-item-subtitle>
                </v-list-item-content> -->
            </v-list-item>
            <!-- <v-divider></v-divider> -->
            <v-list class="pl-3">
                <template v-for="item in rightSidebarItems">
                    <template v-if="item.items">
                        <v-subheader class="overline font-weight-bold">{{item.title}}</v-subheader>
                        <v-list-item class="ml-5" v-for="item in item.items" :key="item.title" @click="$router.push({path: item.router})">
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-thin" v-text="item.title"></v-list-item-title>
                                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <template v-if="!item.items">
                        <v-list-item @click="$router.push({path: item.router})">
                            <v-list-item-content>
                                <v-list-item-title class="font-weight-thin" v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app light color="white" flat>
            <v-toolbar-title @click="$router.push({path: '/'})" style="width: 500px; cursor: pointer;" class="ml-0 pl-4 text--white">
                <v-img :src="$site.themeConfig.logo" width="200px"></v-img>
            </v-toolbar-title>
            <v-spacer />
            <v-spacer />
            <v-spacer />
            <v-spacer />
            <!-- <v-btn icon @click="searchDrawer = !searchDrawer">
                <v-icon>search</v-icon>
            </v-btn> -->
            <v-app-bar-nav-icon @click.stop="rightDrawer = !rightDrawer" class="mr-3" />
        </v-app-bar>
        <v-container>
            <v-content>
                <DefaultGlobalLayout />
            </v-content>
        </v-container>
    </v-app>
</template>
<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import SearchBox from '../components/SearchBox.vue'

export default {
    components: {
        DefaultGlobalLayout: GlobalLayout,
        SearchBox
    },
    props: {

    },
    data: () => ({
        dialog: false,
        drawer: null,
        rightDrawer: false,
        searchDrawer: false,
        speedDial: false,
        rightSidebarItems: [{
                title: 'Food',
                router: '/food/'
            },
            {
                title: 'Blog',
                router: '/blog/'
            }
        ]
    }),

    computed: {

    },

    methods: {

    }
}
</script>