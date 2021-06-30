<template>
    <v-card flat>
        <v-toolbar dense flat class="ml-0 pl-0">
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
            <v-toolbar-title class="ml-0 pl-0 headline font-weight-thin">Blog Posts</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn> -->
            <!-- <v-btn x-small text v-if="$route.path !== '/tag/food/'" @click="$router.push({path: '/tag/food/'})">
    view all
</v-btn> -->
        </v-toolbar>
        <v-divider class="my-0"></v-divider>
        <v-row v-if="foodPosts.length">
            <v-col cols="4" v-for="page in foodPosts" :key="page.title">
                <v-hover v-slot:default="{ hover }">
                    <v-card flat class="my-3" tile :elevation="hover ? 1 : 0" :class="{ 'on-hover': hover }" @click="$router.push({path : page.path})">
                        <!-- <v-card class="ma-2" flat> -->
                        <v-card-text class="pa-0">
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <!-- <div class="overline mb-4">{{page.description}}</div> -->
                                    <v-list-item-title class="headline mb-1">{{page.title}}</v-list-item-title>
                                    <v-list-item-subtitle>{{ page.frontmatter.summary || page.summary }}</v-list-item-subtitle>
                                    <div>
                                        <v-btn x-small text class="grey--text" v-if="page.frontmatter.date">{{new Date(page.frontmatter.date).toString().slice(4, 15)}}</v-btn>
                                        <v-btn x-small text class="grey--text">{{page.readingTime.text}}</v-btn>
                                    </div>
                                </v-list-item-content>
                                <v-list-item-avatar tile size="100" color="grey">
                                    <v-img :src="page.frontmatter.image" :alt="page.title"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
export default {
    name: 'post-item',

    props: ['page']
}
</script>
<style>
</style>