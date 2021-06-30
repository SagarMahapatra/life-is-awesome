<template>
    <v-container class="mt-5 pt-5">
        <v-row>
            <v-col>
                <v-row>
                    <v-col class="col-lg-10 col-12">
                        <div class="display-1 mb-1 text-wrap">{{$page.title}}</div>
                        <div class="justify-end">
                            <v-btn x-small text class="grey--text" v-if="$page.frontmatter.date">{{new Date($page.frontmatter.date).toString().slice(4, 15)}}</v-btn>
                            <v-btn x-small text class="grey--text">{{$page.readingTime.text}}</v-btn>
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
                <!-- <v-toolbar extended flat class="px-0 mx-0">
                    <v-list-item three-line class="px-0 mx-0">
                        <v-list-item-content>
                            <v-list-item-title class="display-1 mb-1 text-wrap">{{$page.title}}</v-list-item-title>
                            <div class="justify-end">
                                <v-btn x-small text class="grey--text" v-if="$page.frontmatter.date">{{new Date($page.frontmatter.date).toString().slice(4, 15)}}</v-btn>
                                <v-btn x-small text class="grey--text">{{$page.readingTime.text}}</v-btn>
                            </div>
                            <div class="justify-end">
                                <v-chip class="ma-2" small label outlined v-for="tag in $page.frontmatter.tags" :key="tag" @click="$router.push({path : '/tag/'+tag})">
                                    #{{tag}}
                                </v-chip>
                            </div>
                        </v-list-item-content>
                        <v-list-item-avatar tile size="100" color="grey">
                            <v-img :src="$site.themeConfig.baseUrl + $page.frontmatter.image + '-2.jpg'" :lazy-src="$site.themeConfig.baseUrl + $page.frontmatter.image + '-0.jpg'" aspect-ratio="1" class="grey lighten-2">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-toolbar> -->
                <v-card flat>
                    <v-card-text>
                        <Content />
                        <hr />
                        <Comment />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Toc from '@theme/components/Toc.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
    components: {
        Toc,
        Comment,
    },
}
</script>