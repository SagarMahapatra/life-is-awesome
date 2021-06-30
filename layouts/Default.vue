<template>
    <!-- <div id="vuperess-theme-blog__post-layout">
    <div class="vuepress-blog-theme-content mt-5">
      <div class="my-5">
        <h1 class="h1 my-3 font-weight-light font-serif">{{$page.title}}</h1>
      </div>
      <Content />
      <hr />
      <Comment />
    </div>
  </div> -->
    <v-container>
        <v-row style="margin-top: 20px;">
            <v-col>
                <v-toolbar extended flat class="px-0 mx-0">
                    <v-list-item three-line class="px-0 mx-0">
                        <v-list-item-content>
                            <v-list-item-title class="display-1 mb-1">{{$page.title}}</v-list-item-title>
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
                            <v-img :src="$page.frontmatter.image" :alt="$page.title"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-toolbar>
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