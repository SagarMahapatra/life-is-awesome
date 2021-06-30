<template>
    <v-card flat class="fill-height">
        <v-row class="no-gutters justify-content-between">
            <v-col class="col-lg-12">
                <v-card flat>
                    <v-toolbar dense flat class="ml-0 pl-0">
                        <v-toolbar-title class="ml-0 pl-0 headline font-weight-thin">Food Posts</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn x-small text v-if="$route.path !== '/food/'" @click="$router.push({path: '/food/'})">
                            view all
                        </v-btn>
                    </v-toolbar>
                    <v-divider class="my-0"></v-divider>
                    <v-row v-if="recentFoodPosts.length">
                        <v-col class="col-6 col-lg-4" v-for="(page, i) in recentFoodPosts" :key="i">
                            <food-posts :page="page"></food-posts>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import FoodPosts from '../../../components/FoodPosts'
export default {
    components: { FoodPosts },

    computed: {

        recentFoodPosts() {
            return this.$site.pages.filter(page => page.path !== '/food/').filter(page => page.path.indexOf('/food/') >= 0).sort(function(a, b) {
                var dateA = new Date(a.date),
                    dateB = new Date(b.date);
                return dateA - dateB;
            }).slice(0, 3)
        }
    },

    methods: {
        // resovlePostDate(date) {
        //     return new Date(date.replace(/\-/g, "/").trim()).toDateString()
        // }
    },

}
</script>
<style>
</style>