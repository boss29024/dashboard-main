<template>
    <v-table>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Supply/Max Supply</th>
                <th>USD</th>
                <th>24 Hr</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(crypto, index) in cryptocurrencies" :key="crypto.id">
                <td>{{ index + 1 }}</td>
                <td>{{ crypto.name }}</td>
                <td>{{ crypto.symbol }}</td>
                <td>{{ crypto.supply }} / {{ crypto.maxSupply }}</td>
                <td>{{ crypto.price | currency }}</td>
                <td :class="crypto.change > 0 ? 'text--green' : 'text--red'">{{ crypto.change }}%</td>
            </tr>
        </tbody>
    </v-table>
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