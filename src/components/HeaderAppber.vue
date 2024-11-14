<template>
    <v-app-bar app>
        <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-avatar><v-icon>mdi-account</v-icon></v-avatar>
        </v-btn>
        <span>Phanuwit Hongsin</span>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbs: [
                { text: 'Pages', disabled: false },
                { text: 'Dashboard', disabled: true },
            ],
        };
    },
};
</script>