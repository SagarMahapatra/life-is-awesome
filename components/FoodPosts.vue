<template>
    <!-- <v-card flat>
        <v-toolbar dense flat class="ml-0 pl-0">
            <v-toolbar-title class="ml-0 pl-0 headline font-weight-thin">Food Posts</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn x-small text v-if="$route.path !== '/food/'" @click="$router.push({path: '/food/'})">
                view all
            </v-btn>
        </v-toolbar>
        <v-divider class="my-0"></v-divider>-->
    <!-- <v-row v-if="foodPosts.length">
        <v-col v-for="(page, i) in foodPosts" :key="i"> -->
    <v-hover v-slot:default="{ hover }" class="fill-height">
        <v-card class="mx-auto" tile :elevation="hover ? 2 : 0" :class="{ 'on-hover': hover }" @click="$router.push({path : page.path})">
            <v-img v-if="page.frontmatter.image" :src="$site.themeConfig.baseUrl + page.frontmatter.image + '-2.jpg'" :lazy-src="$site.themeConfig.baseUrl + page.frontmatter.image + '-0.jpg'" class="grey lighten-2" aspect-ratio="1">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
            <v-img v-if="!page.frontmatter.image" :src="$site.themeConfig.baseUrl + 'p3889969007' + '-2.jpg'" :lazy-src="$site.themeConfig.baseUrl + 'p3889969007' + '-0.jpg'" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
            <v-card-text class="pa-2 pt-2">
                <div class="subtitle-1 font-weight-thin text--primary">
                    {{page.title}}
                </div>
                <div style="height: 20px;" class="title font-weight-light caption text--secondary text-truncate">
                    {{page.frontmatter.description}}
                </div>
            </v-card-text>
            <!-- <v-card-actions class="px-0 pt-0" v-if="page.frontmatter.tags">
    <span class="mx-2 mb-2 grey--text caption" light v-for="tag in page.frontmatter.tags.slice(0,2)">
        #{{tag}}
    </span>
</v-card-actions> -->
        </v-card>
    </v-hover>
    <!-- </v-col>
    </v-row> -->
    <!-- </v-card> -->
</template>
<script>
export default {
    name: 'food-posts',

    props: ['page'],


}
</script>
<style>
</style>