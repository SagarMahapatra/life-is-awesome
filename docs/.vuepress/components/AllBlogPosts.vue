<template>
    <v-card flat class="fill-height" tile>
        <!-- <v-row>
    <v-col>
        Filter By <v-btn :disabled="filteredByTag === tag" @click="filterBy(tag)" small outlined class="ml-2" v-for=" tag in blogTags">{{tag}}</v-btn>
    </v-col>
</v-row> -->
        <v-row class=" justify-content-between">
            <v-col class="col-lg-12">
                <v-card flat tile>
                    <v-row class="ml-0 pl-0">
                        <v-col class="col-12 col-lg-4 headline font-weight-thin">Blog Posts</v-col>
                        <v-col class="col-lg-8 col-12 justify-end">
                            <v-btn :disabled="filteredByTag === tag" @click="filterBy(tag)" small outlined class="ma-1" v-for=" tag in blogTags">{{tag}}</v-btn>
                        </v-col>
                    </v-row>
                    <v-divider class="my-0"></v-divider>
                    <v-row v-if="allFoodPosts.length">
                        <v-col class="col-12" v-for="(page, i) in allFoodPosts" :key="i">
                            <v-card flat tile>
                                <blog-posts :page="page"></blog-posts>
                            </v-card>
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
import BlogPosts from '../../../components/BlogPosts'
export default {
    data: () => ({
        filteredByTag: '',
    }),
    components: { BlogPosts },

    computed: {

        allFoodPosts() {
            const allPages = this.$site.pages.filter(page => page.path !== '/blog/').filter(page => page.path.indexOf('/blog/') >= 0).sort(function(a, b) {
                var dateA = new Date(a.date),
                    dateB = new Date(b.date);
                return dateA - dateB;
            })
            if (this.filteredByTag && this.filteredByTag.length > 0) {
                return allPages.filter(page => page.frontmatter.tags.indexOf(this.filteredByTag) >= 0)
            }

            return allPages;
        },
        blogTags() {
            return this.$site.themeConfig.nav.filter(elem => elem.path === '/blog/')[0].tags
        },

    },

    methods: {
        filterBy(tag) {
            this.filteredByTag = tag
        }
    },

}
</script>
<style>
</style>