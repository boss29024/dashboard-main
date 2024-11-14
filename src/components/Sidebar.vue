<template>
    <v-navigation-drawer app>
        <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <img src="logo.png" alt="Komgrip Technologies">
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Komgrip Technologies</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item-group>
                <v-list-item v-for="item in menuItems" :key="item.text">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { text: 'Dashboard', icon: 'mdi-view-dashboard' },
                { text: 'Menu 1', icon: 'mdi-square' },
                { text: 'Menu 2', icon: 'mdi-square' },
                { text: 'Menu 3', icon: 'mdi-square' },
                { text: 'Menu 4', icon: 'mdi-square' },
            ],
        };
    },
};
</script>