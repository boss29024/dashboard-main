<template>
    <v-container>
        <v-navigation-drawer app elevation="0">
            <v-list>
                <v-list-item title="Komgrip Technologies" prepend-avatar="./assets/logo.png"></v-list-item>
                <v-divider></v-divider>

                <v-list-item link>
                    <v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>

                <v-list-item link v-for="(menu, index) in menus" :key="index">
                    <v-list-item-icon><v-icon>mdi-square</v-icon></v-list-item-icon>
                    <v-list-item-title>{{ menu }}</v-list-item-title>
                </v-list-item>

                <!-- Help Card -->
                <v-card class="mt-6">
                    <v-card-title>Need help?</v-card-title>
                    <v-card-subtitle>CoinCap API 2.0</v-card-subtitle>
                    <v-card-actions>
                        <v-btn outlined>DOCUMENTATION</v-btn>
                    </v-card-actions>
                </v-card>
            </v-list>
        </v-navigation-drawer>

        <!-- Main Content -->
        <v-main class="pa-0 ma-0">
            <v-container fluid>
                <!-- Toolbar -->
                <v-toolbar flat>
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
                    <v-spacer></v-spacer>
                    <v-btn icon><v-icon>mdi-account-circle</v-icon></v-btn>
                    <span class="pr-2">Phanuwit Hongsin</span>
                </v-toolbar>

                <!-- Cryptocurrency Cards -->
                <v-row class="mb-4 pt-4">
                    <v-col v-for="(crypto, index) in cryptos" :key="index" cols="12" md="3">
                        <v-card>
                            <v-card-title>
                                {{ crypto.name }}
                                <v-icon class="ml-auto" color="purple">mdi-currency-usd</v-icon>
                            </v-card-title>
                            <v-card-subtitle class="headline pa-2 ma-2">${{ crypto.price }}</v-card-subtitle>
                            <div :class="crypto.change >= 0 ? 'text-success' : 'text-error'" class="pa-2 ma-2">
                                {{ crypto.change }}%
                            </div>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Data Table -->
                <v-card class="rounded-xl">
                    <v-col class="d-flex justify-space-around" cols="12">
                        <v-col cols="10">
                            <v-card-title variant="text">
                                Cryptocurrencies
                                <v-spacer></v-spacer>
                            </v-card-title>
                        </v-col>
                        <v-col cols="2">
                            <v-btn class="pa-2 mr-2" variant="outlined"><v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                            <v-btn variant="outlined"><v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                        </v-col>
                    </v-col>
                    <v-data-table :headers="headers" :items="cryptoDetails" class="elevation-0">
                        <template #item.change="{ item }">
                            <span :class="item.change >= 0 ? 'text-success' : 'text-error'">
                                {{ item.change }}%
                            </span>
                        </template>
                    </v-data-table>
                </v-card>
            </v-container>

            <!-- Footer -->
            <v-footer padless>
                <v-col class="text-center">
                    &copy; 2022 Komgrip Technologies Co., Ltd.
                </v-col>
            </v-footer>
        </v-main>
    </v-container>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import axios from "@/plugins/axios";

// Sidebar menu items
const menus = ref(['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4']);

// Breadcrumbs
const breadcrumbs = [
    { title: 'Pages', disabled: false },
    { title: 'Dashboard', disabled: false }
];

// Cryptocurrency cards
const cryptos = ref([
    { name: 'Bitcoin', price: '38,992.4', change: 1.32 },
    { name: 'Ethereum', price: '2,763.07', change: 5.98 },
    { name: 'Solana', price: '90.96', change: -3.62 },
    { name: 'Dogecoin', price: '0.13', change: 3.94 }
]);

// Data table headers
const headers = ref([
    { title: 'No', key: 'rank', sortable: false },
    { title: 'Name', key: 'name' },
    { title: 'Symbol', key: 'symbol' },
    { title: 'Supply/Max Supply', key: 'supply' },
    { title: 'USD', key: 'priceUsd' },
    { title: '24 HR', key: 'vwap24Hr' }
]
);
// Data table items
const cryptoDetails = ref([
]);


const fetchData = async () => {
    try {
        const response = await axios.get(`/assets`);
        console.log(response.data.data);
        cryptoDetails.value = response.data.data


    } catch (error) {
        console.log("error", error);
    }
}

onMounted(async () => {
    await fetchData();
});
</script>

<style scoped>
.text-success {
    color: #4CAF50;
}

.text-error {
    color: #F44336;
}

.v-data-table {
    font-size: 0.875rem;
}

.v-navigation-drawer {
    box-shadow: none !important;
    border: none !important;
}
</style>