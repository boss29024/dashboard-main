<template>
    <v-row>
        <v-col v-for="crypto in cryptocurrencies" :key="crypto.id" cols="12" md="3">
            <v-card>
                <v-card-title>{{ crypto.name }}</v-card-title>
                <v-card-subtitle>{{ crypto.price | currency }}</v-card-subtitle>
                <v-card-text :class="crypto.change > 0 ? 'text--green' : 'text--red'">
                    {{ crypto.change }}%
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import apiClient from '@/plugins/api';

export default {
    data() {
        return {
            cryptocurrencies: [],
        };
    },
    mounted() {
        apiClient.get('/assets').then(response => {
            this.cryptocurrencies = response.data;
        });
    },
    filters: {
        currency(value) {
            return `$${value.toFixed(2)}`;
        },
    },
};
</script>