<template>
    <v-container>
        <v-row>
            <v-col>
                <v-row>
                    <v-col class="col-lg-10 col-12">
                        <div class="display-1 mb-1 text-wrap">{{$page.title}}</div>
                        <div class="justify-end">
                            <v-btn x-small text class="grey--text" v-if="$page.frontmatter.date">{{new Date($page.frontmatter.date).toString().slice(4, 15)}}</v-btn>
                            <!-- <v-btn x-small text class="grey--text">{{$page.readingTime.text}}</v-btn> -->
                        </div>
                        <div class="justify-end">
                            <v-chip class="ma-2" small label outlined v-for="tag in $page.frontmatter.tags" :key="tag" @click="$router.push({path : '/tag/'+tag})">
                                #{{tag}}
                            </v-chip>
                        </div>
                    </v-col>
                    <v-col class="col-lg-2 col-12">
                        <v-img :src="$site.themeConfig.baseUrl + $page.frontmatter.image + '-2.jpg'" :lazy-src="$site.themeConfig.baseUrl + $page.frontmatter.image + '-0.jpg'" aspect-ratio="1" class="grey lighten-2">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-col>
                </v-row>
                <v-row class="justify-space-around">
                    <v-col class="col-12 col-lg-6" v-if="$page.frontmatter.ingredients && $page.frontmatter.ingredients.length > 0">
                        <v-card flat>
                            <v-list disabled dense>
                                <span class="headline font-weight-thin">Ingredients</span>
                                <v-divider class="my-1"></v-divider>
                                <ul>
                                    <li v-for="(item, i) in $page.frontmatter.ingredients" :key="i">{{item}}</li>
                                </ul>
                                <!-- <div v-for="(item, i) in $page.frontmatter.ingredients" :key="i" class="py-2">
                                    <v-icon>mdi-check-circle-outline</v-icon>
                                    <span class="pl-4">{{item}}</span>
                                </div> -->
                            </v-list>
                        </v-card>
                    </v-col>
                    <v-col class="col-12 col-lg-6" v-if="$page.frontmatter.prep_time || $page.frontmatter.cook_time || $page.frontmatter.passive_time || $page.frontmatter.original_recipe">
                        <v-card flat>
                            <v-list dense>
                                <span class="headline font-weight-thin">Info</span>
                                <v-divider class="my-1"></v-divider>
                                <div v-if="$page.frontmatter.prep_time" class="py-2">
                                    <v-icon>mdi-timelapse</v-icon> Prep Time:
                                    <span class="pl-4">{{$page.frontmatter.prep_time}}</span>
                                </div>
                                <div v-if="$page.frontmatter.cook_time" class="py-2">
                                    <v-icon>mdi-timer-sand</v-icon> Cook Time:
                                    <span class="pl-4">{{$page.frontmatter.cook_time}}</span>
                                </div>
                                <div v-if="$page.frontmatter.passive_time" class="py-2">
                                    <v-icon>mdi-timer-sand-empty</v-icon> Passive Time:
                                    <span class="pl-4">{{$page.frontmatter.passive_time}}</span>
                                </div>
                                <div v-if="$page.frontmatter.original_recipe" class="py-2">
                                    <v-icon>mdi-information-outline</v-icon> Original Recipe:
                                    <span class="pl-4"><a :href="$page.frontmatter.original_recipe" target="_blank">source</a></span>
                                </div>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <Content />
                    </v-col>
                </v-row>
                <!-- <v-card flat>
                    <v-card-text>
                        <Content />
                    </v-card-text>
                </v-card> -->
                <v-card flat>
                    <v-card-text>
                        <Gallery :photo-urls="$page.frontmatter.gallery"></Gallery>
                    </v-card-text>
                </v-card>
                <!-- <v-row v-if="$page.frontmatter.gallery" class="mx-5" no-gutters>
                    <v-col cols="12 mx-5">
                        <v-card flat>
                            <span class="headline font-weight-thin">Gallery</span>
                            <v-divider class="my-1"></v-divider>
                            <v-container fluid>
                                <v-row>
                                    <v-col v-for="gallery in $page.frontmatter.gallery" :key="gallery" class="d-flex child-flex" cols="3">
                                        <v-card flat tile class="d-flex">
                                            <v-img :src="$site.themeConfig.baseUrl + gallery + '-2.jpg'" :lazy-src="$site.themeConfig.baseUrl + gallery + '-0.jpg'" aspect-ratio="1" class="grey lighten-2">
                                                <template v-slot:placeholder>
                                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row> -->
            </v-col>
            <!-- <v-col cols="4">
    <v-card class="mx-auto px-2" max-width="300" tile outlined>
        <v-list disabled dense>
            <v-subheader>INGREDIENTS</v-subheader>
            <v-list-item-group color="primary" dense>
                <v-list-item v-for="(item, i) in $page.frontmatter.ingredients" :key="i">
                    <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</v-col> -->
        </v-row>
    </v-container>
</template>
<script>
import Toc from '@theme/components/Toc.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
import Gallery from '@theme/components/Gallery.vue'

export default {
    components: {
        Toc,
        Comment,
        Gallery,
    },
}
</script>
<style lang="stylus">
@require '../styles/wrapper.styl';

.vuepress-blog-theme-content {
    @extend $wrapper;
    font-size: 16px;
    letter-spacing: 0px;
    color: #2c3e50;
    position: relative;

    p {
        font-family: 'Lora', serif;
        margin-top: 0.86em;
        font-size: 1.3rem;
    }

    li {
        font-family: 'Lora', serif;
    }

    .header-anchor {
        display: none;
    }

    h1:not(.h1),
    h2,
    h3 {
        margin-top: 3rem;
    }
}
</style>