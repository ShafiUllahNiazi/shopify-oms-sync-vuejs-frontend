<template>
<div>
    <Navbar />
    <v-main>
        <div class="table-wrapper no-pagination">
            <div class="table-actions-row">
                <div class="table-search">
                    <v-text-field label="Search" @change="search_function" prepend-inner-icon="mdi-magnify"></v-text-field>
                </div>
                <div class="table-actions">
                    <!-- <v-btn small v-on:click="getLogs" color="primary" outlined>
                        <v-icon>mdi-refresh</v-icon> Refresh list
                    </v-btn> -->
                    <v-btn color="#000000" style="color: white;" depressed @click="getLogs()">Refresh Logs</v-btn>
                    <v-btn color="#000000" style="color: white;" depressed @click="syncInventory()">Sync Inventory</v-btn>
                    <v-btn color="#000000" style="color: white;" depressed @click="syncPrice()">Sync Price</v-btn>
                </div>
            </div>
            <v-data-table :loading="loading_data" loading-text="Loading... Please wait" :headers="headers" :items="logs" disable-pagination disable-sort :items-per-page="itemsPerPage" :search="search" v-model="selected" item-key="id" class="elevation-1">
            </v-data-table>
            <div class="table-pagnation">
                <!-- <div class="per-page">
                    <span>Rows per page:</span>
                    <v-select v-model="itemsPerPage" :items="perPageOptions" @change="handleFilterAdd($event, 'limit_filter')" label=""></v-select>
                </div> -->
                <div class="pager">
                    <v-btn icon :disabled="!previous_page_url" v-on:click="getPreviousPageLogs">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-btn icon :disabled="!next_page_url" v-on:click="getNextPageLogs">
                        <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
        <!-- Snack Bar -->
        <v-snackbar v-model="snackbar" :timeout="snackbar_timeout">
            {{ snackbar_text }}
            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-main>
</div>
</template>

<style lang="scss" src="./Logs.scss"></style>

<script src="./Logs.js"></script>