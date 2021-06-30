<template>
    <v-row no-gutters align="center" justify="center">
        <v-col cols="12" sm="12" md="12">
            <BaseListLayout v-if="$pagination" />
            <Content v-else />
        </v-col>
    </v-row>
</template>