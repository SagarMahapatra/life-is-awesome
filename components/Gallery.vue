<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" width="800px" tile overlay-color="white" :overlay-opacity="50">
            <template v-slot:activator="{ on }">
                <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
                <v-row>
                    <v-col class="col-lg-8 cols-12" offset-lg="2">
                        <v-card flat>
                            <v-container fluid>
                                <v-row justify="center">
                                    <v-col v-for="(photoUrl, i) in photoUrls" :key="i" class="d-flex child-flex" cols="3">
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="mx-auto align-content-space-between" tile :elevation="hover ? 8 : 2" :class="{ 'on-hover': hover }" @click="$router.push({path : page.path})">
                                                <v-img v-on="on" :src="$site.themeConfig.baseUrl + photoUrl + '-5.jpg'" :lazy-src="$site.themeConfig.baseUrl + photoUrl + '-1.jpg'" aspect-ratio="1" class="grey lighten-2">
                                                    <template v-slot:placeholder>
                                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                        </v-row>
                                                    </template>
                                                </v-img>
                                            </v-card>
                                        </v-hover>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </template>
            <v-card class="fill-height" tile color="white">
                <v-carousel color="white" hide-delimiter-background show-arrows-on-hover cycle height="600">
                    <!-- <v-toolbar dark class="transparent">
                        <v-spacer></v-spacer>
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar> -->
                    <v-carousel-item v-for="(photoUrl, i) in photoUrls" :key="i" class="fill-height">
                        <!-- <v-sheet color="purple" height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="display-3">Slide</div>
                            </v-row>
                        </v-sheet> -->
                        <v-img :src="$site.themeConfig.baseUrl + photoUrl + '-5.jpg'" class="grey lighten-2" height="100%" contain>
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-card>
        </v-dialog>
    </v-row>
    <!-- <v-row>
        <v-col cols="12">
            <v-card flat>
                <v-container fluid>
                    <v-row>
                        <v-col v-for="(photoUrl, i) in photoUrls" :key="i" class="d-flex child-flex" cols="4">
                            <v-card flat tile class="d-flex">
                                <v-img :src="$site.themeConfig.baseUrl + photoUrl + '-5.jpg'" :lazy-src="$site.themeConfig.baseUrl + photoUrl + '-1.jpg'" aspect-ratio="1" class="grey lighten-2">
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
</template>
<script>
export default {
    components: {},
    props: ['photoUrls'],

    data: () => ({
        dialog: false,
    }),

    computed: {

    },

    methods: {

    }
}
</script>