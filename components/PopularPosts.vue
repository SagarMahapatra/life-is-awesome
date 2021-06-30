<template>
    <v-card flat>
        <div class="popular-posts" v-if="popularPosts.length">
            <h2 class="font-weight-thin">Highlights</h2>
            <hr>
            <ol class="list-unstyled  mx-5 px-5">
                <li v-for="post in popularPosts" :key="post.key" class="mb-5 popular-list-item">
                    <router-link :to="post.path">
                        <h3 class="text-dark h6">
                            {{post.title}}
                        </h3>
                        <p class="text-secondary">{{post.frontmatter.description}}</p>
                    </router-link>
                </li>
            </ol>
        </div>
    </v-card>
</template>
<script>
export default {
    name: 'popular-posts',

    props: ['popularPosts']
}
</script>
<style>
</style>