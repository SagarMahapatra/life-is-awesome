<template>
    <!-- <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn> -->
    <!-- <v-btn x-small text v-if="$route.path !== '/tag/food/'" @click="$router.push({path: '/tag/food/'})">
    view all
</v-btn> -->
    <v-hover v-slot:default="{ hover }">
        <v-card flat class="my-3" tile :elevation="hover ? 1 : 0" :class="{ 'on-hover': hover }" @click="$router.push({path : page.path})">
            <!-- <v-card class="ma-2" flat> -->
            <v-card-text class="pa-0">
                <v-list-item three-line>
                    <v-list-item-content>
                        <!-- <div class="overline mb-4">{{page.description}}</div> -->
                        <v-list-item-title class="subtitle-1 mb-1">{{page.title}}</v-list-item-title>
                        <v-list-item-subtitle>{{ page.frontmatter.summary || page.summary }}</v-list-item-subtitle>
                        <div>
                            <v-btn x-small text class="grey--text" v-if="page.frontmatter.date">{{new Date(page.frontmatter.date).toString().slice(4, 15)}}</v-btn>
                            <v-btn x-small text class="grey--text">{{page.readingTime.text}}</v-btn>
                        </div>
                    </v-list-item-content>
                    <v-list-item-avatar tile size="100" color="grey">
                        <v-img :src="$site.themeConfig.baseUrl + page.frontmatter.image + '-2.jpg'" :lazy-src="$site.themeConfig.baseUrl + page.frontmatter.image + '-0.jpg'" aspect-ratio="1" class="grey lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-list-item-avatar>
                </v-list-item>
            </v-card-text>
        </v-card>
    </v-hover>
</template>
<script>
export default {
    name: 'blog-posts',

    props: ['page']
}
</script>
<style>
</style>