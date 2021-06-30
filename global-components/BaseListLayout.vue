<template>
    <v-card flat class="fill-height">
        <v-row class="my-5 justify-content-between" v-if="this.$route.meta.pid !== 'tag'">
            <v-col class="col-12 col-lg-7">
                <recent-food-posts></recent-food-posts>
            </v-col>
            <v-col class="col-12 col-lg-4">
                <popular-posts :popularPosts="popularPosts"></popular-posts>
            </v-col>
            <v-col class="col-12 col-lg-7">
                <!-- 
                <blog-posts :blogPosts="recentBlogPosts"></blog-posts> -->
                <recent-blog-posts></recent-blog-posts>
            </v-col>
        </v-row>
        <!-- <v-row class="my-5 justify-content-between" v-if="isBlogTag">
    <v-col class="col-12 col-lg-12">
        <all-blog-posts>
        </all-blog-posts>
    </v-col>
</v-row>
<v-row class="my-5 justify-content-between" v-if="isFoodTag">
    <v-col class="col-12 col-lg-12">
        <all-food-posts>
        </all-food-posts>
    </v-col>
</v-row> -->
</v-card>
</template>
<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import PopularPosts from '../components/PopularPosts'
import RecentFoodPosts from '../docs/.vuepress/components/RecentFoodPosts'
import AllFoodPosts from '../docs/.vuepress/components/AllFoodPosts'
import RecentBlogPosts from '../docs/.vuepress/components/RecentBlogPosts'
import AllBlogPosts from '../docs/.vuepress/components/AllBlogPosts'
import PostItem from '../components/PostItem'

export default {
    components: { PopularPosts, RecentFoodPosts, RecentBlogPosts, PostItem, AllFoodPosts, AllBlogPosts },

    computed: {

        pages() {
            if (this.$route.meta.pid == 'tag') {
                const pages = this.$tag.list.filter(tag => {
                    return tag.path === this.$route.path
                })[0]
                return pages
            }

            return this.$site.pages.filter(page => {
                return !page.path.startsWith('/tag/') &&
                    !page.path.startsWith('/page/') &&
                    page.path !== '/'
            })
            // return this.$site.pages.filter(page => page.frontmatter.blog).slice(0, 9)

        },
        recentBlogPosts() {
            return this.$site.pages.filter(page => page.frontmatter.blog).slice(0, 5)
        },
        blogPosts() {
            return this.$site.pages.filter(page => page.frontmatter.blog).slice(0, 20)
        },

        popularPosts() {
            return this.$site.pages.filter(page => page.frontmatter.popular).slice(0, 5)
        },
        recentFoodPosts() {
            return this.$site.pages.filter(page => page.frontmatter.food).slice(0, 3)
        },
        foodPosts() {
            return this.$site.pages.filter(page => page.frontmatter.food).slice(0, 9)
        },
        popularFoodPosts() {
            return this.$site.pages.filter(page => page.frontmatter.popular).filter(page => page.frontmatter.food).slice(0, 9)
        },

        isFoodTag() {
            return this.$route.path === '/tag/food/';
        },
        isDefaultTag() {
            return !this.isFoodTag && this.$route.meta.pid === 'tag';
        }
    },

    methods: {
        resovlePostDate(date) {
            return new Date(date.replace(/\-/g, "/").trim()).toDateString()
        }
    },

}
</script>